import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import QuestionsTab from './components/QuestionsTab';
import PublicTab from './components/PublicTab';
import ProfileTab from './components/ProfileTab';

function App() {
  const [activeTab, setActiveTab] = useState('questions');

  const renderContent = () => {
    switch (activeTab) {
      case 'questions':
        return <QuestionsTab />;
      case 'public':
        return <PublicTab />;
      case 'profile':
        return <ProfileTab />;
      default:
        return <QuestionsTab />;
    }
  };

  return (
    <LanguageProvider>
      <AppProvider>
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
          <Header activeTab={activeTab} onTabChange={setActiveTab} />
          <main className="pb-8">
            {renderContent()}
          </main>
        </div>
      </AppProvider>
    </LanguageProvider>
  );
}

export default App;