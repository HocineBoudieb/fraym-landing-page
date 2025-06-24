// Configuration Calendly et Contact
export const CALENDLY_CONFIG = {
  // Remplacez par votre vraie URL Calendly
  url: 'https://calendly.com/hocine-boudieb1/fraym-en-savoir-plus',
  
  // Configuration des préfills par défaut
  defaultPrefill: {
    // Ces valeurs seront pré-remplies dans Calendly
    // name: 'Nom par défaut',
    // email: 'email@example.com',
  },
  
  // Styles personnalisés pour le widget
  styles: {
    height: '600px',
    width: '100%'
  }
}

export const CONTACT_CONFIG = {
  email: 'contact@fraym.com',
  phone: '+33 1 23 45 67 89',
  
  // Configuration pour l'API de contact
  api: {
    endpoint: '/api/contact',
    timeout: 10000 // 10 secondes
  }
}

// Messages de l'interface
export const MESSAGES = {
  calendly: {
    buttonText: 'Prendre rendez-vous',
    sectionTitle: 'Réservez votre créneau',
    sectionDescription: 'Choisissez le moment qui vous convient le mieux pour discuter de votre projet.'
  },
  
  contact: {
    buttonText: 'Nous contacter',
    formTitle: 'Envie de transformer votre UX ?',
    formDescription: 'Parlez-nous de votre site, et construisons ensemble une expérience adaptative sur-mesure.',
    submitButton: 'Envoyer le message',
    submittingButton: 'Envoi en cours...',
    successMessage: '✅ Message envoyé avec succès ! Nous vous recontacterons rapidement.',
    errorMessage: '❌ Erreur lors de l\'envoi. Veuillez réessayer ou nous contacter directement.'
  }
}