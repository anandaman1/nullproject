export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', requiresEmailVerification: false, requiresPhoneVerification: false },
  { code: 'es', name: 'Español', flag: '🇪🇸', requiresEmailVerification: false, requiresPhoneVerification: true },
  { code: 'fr', name: 'Français', flag: '🇫🇷', requiresEmailVerification: true, requiresPhoneVerification: false },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', requiresEmailVerification: false, requiresPhoneVerification: true },
  { code: 'pt', name: 'Português', flag: '🇧🇷', requiresEmailVerification: false, requiresPhoneVerification: true },
  { code: 'zh', name: '中文', flag: '🇨🇳', requiresEmailVerification: false, requiresPhoneVerification: true }
];

export const translations = {
  en: {
    // Header
    'header.title': 'SocialQ&A',
    'header.qa': 'Q&A',
    'header.public': 'Public',
    'header.profile': 'Profile',
    'header.notifications': 'notifications',
    
    // Questions Tab
    'questions.title': 'Questions & Answers',
    'questions.subtitle': 'Ask questions and get answers from the community',
    'questions.askQuestion': 'Ask Question',
    'questions.newQuestion': 'Ask a New Question',
    'questions.questionTitle': 'Question title...',
    'questions.questionContent': 'Describe your question in detail...',
    'questions.postQuestion': 'Post Question',
    'questions.cancel': 'Cancel',
    'questions.answers': 'Answers',
    'questions.writeAnswer': 'Write your answer...',
    'questions.postAnswer': 'Post Answer',
    'questions.noQuestions': 'No questions yet',
    'questions.noQuestionsDesc': 'Be the first to ask a question!',
    'questions.askFirst': 'Ask First Question',
    
    // Public Tab
    'public.title': 'Public Space',
    'public.subtitle': 'Share your thoughts with the community',
    'public.friends': 'Friends',
    'public.needFriends': 'Need friends to post',
    'public.canPost': 'Can post',
    'public.oncePer': 'once per day',
    'public.twicePer': 'twice per day',
    'public.unlimited': 'Unlimited posts',
    'public.newPost': 'New Post',
    'public.createPost': 'Create New Post',
    'public.whatsOnMind': "What's on your mind?",
    'public.image': 'Image',
    'public.video': 'Video',
    'public.enterUrl': 'Enter {type} URL...',
    'public.post': 'Post',
    'public.noPosts': 'No posts yet',
    'public.noPostsDesc': 'Be the first to share something!',
    'public.createFirst': 'Create First Post',
    'public.writeComment': 'Write a comment...',
    'public.needFriendsToPost': 'You need friends to post. Add friends to start posting!',
    'public.dailyLimitReached': "You've reached your daily post limit",
    'public.postsToday': 'Posts today',
    
    // Profile Tab
    'profile.notificationSettings': 'Notification Settings',
    'profile.browserNotifications': 'Browser Notifications',
    'profile.notificationDesc': 'Get notified when someone answers your questions or upvotes your content',
    'profile.disable': 'Disable',
    'profile.enable': 'Enable',
    'profile.friends': 'Friends',
    'profile.addFriend': 'Add Friend',
    'profile.addNewFriend': 'Add New Friend',
    'profile.add': 'Add',
    'profile.noMoreUsers': 'No more users to add as friends',
    'profile.noFriends': 'No friends yet',
    'profile.noFriendsDesc': 'Add friends to unlock posting in the public space!',
    'profile.addFirstFriend': 'Add Your First Friend',
    'profile.postingRules': 'Posting Rules',
    'profile.rule0': '0 friends: Cannot post in public space',
    'profile.rule1': '1 friend: Can post once per day',
    'profile.rule2': '2-10 friends: Can post twice per day',
    'profile.rule10': '10+ friends: Unlimited posts',
    'profile.languageSettings': 'Language Settings',
    'profile.currentLanguage': 'Current Language',
    'profile.changeLanguage': 'Change Language',
    'profile.selectLanguage': 'Select Language',
    'profile.verificationRequired': 'Verification Required',
    'profile.emailVerification': 'Email verification required for French',
    'profile.phoneVerification': 'Phone verification required for this language',
    'profile.enterEmail': 'Enter your email address',
    'profile.enterPhone': 'Enter your phone number',
    'profile.sendOtp': 'Send OTP',
    'profile.enterOtp': 'Enter OTP',
    'profile.verify': 'Verify',
    'profile.otpSent': 'OTP sent successfully!',
    'profile.verificationSuccess': 'Verification successful!',
    'profile.verificationFailed': 'Verification failed. Please try again.',
    'profile.invalidOtp': 'Invalid OTP. Please try again.',
    
    // Common
    'common.by': 'by',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.share': 'Share',
    'common.like': 'Like',
    'common.comment': 'Comment',
    'common.upvote': 'Upvote',
    
    // Notifications
    'notification.newAnswer': 'New Answer',
    'notification.answerReceived': '{name} answered your question: "{title}"',
    'notification.questionUpvoted': 'Question Upvoted',
    'notification.questionUpvotedMsg': '{name} upvoted your question: "{title}"',
    'notification.answerUpvoted': 'Answer Upvoted',
    'notification.answerUpvotedMsg': '{name} upvoted your answer'
  },
  
  es: {
    // Header
    'header.title': 'SocialQ&A',
    'header.qa': 'P&R',
    'header.public': 'Público',
    'header.profile': 'Perfil',
    'header.notifications': 'notificaciones',
    
    // Questions Tab
    'questions.title': 'Preguntas y Respuestas',
    'questions.subtitle': 'Haz preguntas y obtén respuestas de la comunidad',
    'questions.askQuestion': 'Hacer Pregunta',
    'questions.newQuestion': 'Hacer una Nueva Pregunta',
    'questions.questionTitle': 'Título de la pregunta...',
    'questions.questionContent': 'Describe tu pregunta en detalle...',
    'questions.postQuestion': 'Publicar Pregunta',
    'questions.cancel': 'Cancelar',
    'questions.answers': 'Respuestas',
    'questions.writeAnswer': 'Escribe tu respuesta...',
    'questions.postAnswer': 'Publicar Respuesta',
    'questions.noQuestions': 'Aún no hay preguntas',
    'questions.noQuestionsDesc': '¡Sé el primero en hacer una pregunta!',
    'questions.askFirst': 'Hacer Primera Pregunta',
    
    // Public Tab
    'public.title': 'Espacio Público',
    'public.subtitle': 'Comparte tus pensamientos con la comunidad',
    'public.friends': 'Amigos',
    'public.needFriends': 'Necesitas amigos para publicar',
    'public.canPost': 'Puedes publicar',
    'public.oncePer': 'una vez por día',
    'public.twicePer': 'dos veces por día',
    'public.unlimited': 'Publicaciones ilimitadas',
    'public.newPost': 'Nueva Publicación',
    'public.createPost': 'Crear Nueva Publicación',
    'public.whatsOnMind': '¿Qué tienes en mente?',
    'public.image': 'Imagen',
    'public.video': 'Video',
    'public.enterUrl': 'Ingresa URL de {type}...',
    'public.post': 'Publicar',
    'public.noPosts': 'Aún no hay publicaciones',
    'public.noPostsDesc': '¡Sé el primero en compartir algo!',
    'public.createFirst': 'Crear Primera Publicación',
    'public.writeComment': 'Escribe un comentario...',
    'public.needFriendsToPost': 'Necesitas amigos para publicar. ¡Agrega amigos para comenzar a publicar!',
    'public.dailyLimitReached': 'Has alcanzado tu límite diario de publicaciones',
    'public.postsToday': 'Publicaciones hoy',
    
    // Profile Tab
    'profile.notificationSettings': 'Configuración de Notificaciones',
    'profile.browserNotifications': 'Notificaciones del Navegador',
    'profile.notificationDesc': 'Recibe notificaciones cuando alguien responda tus preguntas o vote tu contenido',
    'profile.disable': 'Desactivar',
    'profile.enable': 'Activar',
    'profile.friends': 'Amigos',
    'profile.addFriend': 'Agregar Amigo',
    'profile.addNewFriend': 'Agregar Nuevo Amigo',
    'profile.add': 'Agregar',
    'profile.noMoreUsers': 'No hay más usuarios para agregar como amigos',
    'profile.noFriends': 'Aún no tienes amigos',
    'profile.noFriendsDesc': '¡Agrega amigos para desbloquear publicaciones en el espacio público!',
    'profile.addFirstFriend': 'Agregar Tu Primer Amigo',
    'profile.postingRules': 'Reglas de Publicación',
    'profile.rule0': '0 amigos: No puedes publicar en el espacio público',
    'profile.rule1': '1 amigo: Puedes publicar una vez por día',
    'profile.rule2': '2-10 amigos: Puedes publicar dos veces por día',
    'profile.rule10': '10+ amigos: Publicaciones ilimitadas',
    'profile.languageSettings': 'Configuración de Idioma',
    'profile.currentLanguage': 'Idioma Actual',
    'profile.changeLanguage': 'Cambiar Idioma',
    'profile.selectLanguage': 'Seleccionar Idioma',
    'profile.verificationRequired': 'Verificación Requerida',
    'profile.emailVerification': 'Verificación de email requerida para francés',
    'profile.phoneVerification': 'Verificación de teléfono requerida para este idioma',
    'profile.enterEmail': 'Ingresa tu dirección de email',
    'profile.enterPhone': 'Ingresa tu número de teléfono',
    'profile.sendOtp': 'Enviar OTP',
    'profile.enterOtp': 'Ingresa OTP',
    'profile.verify': 'Verificar',
    'profile.otpSent': '¡OTP enviado exitosamente!',
    'profile.verificationSuccess': '¡Verificación exitosa!',
    'profile.verificationFailed': 'Verificación fallida. Por favor intenta de nuevo.',
    'profile.invalidOtp': 'OTP inválido. Por favor intenta de nuevo.',
    
    // Common
    'common.by': 'por',
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.close': 'Cerrar',
    'common.save': 'Guardar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.share': 'Compartir',
    'common.like': 'Me gusta',
    'common.comment': 'Comentario',
    'common.upvote': 'Votar',
    
    // Notifications
    'notification.newAnswer': 'Nueva Respuesta',
    'notification.answerReceived': '{name} respondió tu pregunta: "{title}"',
    'notification.questionUpvoted': 'Pregunta Votada',
    'notification.questionUpvotedMsg': '{name} votó tu pregunta: "{title}"',
    'notification.answerUpvoted': 'Respuesta Votada',
    'notification.answerUpvotedMsg': '{name} votó tu respuesta'
  },
  
  fr: {
    // Header
    'header.title': 'SocialQ&A',
    'header.qa': 'Q&R',
    'header.public': 'Public',
    'header.profile': 'Profil',
    'header.notifications': 'notifications',
    
    // Questions Tab
    'questions.title': 'Questions et Réponses',
    'questions.subtitle': 'Posez des questions et obtenez des réponses de la communauté',
    'questions.askQuestion': 'Poser une Question',
    'questions.newQuestion': 'Poser une Nouvelle Question',
    'questions.questionTitle': 'Titre de la question...',
    'questions.questionContent': 'Décrivez votre question en détail...',
    'questions.postQuestion': 'Publier la Question',
    'questions.cancel': 'Annuler',
    'questions.answers': 'Réponses',
    'questions.writeAnswer': 'Écrivez votre réponse...',
    'questions.postAnswer': 'Publier la Réponse',
    'questions.noQuestions': 'Aucune question pour le moment',
    'questions.noQuestionsDesc': 'Soyez le premier à poser une question !',
    'questions.askFirst': 'Poser la Première Question',
    
    // Public Tab
    'public.title': 'Espace Public',
    'public.subtitle': 'Partagez vos pensées avec la communauté',
    'public.friends': 'Amis',
    'public.needFriends': 'Besoin d\'amis pour publier',
    'public.canPost': 'Peut publier',
    'public.oncePer': 'une fois par jour',
    'public.twicePer': 'deux fois par jour',
    'public.unlimited': 'Publications illimitées',
    'public.newPost': 'Nouvelle Publication',
    'public.createPost': 'Créer une Nouvelle Publication',
    'public.whatsOnMind': 'À quoi pensez-vous ?',
    'public.image': 'Image',
    'public.video': 'Vidéo',
    'public.enterUrl': 'Entrez l\'URL {type}...',
    'public.post': 'Publier',
    'public.noPosts': 'Aucune publication pour le moment',
    'public.noPostsDesc': 'Soyez le premier à partager quelque chose !',
    'public.createFirst': 'Créer la Première Publication',
    'public.writeComment': 'Écrivez un commentaire...',
    'public.needFriendsToPost': 'Vous avez besoin d\'amis pour publier. Ajoutez des amis pour commencer à publier !',
    'public.dailyLimitReached': 'Vous avez atteint votre limite quotidienne de publications',
    'public.postsToday': 'Publications aujourd\'hui',
    
    // Profile Tab
    'profile.notificationSettings': 'Paramètres de Notification',
    'profile.browserNotifications': 'Notifications du Navigateur',
    'profile.notificationDesc': 'Recevez des notifications lorsque quelqu\'un répond à vos questions ou vote pour votre contenu',
    'profile.disable': 'Désactiver',
    'profile.enable': 'Activer',
    'profile.friends': 'Amis',
    'profile.addFriend': 'Ajouter un Ami',
    'profile.addNewFriend': 'Ajouter un Nouvel Ami',
    'profile.add': 'Ajouter',
    'profile.noMoreUsers': 'Aucun autre utilisateur à ajouter comme ami',
    'profile.noFriends': 'Aucun ami pour le moment',
    'profile.noFriendsDesc': 'Ajoutez des amis pour débloquer les publications dans l\'espace public !',
    'profile.addFirstFriend': 'Ajouter Votre Premier Ami',
    'profile.postingRules': 'Règles de Publication',
    'profile.rule0': '0 ami : Impossible de publier dans l\'espace public',
    'profile.rule1': '1 ami : Peut publier une fois par jour',
    'profile.rule2': '2-10 amis : Peut publier deux fois par jour',
    'profile.rule10': '10+ amis : Publications illimitées',
    'profile.languageSettings': 'Paramètres de Langue',
    'profile.currentLanguage': 'Langue Actuelle',
    'profile.changeLanguage': 'Changer de Langue',
    'profile.selectLanguage': 'Sélectionner la Langue',
    'profile.verificationRequired': 'Vérification Requise',
    'profile.emailVerification': 'Vérification email requise pour le français',
    'profile.phoneVerification': 'Vérification téléphonique requise pour cette langue',
    'profile.enterEmail': 'Entrez votre adresse email',
    'profile.enterPhone': 'Entrez votre numéro de téléphone',
    'profile.sendOtp': 'Envoyer OTP',
    'profile.enterOtp': 'Entrez OTP',
    'profile.verify': 'Vérifier',
    'profile.otpSent': 'OTP envoyé avec succès !',
    'profile.verificationSuccess': 'Vérification réussie !',
    'profile.verificationFailed': 'Vérification échouée. Veuillez réessayer.',
    'profile.invalidOtp': 'OTP invalide. Veuillez réessayer.',
    
    // Common
    'common.by': 'par',
    'common.loading': 'Chargement...',
    'common.error': 'Erreur',
    'common.success': 'Succès',
    'common.close': 'Fermer',
    'common.save': 'Sauvegarder',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.share': 'Partager',
    'common.like': 'J\'aime',
    'common.comment': 'Commentaire',
    'common.upvote': 'Voter',
    
    // Notifications
    'notification.newAnswer': 'Nouvelle Réponse',
    'notification.answerReceived': '{name} a répondu à votre question : "{title}"',
    'notification.questionUpvoted': 'Question Votée',
    'notification.questionUpvotedMsg': '{name} a voté pour votre question : "{title}"',
    'notification.answerUpvoted': 'Réponse Votée',
    'notification.answerUpvotedMsg': '{name} a voté pour votre réponse'
  },
  
  hi: {
    // Header
    'header.title': 'SocialQ&A',
    'header.qa': 'प्र&उ',
    'header.public': 'सार्वजनिक',
    'header.profile': 'प्रोफ़ाइल',
    'header.notifications': 'सूचनाएं',
    
    // Questions Tab
    'questions.title': 'प्रश्न और उत्तर',
    'questions.subtitle': 'समुदाय से प्रश्न पूछें और उत्तर प्राप्त करें',
    'questions.askQuestion': 'प्रश्न पूछें',
    'questions.newQuestion': 'नया प्रश्न पूछें',
    'questions.questionTitle': 'प्रश्न का शीर्षक...',
    'questions.questionContent': 'अपने प्रश्न का विस्तार से वर्णन करें...',
    'questions.postQuestion': 'प्रश्न पोस्ट करें',
    'questions.cancel': 'रद्द करें',
    'questions.answers': 'उत्तर',
    'questions.writeAnswer': 'अपना उत्तर लिखें...',
    'questions.postAnswer': 'उत्तर पोस्ट करें',
    'questions.noQuestions': 'अभी तक कोई प्रश्न नहीं',
    'questions.noQuestionsDesc': 'प्रश्न पूछने वाले पहले व्यक्ति बनें!',
    'questions.askFirst': 'पहला प्रश्न पूछें',
    
    // Public Tab
    'public.title': 'सार्वजनिक स्थान',
    'public.subtitle': 'समुदाय के साथ अपने विचार साझा करें',
    'public.friends': 'मित्र',
    'public.needFriends': 'पोस्ट करने के लिए मित्रों की आवश्यकता',
    'public.canPost': 'पोस्ट कर सकते हैं',
    'public.oncePer': 'दिन में एक बार',
    'public.twicePer': 'दिन में दो बार',
    'public.unlimited': 'असीमित पोस्ट',
    'public.newPost': 'नई पोस्ट',
    'public.createPost': 'नई पोस्ट बनाएं',
    'public.whatsOnMind': 'आपके मन में क्या है?',
    'public.image': 'छवि',
    'public.video': 'वीडियो',
    'public.enterUrl': '{type} URL दर्ज करें...',
    'public.post': 'पोस्ट करें',
    'public.noPosts': 'अभी तक कोई पोस्ट नहीं',
    'public.noPostsDesc': 'कुछ साझा करने वाले पहले व्यक्ति बनें!',
    'public.createFirst': 'पहली पोस्ट बनाएं',
    'public.writeComment': 'टिप्पणी लिखें...',
    'public.needFriendsToPost': 'पोस्ट करने के लिए आपको मित्रों की आवश्यकता है। पोस्ट करना शुरू करने के लिए मित्र जोड़ें!',
    'public.dailyLimitReached': 'आपने अपनी दैनिक पोस्ट सीमा पूरी कर ली है',
    'public.postsToday': 'आज की पोस्ट',
    
    // Profile Tab
    'profile.notificationSettings': 'सूचना सेटिंग्स',
    'profile.browserNotifications': 'ब्राउज़र सूचनाएं',
    'profile.notificationDesc': 'जब कोई आपके प्रश्नों का उत्तर दे या आपकी सामग्री को वोट करे तो सूचना प्राप्त करें',
    'profile.disable': 'अक्षम करें',
    'profile.enable': 'सक्षम करें',
    'profile.friends': 'मित्र',
    'profile.addFriend': 'मित्र जोड़ें',
    'profile.addNewFriend': 'नया मित्र जोड़ें',
    'profile.add': 'जोड़ें',
    'profile.noMoreUsers': 'मित्र के रूप में जोड़ने के लिए कोई और उपयोगकर्ता नहीं',
    'profile.noFriends': 'अभी तक कोई मित्र नहीं',
    'profile.noFriendsDesc': 'सार्वजनिक स्थान में पोस्टिंग अनलॉक करने के लिए मित्र जोड़ें!',
    'profile.addFirstFriend': 'अपना पहला मित्र जोड़ें',
    'profile.postingRules': 'पोस्टिंग नियम',
    'profile.rule0': '0 मित्र: सार्वजनिक स्थान में पोस्ट नहीं कर सकते',
    'profile.rule1': '1 मित्र: दिन में एक बार पोस्ट कर सकते हैं',
    'profile.rule2': '2-10 मित्र: दिन में दो बार पोस्ट कर सकते हैं',
    'profile.rule10': '10+ मित्र: असीमित पोस्ट',
    'profile.languageSettings': 'भाषा सेटिंग्स',
    'profile.currentLanguage': 'वर्तमान भाषा',
    'profile.changeLanguage': 'भाषा बदलें',
    'profile.selectLanguage': 'भाषा चुनें',
    'profile.verificationRequired': 'सत्यापन आवश्यक',
    'profile.emailVerification': 'फ्रेंच के लिए ईमेल सत्यापन आवश्यक',
    'profile.phoneVerification': 'इस भाषा के लिए फोन सत्यापन आवश्यक',
    'profile.enterEmail': 'अपना ईमेल पता दर्ज करें',
    'profile.enterPhone': 'अपना फोन नंबर दर्ज करें',
    'profile.sendOtp': 'OTP भेजें',
    'profile.enterOtp': 'OTP दर्ज करें',
    'profile.verify': 'सत्यापित करें',
    'profile.otpSent': 'OTP सफलतापूर्वक भेजा गया!',
    'profile.verificationSuccess': 'सत्यापन सफल!',
    'profile.verificationFailed': 'सत्यापन असफल। कृपया पुनः प्रयास करें।',
    'profile.invalidOtp': 'अमान्य OTP। कृपया पुनः प्रयास करें।',
    
    // Common
    'common.by': 'द्वारा',
    'common.loading': 'लोड हो रहा है...',
    'common.error': 'त्रुटि',
    'common.success': 'सफलता',
    'common.close': 'बंद करें',
    'common.save': 'सहेजें',
    'common.delete': 'हटाएं',
    'common.edit': 'संपादित करें',
    'common.share': 'साझा करें',
    'common.like': 'पसंद',
    'common.comment': 'टिप्पणी',
    'common.upvote': 'वोट',
    
    // Notifications
    'notification.newAnswer': 'नया उत्तर',
    'notification.answerReceived': '{name} ने आपके प्रश्न का उत्तर दिया: "{title}"',
    'notification.questionUpvoted': 'प्रश्न को वोट मिला',
    'notification.questionUpvotedMsg': '{name} ने आपके प्रश्न को वोट दिया: "{title}"',
    'notification.answerUpvoted': 'उत्तर को वोट मिला',
    'notification.answerUpvotedMsg': '{name} ने आपके उत्तर को वोट दिया'
  },
  
  pt: {
    // Header
    'header.title': 'SocialQ&A',
    'header.qa': 'P&R',
    'header.public': 'Público',
    'header.profile': 'Perfil',
    'header.notifications': 'notificações',
    
    // Questions Tab
    'questions.title': 'Perguntas e Respostas',
    'questions.subtitle': 'Faça perguntas e obtenha respostas da comunidade',
    'questions.askQuestion': 'Fazer Pergunta',
    'questions.newQuestion': 'Fazer uma Nova Pergunta',
    'questions.questionTitle': 'Título da pergunta...',
    'questions.questionContent': 'Descreva sua pergunta em detalhes...',
    'questions.postQuestion': 'Publicar Pergunta',
    'questions.cancel': 'Cancelar',
    'questions.answers': 'Respostas',
    'questions.writeAnswer': 'Escreva sua resposta...',
    'questions.postAnswer': 'Publicar Resposta',
    'questions.noQuestions': 'Ainda não há perguntas',
    'questions.noQuestionsDesc': 'Seja o primeiro a fazer uma pergunta!',
    'questions.askFirst': 'Fazer Primeira Pergunta',
    
    // Public Tab
    'public.title': 'Espaço Público',
    'public.subtitle': 'Compartilhe seus pensamentos com a comunidade',
    'public.friends': 'Amigos',
    'public.needFriends': 'Precisa de amigos para postar',
    'public.canPost': 'Pode postar',
    'public.oncePer': 'uma vez por dia',
    'public.twicePer': 'duas vezes por dia',
    'public.unlimited': 'Posts ilimitados',
    'public.newPost': 'Nova Publicação',
    'public.createPost': 'Criar Nova Publicação',
    'public.whatsOnMind': 'O que você está pensando?',
    'public.image': 'Imagem',
    'public.video': 'Vídeo',
    'public.enterUrl': 'Digite a URL do {type}...',
    'public.post': 'Publicar',
    'public.noPosts': 'Ainda não há publicações',
    'public.noPostsDesc': 'Seja o primeiro a compartilhar algo!',
    'public.createFirst': 'Criar Primeira Publicação',
    'public.writeComment': 'Escreva um comentário...',
    'public.needFriendsToPost': 'Você precisa de amigos para postar. Adicione amigos para começar a postar!',
    'public.dailyLimitReached': 'Você atingiu seu limite diário de posts',
    'public.postsToday': 'Posts hoje',
    
    // Profile Tab
    'profile.notificationSettings': 'Configurações de Notificação',
    'profile.browserNotifications': 'Notificações do Navegador',
    'profile.notificationDesc': 'Receba notificações quando alguém responder suas perguntas ou votar no seu conteúdo',
    'profile.disable': 'Desativar',
    'profile.enable': 'Ativar',
    'profile.friends': 'Amigos',
    'profile.addFriend': 'Adicionar Amigo',
    'profile.addNewFriend': 'Adicionar Novo Amigo',
    'profile.add': 'Adicionar',
    'profile.noMoreUsers': 'Não há mais usuários para adicionar como amigos',
    'profile.noFriends': 'Ainda não há amigos',
    'profile.noFriendsDesc': 'Adicione amigos para desbloquear postagens no espaço público!',
    'profile.addFirstFriend': 'Adicionar Seu Primeiro Amigo',
    'profile.postingRules': 'Regras de Postagem',
    'profile.rule0': '0 amigos: Não pode postar no espaço público',
    'profile.rule1': '1 amigo: Pode postar uma vez por dia',
    'profile.rule2': '2-10 amigos: Pode postar duas vezes por dia',
    'profile.rule10': '10+ amigos: Posts ilimitados',
    'profile.languageSettings': 'Configurações de Idioma',
    'profile.currentLanguage': 'Idioma Atual',
    'profile.changeLanguage': 'Alterar Idioma',
    'profile.selectLanguage': 'Selecionar Idioma',
    'profile.verificationRequired': 'Verificação Necessária',
    'profile.emailVerification': 'Verificação de email necessária para francês',
    'profile.phoneVerification': 'Verificação de telefone necessária para este idioma',
    'profile.enterEmail': 'Digite seu endereço de email',
    'profile.enterPhone': 'Digite seu número de telefone',
    'profile.sendOtp': 'Enviar OTP',
    'profile.enterOtp': 'Digite OTP',
    'profile.verify': 'Verificar',
    'profile.otpSent': 'OTP enviado com sucesso!',
    'profile.verificationSuccess': 'Verificação bem-sucedida!',
    'profile.verificationFailed': 'Verificação falhou. Tente novamente.',
    'profile.invalidOtp': 'OTP inválido. Tente novamente.',
    
    // Common
    'common.by': 'por',
    'common.loading': 'Carregando...',
    'common.error': 'Erro',
    'common.success': 'Sucesso',
    'common.close': 'Fechar',
    'common.save': 'Salvar',
    'common.delete': 'Excluir',
    'common.edit': 'Editar',
    'common.share': 'Compartilhar',
    'common.like': 'Curtir',
    'common.comment': 'Comentário',
    'common.upvote': 'Votar',
    
    // Notifications
    'notification.newAnswer': 'Nova Resposta',
    'notification.answerReceived': '{name} respondeu sua pergunta: "{title}"',
    'notification.questionUpvoted': 'Pergunta Votada',
    'notification.questionUpvotedMsg': '{name} votou na sua pergunta: "{title}"',
    'notification.answerUpvoted': 'Resposta Votada',
    'notification.answerUpvotedMsg': '{name} votou na sua resposta'
  },
  
  zh: {
    // Header
    'header.title': 'SocialQ&A',
    'header.qa': '问答',
    'header.public': '公共',
    'header.profile': '个人资料',
    'header.notifications': '通知',
    
    // Questions Tab
    'questions.title': '问题与答案',
    'questions.subtitle': '向社区提问并获得答案',
    'questions.askQuestion': '提问',
    'questions.newQuestion': '提出新问题',
    'questions.questionTitle': '问题标题...',
    'questions.questionContent': '详细描述您的问题...',
    'questions.postQuestion': '发布问题',
    'questions.cancel': '取消',
    'questions.answers': '答案',
    'questions.writeAnswer': '写下您的答案...',
    'questions.postAnswer': '发布答案',
    'questions.noQuestions': '暂无问题',
    'questions.noQuestionsDesc': '成为第一个提问的人！',
    'questions.askFirst': '提出第一个问题',
    
    // Public Tab
    'public.title': '公共空间',
    'public.subtitle': '与社区分享您的想法',
    'public.friends': '朋友',
    'public.needFriends': '需要朋友才能发布',
    'public.canPost': '可以发布',
    'public.oncePer': '每天一次',
    'public.twicePer': '每天两次',
    'public.unlimited': '无限发布',
    'public.newPost': '新帖子',
    'public.createPost': '创建新帖子',
    'public.whatsOnMind': '您在想什么？',
    'public.image': '图片',
    'public.video': '视频',
    'public.enterUrl': '输入{type}网址...',
    'public.post': '发布',
    'public.noPosts': '暂无帖子',
    'public.noPostsDesc': '成为第一个分享的人！',
    'public.createFirst': '创建第一个帖子',
    'public.writeComment': '写评论...',
    'public.needFriendsToPost': '您需要朋友才能发布。添加朋友开始发布！',
    'public.dailyLimitReached': '您已达到每日发布限制',
    'public.postsToday': '今日帖子',
    
    // Profile Tab
    'profile.notificationSettings': '通知设置',
    'profile.browserNotifications': '浏览器通知',
    'profile.notificationDesc': '当有人回答您的问题或为您的内容投票时接收通知',
    'profile.disable': '禁用',
    'profile.enable': '启用',
    'profile.friends': '朋友',
    'profile.addFriend': '添加朋友',
    'profile.addNewFriend': '添加新朋友',
    'profile.add': '添加',
    'profile.noMoreUsers': '没有更多用户可添加为朋友',
    'profile.noFriends': '暂无朋友',
    'profile.noFriendsDesc': '添加朋友以解锁公共空间发布功能！',
    'profile.addFirstFriend': '添加您的第一个朋友',
    'profile.postingRules': '发布规则',
    'profile.rule0': '0个朋友：无法在公共空间发布',
    'profile.rule1': '1个朋友：每天可发布一次',
    'profile.rule2': '2-10个朋友：每天可发布两次',
    'profile.rule10': '10+个朋友：无限发布',
    'profile.languageSettings': '语言设置',
    'profile.currentLanguage': '当前语言',
    'profile.changeLanguage': '更改语言',
    'profile.selectLanguage': '选择语言',
    'profile.verificationRequired': '需要验证',
    'profile.emailVerification': '法语需要邮箱验证',
    'profile.phoneVerification': '此语言需要手机验证',
    'profile.enterEmail': '输入您的邮箱地址',
    'profile.enterPhone': '输入您的手机号码',
    'profile.sendOtp': '发送验证码',
    'profile.enterOtp': '输入验证码',
    'profile.verify': '验证',
    'profile.otpSent': '验证码发送成功！',
    'profile.verificationSuccess': '验证成功！',
    'profile.verificationFailed': '验证失败。请重试。',
    'profile.invalidOtp': '验证码无效。请重试。',
    
    // Common
    'common.by': '由',
    'common.loading': '加载中...',
    'common.error': '错误',
    'common.success': '成功',
    'common.close': '关闭',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.share': '分享',
    'common.like': '点赞',
    'common.comment': '评论',
    'common.upvote': '投票',
    
    // Notifications
    'notification.newAnswer': '新答案',
    'notification.answerReceived': '{name}回答了您的问题："{title}"',
    'notification.questionUpvoted': '问题被投票',
    'notification.questionUpvotedMsg': '{name}为您的问题投票："{title}"',
    'notification.answerUpvoted': '答案被投票',
    'notification.answerUpvotedMsg': '{name}为您的答案投票'
  }
};

export const getTranslation = (key: string, language: string, params?: { [key: string]: string }): string => {
  const translation = translations[language as keyof typeof translations]?.[key] || translations.en[key] || key;
  
  if (params) {
    return Object.keys(params).reduce((text, param) => {
      return text.replace(`{${param}}`, params[param]);
    }, translation);
  }
  
  return translation;
};