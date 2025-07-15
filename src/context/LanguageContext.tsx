import React, { createContext, useContext, useState, ReactNode } from 'react';
import { languages, getTranslation } from '../utils/translations';
import { Language } from '../types';

interface LanguageContextType {
  currentLanguage: string;
  availableLanguages: Language[];
  t: (key: string, params?: { [key: string]: string }) => string;
  changeLanguage: (languageCode: string) => Promise<boolean>;
  isChangingLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  const t = (key: string, params?: { [key: string]: string }) => {
    return getTranslation(key, currentLanguage, params);
  };

  const changeLanguage = async (languageCode: string): Promise<boolean> => {
    setIsChangingLanguage(true);
    
    try {
      // Simulate language change delay
      await new Promise(resolve => setTimeout(resolve, 500));
      setCurrentLanguage(languageCode);
      
      // Update document language
      document.documentElement.lang = languageCode;
      
      return true;
    } catch (error) {
      console.error('Failed to change language:', error);
      return false;
    } finally {
      setIsChangingLanguage(false);
    }
  };

  return (
    <LanguageContext.Provider value={{
      currentLanguage,
      availableLanguages: languages,
      t,
      changeLanguage,
      isChangingLanguage
    }}>
      {children}
    </LanguageContext.Provider>
  );
};