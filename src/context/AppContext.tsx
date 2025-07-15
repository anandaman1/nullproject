import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, Question, Answer, Post } from '../types';
import { getTranslation } from '../utils/translations';

interface AppContextType {
  currentUser: User | null;
  users: User[];
  questions: Question[];
  posts: Post[];
  notifications: Notification[];
  setCurrentUser: (user: User | null) => void;
  addQuestion: (question: Omit<Question, 'id' | 'createdAt'>) => void;
  addAnswer: (answer: Omit<Answer, 'id' | 'createdAt'>) => void;
  upvoteQuestion: (questionId: string) => void;
  upvoteAnswer: (questionId: string, answerId: string) => void;
  addPost: (post: Omit<Post, 'id' | 'createdAt'>) => void;
  likePost: (postId: string) => void;
  addComment: (postId: string, content: string) => void;
  addFriend: (friendId: string) => void;
  toggleNotifications: () => void;
  showNotification: (title: string, body: string) => void;
  canPost: () => boolean;
}

interface NotificationData {
  id: string;
  title: string;
  body: string;
  createdAt: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [notifications, setNotifications] = useState<NotificationData[]>([]);

  useEffect(() => {
    // Initialize with demo data
    const demoUsers: User[] = [
      {
        id: '1',
        name: 'Aman Anand',
        email: 'aman@example.com',
        phone: '+5284669810',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400',
        friends: ['2', '3'],
        notificationsEnabled: true,
        lastPostDate: '',
        postCount: 0,
        preferredLanguage: 'en',
        isEmailVerified: true,
        isPhoneVerified: true
      },
      {
        id: '2',
        name: 'Shubham Anand',
        email: 'Shubham@example.com',
        phone: '+1234567891',
        avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400',
        friends: ['1'],
        notificationsEnabled: true,
        lastPostDate: '',
        postCount: 0,
        preferredLanguage: 'en',
        isEmailVerified: true,
        isPhoneVerified: true
      },
      {
        id: '3',
        name: 'Ravi Bhai',
        email: 'Ravi@example.com',
        phone: '+1234567892',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
        friends: ['1'],
        notificationsEnabled: true,
        lastPostDate: '',
        postCount: 0,
        preferredLanguage: 'en',
        isEmailVerified: true,
        isPhoneVerified: true
      }
    ];

    setUsers(demoUsers);
    setCurrentUser(demoUsers[0]);

    // Request notification permission
    if (Notification.permission === 'default') {
      Notification.requestPermission();
    }
  }, []);

  const addQuestion = (questionData: Omit<Question, 'id' | 'createdAt'>) => {
    const newQuestion: Question = {
      ...questionData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      upvotes: [],
      answers: []
    };
    setQuestions(prev => [newQuestion, ...prev]);
  };

  const addAnswer = (answerData: Omit<Answer, 'id' | 'createdAt'>) => {
    const newAnswer: Answer = {
      ...answerData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      upvotes: []
    };

    setQuestions(prev => prev.map(q => 
      q.id === answerData.questionId 
        ? { ...q, answers: [...q.answers, newAnswer] }
        : q
    ));

    // Notify question author
    const question = questions.find(q => q.id === answerData.questionId);
    if (question && question.userId !== currentUser?.id) {
      const answerAuthor = users.find(u => u.id === answerData.userId);
      showNotification(
        getTranslation('notification.newAnswer', currentUser.preferredLanguage || 'en'),
        getTranslation('notification.answerReceived', currentUser.preferredLanguage || 'en', {
          name: answerAuthor?.name || '',
          title: question.title
        })
      );
    }
  };

  const upvoteQuestion = (questionId: string) => {
    if (!currentUser) return;

    setQuestions(prev => prev.map(q => {
      if (q.id === questionId) {
        const hasUpvoted = q.upvotes.includes(currentUser.id);
        const newUpvotes = hasUpvoted
          ? q.upvotes.filter(id => id !== currentUser.id)
          : [...q.upvotes, currentUser.id];

        // Notify question author of upvote
        if (!hasUpvoted && q.userId !== currentUser.id) {
          const questionAuthor = users.find(u => u.id === q.userId);
          showNotification(
            getTranslation('notification.questionUpvoted', questionAuthor?.preferredLanguage || 'en'),
            getTranslation('notification.questionUpvotedMsg', questionAuthor?.preferredLanguage || 'en', {
              name: currentUser.name,
              title: q.title
            })
          );
        }

        return { ...q, upvotes: newUpvotes };
      }
      return q;
    }));
  };

  const upvoteAnswer = (questionId: string, answerId: string) => {
    if (!currentUser) return;

    setQuestions(prev => prev.map(q => {
      if (q.id === questionId) {
        const updatedAnswers = q.answers.map(a => {
          if (a.id === answerId) {
            const hasUpvoted = a.upvotes.includes(currentUser.id);
            const newUpvotes = hasUpvoted
              ? a.upvotes.filter(id => id !== currentUser.id)
              : [...a.upvotes, currentUser.id];

            // Notify answer author of upvote
            if (!hasUpvoted && a.userId !== currentUser.id) {
              const answerAuthor = users.find(u => u.id === a.userId);
              showNotification(
                getTranslation('notification.answerUpvoted', answerAuthor?.preferredLanguage || 'en'),
                getTranslation('notification.answerUpvotedMsg', answerAuthor?.preferredLanguage || 'en', {
                  name: currentUser.name
                })
              );
            }

            return { ...a, upvotes: newUpvotes };
          }
          return a;
        });
        return { ...q, answers: updatedAnswers };
      }
      return q;
    }));
  };

  const canPost = (): boolean => {
    if (!currentUser) return false;
    
    const today = new Date().toDateString();
    const friendCount = currentUser.friends.length;
    
    // No friends = can't post
    if (friendCount === 0) return false;
    
    // More than 10 friends = unlimited posts
    if (friendCount > 10) return true;
    
    // Check if already posted today
    const hasPostedToday = currentUser.lastPostDate === today;
    
    // 2 friends = can post 2 times a day
    if (friendCount >= 2) {
      return !hasPostedToday || currentUser.postCount < 2;
    }
    
    // 1 friend = can post once a day
    return !hasPostedToday;
  };

  const addPost = (postData: Omit<Post, 'id' | 'createdAt'>) => {
    if (!canPost()) return;

    const newPost: Post = {
      ...postData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      likes: [],
      comments: [],
      shares: 0
    };

    setPosts(prev => [newPost, ...prev]);

    // Update user's post count and last post date
    if (currentUser) {
      const today = new Date().toDateString();
      const isNewDay = currentUser.lastPostDate !== today;
      
      setCurrentUser({
        ...currentUser,
        lastPostDate: today,
        postCount: isNewDay ? 1 : currentUser.postCount + 1
      });

      setUsers(prev => prev.map(u => 
        u.id === currentUser.id 
          ? { ...u, lastPostDate: today, postCount: isNewDay ? 1 : u.postCount + 1 }
          : u
      ));
    }
  };

  const likePost = (postId: string) => {
    if (!currentUser) return;

    setPosts(prev => prev.map(p => {
      if (p.id === postId) {
        const hasLiked = p.likes.includes(currentUser.id);
        const newLikes = hasLiked
          ? p.likes.filter(id => id !== currentUser.id)
          : [...p.likes, currentUser.id];

        return { ...p, likes: newLikes };
      }
      return p;
    }));
  };

  const addComment = (postId: string, content: string) => {
    if (!currentUser) return;

    const newComment = {
      id: Date.now().toString(),
      userId: currentUser.id,
      content,
      createdAt: new Date().toISOString()
    };

    setPosts(prev => prev.map(p => 
      p.id === postId 
        ? { ...p, comments: [...p.comments, newComment] }
        : p
    ));
  };

  const addFriend = (friendId: string) => {
    if (!currentUser || currentUser.friends.includes(friendId)) return;

    const updatedUser = {
      ...currentUser,
      friends: [...currentUser.friends, friendId]
    };

    setCurrentUser(updatedUser);
    setUsers(prev => prev.map(u => 
      u.id === currentUser.id ? updatedUser : u
    ));
  };

  const toggleNotifications = () => {
    if (!currentUser) return;

    const updatedUser = {
      ...currentUser,
      notificationsEnabled: !currentUser.notificationsEnabled
    };

    setCurrentUser(updatedUser);
    setUsers(prev => prev.map(u => 
      u.id === currentUser.id ? updatedUser : u
    ));
  };

  const showNotification = (title: string, body: string) => {
    if (!currentUser?.notificationsEnabled) return;

    const notification: NotificationData = {
      id: Date.now().toString(),
      title,
      body,
      createdAt: new Date().toISOString()
    };

    setNotifications(prev => [notification, ...prev]);

    // Show browser notification
    if (Notification.permission === 'granted') {
      new Notification(title, { body });
    }
  };

  return (
    <AppContext.Provider value={{
      currentUser,
      users,
      questions,
      posts,
      notifications,
      setCurrentUser,
      addQuestion,
      addAnswer,
      upvoteQuestion,
      upvoteAnswer,
      addPost,
      likePost,
      addComment,
      addFriend,
      toggleNotifications,
      showNotification,
      canPost
    }}>
      {children}
    </AppContext.Provider>
  );
};