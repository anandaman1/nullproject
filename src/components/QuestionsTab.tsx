import React, { useState } from 'react';
import { Plus, ChevronUp, MessageCircle, Clock } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useLanguage } from '../context/LanguageContext';

const QuestionsTab: React.FC = () => {
  const { 
    currentUser, 
    users, 
    questions, 
    addQuestion, 
    addAnswer, 
    upvoteQuestion, 
    upvoteAnswer 
  } = useApp();
  
  const { t } = useLanguage();
  
  const [showNewQuestion, setShowNewQuestion] = useState(false);
  const [newQuestionTitle, setNewQuestionTitle] = useState('');
  const [newQuestionContent, setNewQuestionContent] = useState('');
  const [answerContent, setAnswerContent] = useState<{ [key: string]: string }>({});

  const handleSubmitQuestion = () => {
    if (!newQuestionTitle.trim() || !newQuestionContent.trim() || !currentUser) return;

    addQuestion({
      userId: currentUser.id,
      title: newQuestionTitle,
      content: newQuestionContent
    });

    setNewQuestionTitle('');
    setNewQuestionContent('');
    setShowNewQuestion(false);
  };

  const handleSubmitAnswer = (questionId: string) => {
    const content = answerContent[questionId];
    if (!content?.trim() || !currentUser) return;

    addAnswer({
      userId: currentUser.id,
      questionId,
      content
    });

    setAnswerContent({ ...answerContent, [questionId]: '' });
  };

  const getUserById = (id: string) => users.find(u => u.id === id);

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">{t('questions.title')}</h2>
            <p className="text-gray-600 mt-1">{t('questions.subtitle')}</p>
          </div>
          <button
            onClick={() => setShowNewQuestion(!showNewQuestion)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            {t('questions.askQuestion')}
          </button>
        </div>
      </div>

      {/* New Question Form */}
      {showNewQuestion && (
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">{t('questions.newQuestion')}</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder={t('questions.questionTitle')}
              value={newQuestionTitle}
              onChange={(e) => setNewQuestionTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <textarea
              placeholder={t('questions.questionContent')}
              value={newQuestionContent}
              onChange={(e) => setNewQuestionContent(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg h-32 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <button
                onClick={handleSubmitQuestion}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                {t('questions.postQuestion')}
              </button>
              <button
                onClick={() => setShowNewQuestion(false)}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {t('questions.cancel')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        {questions.map((question) => {
          const author = getUserById(question.userId);
          return (
            <div key={question.id} className="bg-white rounded-lg shadow-sm p-6">
              {/* Question Header */}
              <div className="flex items-start space-x-4">
                <img
                  src={author?.avatar}
                  alt={author?.name}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{question.title}</h3>
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(question.createdAt).toLocaleDateString()} {t('common.by')} {author?.name}
                      </p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => upvoteQuestion(question.id)}
                        className={`flex items-center space-x-1 px-3 py-1 rounded-full transition-colors ${
                          question.upvotes.includes(currentUser?.id || '')
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        <ChevronUp className="w-4 h-4" />
                        <span className="text-sm font-medium">{question.upvotes.length}</span>
                      </button>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{question.answers.length}</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 mt-3">{question.content}</p>
                </div>
              </div>

              {/* Answers */}
              {question.answers.length > 0 && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-md font-semibold mb-4">{t('questions.answers')}</h4>
                  <div className="space-y-4">
                    {question.answers.map((answer) => {
                      const answerAuthor = getUserById(answer.userId);
                      return (
                        <div key={answer.id} className="bg-gray-50 rounded-lg p-4">
                          <div className="flex items-start space-x-3">
                            <img
                              src={answerAuthor?.avatar}
                              alt={answerAuthor?.name}
                              className="w-8 h-8 rounded-full"
                            />
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <p className="text-sm text-gray-600">
                                  {answerAuthor?.name} • {new Date(answer.createdAt).toLocaleDateString()}
                                </p>
                                <button
                                  onClick={() => upvoteAnswer(question.id, answer.id)}
                                  className={`flex items-center space-x-1 px-2 py-1 rounded-full transition-colors ${
                                    answer.upvotes.includes(currentUser?.id || '')
                                      ? 'bg-blue-100 text-blue-700'
                                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                                  }`}
                                >
                                  <ChevronUp className="w-3 h-3" />
                                  <span className="text-xs">{answer.upvotes.length}</span>
                                </button>
                              </div>
                              <p className="text-gray-700 mt-2">{answer.content}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Answer Form */}
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="flex items-start space-x-3">
                  <img
                    src={currentUser?.avatar}
                    alt={currentUser?.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <textarea
                      placeholder={t('questions.writeAnswer')}
                      value={answerContent[question.id] || ''}
                      onChange={(e) => setAnswerContent({ ...answerContent, [question.id]: e.target.value })}
                      className="w-full p-3 border border-gray-300 rounded-lg h-24 resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      onClick={() => handleSubmitAnswer(question.id)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      {t('questions.postAnswer')}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {questions.length === 0 && (
        <div className="bg-white rounded-lg shadow-sm p-12 text-center">
          <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('questions.noQuestions')}</h3>
          <p className="text-gray-600 mb-6">{t('questions.noQuestionsDesc')}</p>
          <button
            onClick={() => setShowNewQuestion(true)}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('questions.askFirst')}
          </button>
        </div>
      )}
    </div>
  );
};

export default QuestionsTab;