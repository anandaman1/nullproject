import React, { useState } from 'react';
import { Plus, Heart, MessageCircle, Share2, Image, Video, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

const PublicTab: React.FC = () => {
  const { 
    currentUser, 
    users, 
    posts, 
    addPost, 
    likePost, 
    addComment, 
    canPost 
  } = useApp();
  
  const { t } = useLanguage();
  
  const [showNewPost, setShowNewPost] = useState(false);
  const [newPostContent, setNewPostContent] = useState('');
  const [mediaType, setMediaType] = useState<'image' | 'video' | null>(null);
  const [mediaUrl, setMediaUrl] = useState('');
  const [commentContent, setCommentContent] = useState<{ [key: string]: string }>({});

  const handleSubmitPost = () => {
    if (!newPostContent.trim() || !currentUser) return;
    if (!canPost()) return;

    addPost({
      userId: currentUser.id,
      content: newPostContent,
      media: mediaType && mediaUrl ? { type: mediaType, url: mediaUrl } : undefined
    });

    setNewPostContent('');
    setMediaType(null);
    setMediaUrl('');
    setShowNewPost(false);
  };

  const handleSubmitComment = (postId: string) => {
    const content = commentContent[postId];
    if (!content?.trim()) return;

    addComment(postId, content);
    setCommentContent({ ...commentContent, [postId]: '' });
  };

  const getUserById = (id: string) => users.find(u => u.id === id);

  const getPostingStatus = () => {
    if (!currentUser) return t('common.loading');
    if (currentUser.friends.length === 0) return t('public.needFriendsToPost');
    if (!canPost()) return t('public.dailyLimitReached');
    return null;
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t('public.title')}</h2>
            <p className="text-gray-600 mt-1">{t('public.subtitle')}</p>
            {currentUser && (
              <p className="text-sm text-gray-500 mt-1">
                {t('public.friends')}: {currentUser.friends.length} • 
                {currentUser.friends.length === 0 && ` ${t('public.needFriends')}`}
                {currentUser.friends.length > 0 && currentUser.friends.length <= 10 && ` ${t('public.canPost')} ${currentUser.friends.length >= 2 ? t('public.twicePer') : t('public.oncePer')}`}
                {currentUser.friends.length > 10 && ` ${t('public.unlimited')}`}
              </p>
            )}
          </div>
          <button
            onClick={() => setShowNewPost(!showNewPost)}
            disabled={!canPost()}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
              canPost()
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-400 text-gray-200 cursor-not-allowed'
            }`}
          >
            <Plus className="w-5 h-5 mr-2" />
            {t('public.newPost')}
          </button>
        </div>
      </div>

      {/* Posting Status */}
      {getPostingStatus() && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-800">{getPostingStatus()}</p>
        </div>
      )}

      {/* New Post Form */}
      {showNewPost && canPost() && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">{t('public.createPost')}</h3>
          <div className="space-y-4">
            <textarea
              placeholder={t('public.whatsOnMind')}
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            
            {/* Media Upload */}
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setMediaType(mediaType === 'image' ? null : 'image')}
                  className={`flex items-center px-3 py-2 rounded-lg border transition-colors ${
                    mediaType === 'image' 
                      ? 'bg-blue-100 border-blue-300 text-blue-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Image className="w-4 h-4 mr-2" />
                  {t('public.image')}
                </button>
                <button
                  onClick={() => setMediaType(mediaType === 'video' ? null : 'video')}
                  className={`flex items-center px-3 py-2 rounded-lg border transition-colors ${
                    mediaType === 'video' 
                      ? 'bg-blue-100 border-blue-300 text-blue-700' 
                      : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  <Video className="w-4 h-4 mr-2" />
                  {t('public.video')}
                </button>
              </div>
            </div>

            {mediaType && (
              <input
                type="url"
                placeholder={t('public.enterUrl', { type: t(`public.${mediaType}`) })}
                value={mediaUrl}
                onChange={(e) => setMediaUrl(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}

            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={handleSubmitPost}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('public.post')}
              </button>
              <button
                onClick={() => setShowNewPost(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('questions.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post) => {
          const author = getUserById(post.userId);
          return (
            <div key={post.id} className="bg-white rounded-lg shadow-sm p-6">
              {/* Post Header */}
              <div className="flex items-start space-x-4">
                <img
                  src={author?.avatar}
                  alt={author?.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-semibold text-gray-900">{author?.name}</h3>
                    <span className="text-gray-500">•</span>
                    <p className="text-sm text-gray-600 flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="text-gray-700 mt-2">{post.content}</p>
                  
                  {/* Media */}
                  {post.media && (
                    <div className="mt-4 rounded-lg overflow-hidden max-w-md">
                      {post.media.type === 'image' ? (
                        <img
                          src={post.media.url}
                          alt="Post media"
                          className="w-full h-auto max-h-96 object-cover"
                        />
                      ) : (
                        <video
                          src={post.media.url}
                          controls
                          className="w-full h-auto max-h-96"
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Post Actions */}
              <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                <div className="flex items-center space-x-6">
                  <button
                    onClick={() => likePost(post.id)}
                    className={`flex items-center space-x-1 transition-colors ${
                      post.likes.includes(currentUser?.id || '')
                        ? 'text-red-600'
                        : 'text-gray-600 hover:text-red-600'
                    }`}
                  >
                    <Heart className={`w-5 h-5 ${post.likes.includes(currentUser?.id || '') ? 'fill-current' : ''}`} />
                    <span className="text-sm font-medium">{post.likes.length}</span>
                  </button>
                  <div className="flex items-center space-x-1 text-gray-600">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-sm">{post.comments.length}</span>
                  </div>
                  <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                    <Share2 className="w-5 h-5" />
                    <span className="text-sm">{post.shares}</span>
                  </button>
                </div>
              </div>

              {/* Comments */}
              {post.comments.length > 0 && (
                <div className="mt-4 space-y-3">
                  {post.comments.map((comment) => {
                    const commentAuthor = getUserById(comment.userId);
                    return (
                      <div key={comment.id} className="flex items-start space-x-3">
                        <img
                          src={commentAuthor?.avatar}
                          alt={commentAuthor?.name}
                          className="w-6 h-6 rounded-full"
                        />
                        <div className="flex-1 bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-sm font-medium text-gray-900">{commentAuthor?.name}</span>
                            <span className="text-xs text-gray-500">{new Date(comment.createdAt).toLocaleDateString()}</span>
                          </div>
                          <p className="text-sm text-gray-700 mt-1">{comment.content}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Comment Form */}
              <div className="mt-4 flex items-start space-x-3">
                <img
                  src={currentUser?.avatar}
                  alt={currentUser?.name}
                  className="w-6 h-6 rounded-full"
                />
                <div className="flex-1 flex gap-2">
                  <input
                    type="text"
                    placeholder={t('public.writeComment')}
                    value={commentContent[post.id] || ''}
                    onChange={(e) => setCommentContent({ ...commentContent, [post.id]: e.target.value })}
                    className="flex-1 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={() => handleSubmitComment(post.id)}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    {t('public.post')}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {posts.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('public.noPosts')}</h3>
          <p className="text-gray-600 mb-6">{t('public.noPostsDesc')}</p>
          {canPost() && (
            <button
              onClick={() => setShowNewPost(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('public.createFirst')}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default PublicTab;