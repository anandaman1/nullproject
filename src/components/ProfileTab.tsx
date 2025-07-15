import React, { useState } from 'react';
import { Bell, BellOff, Users, UserPlus, Settings } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

const ProfileTab: React.FC = () => {
  const { currentUser, users, addFriend, toggleNotifications } = useApp();
  const { t } = useLanguage();
  const [showAddFriend, setShowAddFriend] = useState(false);

  if (!currentUser) return null;

  const availableFriends = users.filter(u => 
    u.id !== currentUser.id && !currentUser.friends.includes(u.id)
  );

  const friends = users.filter(u => currentUser.friends.includes(u.id));

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Profile Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-24 h-24 rounded-full"
          />
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-900">{currentUser.name}</h1>
            <p className="text-gray-600 mt-1">{currentUser.email}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <Users className="w-5 h-5" />
                <span>{currentUser.friends.length} {t('profile.friends').toLowerCase()}</span>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2 text-gray-600">
                <Settings className="w-5 h-5" />
                <span>{t('public.postsToday')}: {currentUser.postCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-lg font-semibold mb-4">{t('profile.notificationSettings')}</h2>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center space-x-3">
            {currentUser.notificationsEnabled ? (
              <Bell className="w-5 h-5 text-blue-600" />
            ) : (
              <BellOff className="w-5 h-5 text-gray-400" />
            )}
            <div>
              <p className="font-medium text-gray-900">{t('profile.browserNotifications')}</p>
              <p className="text-sm text-gray-600">
                {t('profile.notificationDesc')}
              </p>
            </div>
          </div>
          <button
            onClick={toggleNotifications}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentUser.notificationsEnabled
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {currentUser.notificationsEnabled ? t('profile.disable') : t('profile.enable')}
          </button>
        </div>
      </div>

      {/* Friends Section */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <h2 className="text-lg font-semibold">{t('profile.friends')} ({friends.length})</h2>
          <button
            onClick={() => setShowAddFriend(!showAddFriend)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            {t('profile.addFriend')}
          </button>
        </div>

        {/* Add Friend Form */}
        {showAddFriend && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium mb-3">{t('profile.addNewFriend')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {availableFriends.map((user) => (
                <div key={user.id} className="flex items-center space-x-3 p-3 bg-white rounded-lg">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{user.name}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <button
                    onClick={() => addFriend(user.id)}
                    className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    {t('profile.add')}
                  </button>
                </div>
              ))}
            </div>
            {availableFriends.length === 0 && (
              <p className="text-gray-600 text-center py-4">{t('profile.noMoreUsers')}</p>
            )}
          </div>
        )}

        {/* Friends List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <img
                src={friend.avatar}
                alt={friend.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1">
                <p className="font-medium text-gray-900">{friend.name}</p>
                <p className="text-sm text-gray-600">{friend.email}</p>
              </div>
            </div>
          ))}
        </div>

        {friends.length === 0 && (
          <div className="text-center py-8">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('profile.noFriends')}</h3>
            <p className="text-gray-600 mb-4">{t('profile.noFriendsDesc')}</p>
            <button
              onClick={() => setShowAddFriend(true)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              {t('profile.addFirstFriend')}
            </button>
          </div>
        )}
      </div>

      {/* Posting Rules */}
      <div className="bg-blue-50 rounded-lg p-6">
        <h3 className="font-semibold text-blue-900 mb-3">{t('profile.postingRules')}</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <p>• {t('profile.rule0')}</p>
          <p>• {t('profile.rule1')}</p>
          <p>• {t('profile.rule2')}</p>
          <p>• {t('profile.rule10')}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileTab;