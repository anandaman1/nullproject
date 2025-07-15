export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar: string;
  friends: string[];
  notificationsEnabled: boolean;
  lastPostDate: string;
  postCount: number;
  preferredLanguage: string;
  isEmailVerified: boolean;
  isPhoneVerified: boolean;
}

export interface Question {
  id: string;
  userId: string;
  title: string;
  content: string;
  upvotes: string[];
  answers: Answer[];
  createdAt: string;
}

export interface Answer {
  id: string;
  userId: string;
  questionId: string;
  content: string;
  upvotes: string[];
  createdAt: string;
}

export interface Post {
  id: string;
  userId: string;
  content: string;
  media?: {
    type: 'image' | 'video';
    url: string;
  };
  likes: string[];
  comments: Comment[];
  shares: number;
  createdAt: string;
}

export interface Comment {
  id: string;
  userId: string;
  content: string;
  createdAt: string;
}