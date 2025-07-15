import React, { useState } from 'react';
import { Globe, Check, Mail, Phone, Shield } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useApp } from '../context/AppContext';

const LanguageSelector: React.FC = () => {
  const { currentLanguage, availableLanguages, t, changeLanguage, isChangingLanguage } = useLanguage();
  const { currentUser, setCurrentUser, users, setUsers } = useApp();
  
  const [showSelector, setShowSelector] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [verificationStep, setVerificationStep] = useState<'input' | 'otp'>('input');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const currentLang = availableLanguages.find(lang => lang.code === currentLanguage);

  const handleLanguageSelect = (languageCode: string) => {
    const selectedLang = availableLanguages.find(lang => lang.code === languageCode);
    if (!selectedLang || !currentUser) return;

    // Check if verification is required
    if (selectedLang.requiresEmailVerification || selectedLang.requiresPhoneVerification) {
      setSelectedLanguage(languageCode);
      setShowVerification(true);
      setShowSelector(false);
      setVerificationStep('input');
      setEmailOrPhone('');
      setOtp('');
      setVerificationMessage('');
    } else {
      // No verification required, change language directly
      handleLanguageChange(languageCode);
    }
  };

  const handleLanguageChange = async (languageCode: string) => {
    if (!currentUser) return;

    const success = await changeLanguage(languageCode);
    if (success) {
      // Update user's preferred language
      const updatedUser = { ...currentUser, preferredLanguage: languageCode };
      setCurrentUser(updatedUser);
      setUsers(prev => prev.map(u => u.id === currentUser.id ? updatedUser : u));
      
      setShowSelector(false);
      setShowVerification(false);
    }
  };

  const sendOTP = async () => {
    if (!emailOrPhone.trim()) return;

    setIsVerifying(true);
    const selectedLang = availableLanguages.find(lang => lang.code === selectedLanguage);
    
    try {
      // Simulate OTP sending
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (selectedLang?.requiresEmailVerification) {
        // Simulate email OTP
        setVerificationMessage(t('profile.otpSent'));
      } else {
        // Simulate phone OTP
        setVerificationMessage(t('profile.otpSent'));
      }
      
      setVerificationStep('otp');
    } catch (error) {
      setVerificationMessage(t('profile.verificationFailed'));
    } finally {
      setIsVerifying(false);
    }
  };

  const verifyOTP = async () => {
    if (!otp.trim()) return;

    setIsVerifying(true);
    
    try {
      // Simulate OTP verification
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, accept any 6-digit OTP
      if (otp.length === 6) {
        const selectedLang = availableLanguages.find(lang => lang.code === selectedLanguage);
        
        if (selectedLang?.requiresEmailVerification) {
          // Update email verification status
          const updatedUser = { ...currentUser!, isEmailVerified: true };
          setCurrentUser(updatedUser);
          setUsers(prev => prev.map(u => u.id === currentUser!.id ? updatedUser : u));
        } else {
          // Update phone verification status
          const updatedUser = { ...currentUser!, isPhoneVerified: true, phone: emailOrPhone };
          setCurrentUser(updatedUser);
          setUsers(prev => prev.map(u => u.id === currentUser!.id ? updatedUser : u));
        }
        
        setVerificationMessage(t('profile.verificationSuccess'));
        
        // Change language after successful verification
        setTimeout(() => {
          handleLanguageChange(selectedLanguage);
        }, 1000);
      } else {
        setVerificationMessage(t('profile.invalidOtp'));
      }
    } catch (error) {
      setVerificationMessage(t('profile.verificationFailed'));
    } finally {
      setIsVerifying(false);
    }
  };

  const closeVerification = () => {
    setShowVerification(false);
    setSelectedLanguage('');
    setVerificationStep('input');
    setEmailOrPhone('');
    setOtp('');
    setVerificationMessage('');
  };

  return (
    <div className="relative">
      {/* Language Selector Button */}
      <button
        onClick={() => setShowSelector(!showSelector)}
        className="flex items-center space-x-2 px-3 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
        disabled={isChangingLanguage}
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">{currentLang?.flag} {currentLang?.name}</span>
      </button>

      {/* Language Dropdown */}
      {showSelector && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-900">{t('profile.selectLanguage')}</h3>
          </div>
          <div className="max-h-64 overflow-y-auto">
            {availableLanguages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center justify-between px-4 py-3 hover:bg-gray-50 transition-colors ${
                  currentLanguage === language.code ? 'bg-blue-50' : ''
                }`}
              >
                <div className="flex items-center space-x-3">
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium text-gray-900">{language.name}</span>
                </div>
                <div className="flex items-center space-x-2">
                  {language.requiresEmailVerification && (
                    <Mail className="w-4 h-4 text-blue-500" title={t('profile.emailVerification')} />
                  )}
                  {language.requiresPhoneVerification && (
                    <Phone className="w-4 h-4 text-green-500" title={t('profile.phoneVerification')} />
                  )}
                  {currentLanguage === language.code && (
                    <Check className="w-4 h-4 text-blue-600" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Verification Modal */}
      {showVerification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-blue-600" />
                {t('profile.verificationRequired')}
              </h3>
              <button
                onClick={closeVerification}
                className="text-gray-400 hover:text-gray-600"
              >
                ×
              </button>
            </div>

            {verificationStep === 'input' && (
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-blue-800">
                    {availableLanguages.find(l => l.code === selectedLanguage)?.requiresEmailVerification
                      ? t('profile.emailVerification')
                      : t('profile.phoneVerification')
                    }
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {availableLanguages.find(l => l.code === selectedLanguage)?.requiresEmailVerification
                      ? t('profile.enterEmail')
                      : t('profile.enterPhone')
                    }
                  </label>
                  <input
                    type={availableLanguages.find(l => l.code === selectedLanguage)?.requiresEmailVerification ? 'email' : 'tel'}
                    value={emailOrPhone}
                    onChange={(e) => setEmailOrPhone(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={availableLanguages.find(l => l.code === selectedLanguage)?.requiresEmailVerification 
                      ? 'user@example.com' 
                      : '+1234567890'
                    }
                  />
                </div>

                <button
                  onClick={sendOTP}
                  disabled={!emailOrPhone.trim() || isVerifying}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isVerifying ? t('common.loading') : t('profile.sendOtp')}
                </button>
              </div>
            )}

            {verificationStep === 'otp' && (
              <div className="space-y-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-800">
                    {t('profile.otpSent')} {availableLanguages.find(l => l.code === selectedLanguage)?.requiresEmailVerification ? 'email' : 'phone'}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t('profile.enterOtp')}
                  </label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center text-lg tracking-widest"
                    placeholder="123456"
                    maxLength={6}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    For demo: Enter any 6-digit number
                  </p>
                </div>

                <button
                  onClick={verifyOTP}
                  disabled={otp.length !== 6 || isVerifying}
                  className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                >
                  {isVerifying ? t('common.loading') : t('profile.verify')}
                </button>

                <button
                  onClick={() => setVerificationStep('input')}
                  className="w-full px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              </div>
            )}

            {verificationMessage && (
              <div className={`mt-4 p-3 rounded-lg ${
                verificationMessage.includes('success') || verificationMessage.includes('sent')
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}>
                <p className="text-sm">{verificationMessage}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {isChangingLanguage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 flex items-center space-x-3">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
            <span className="text-gray-700">{t('common.loading')}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;