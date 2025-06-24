# Configuration du système de contact Fraym

## 🗓️ Configuration Calendly

### 1. Créer un compte Calendly
1. Allez sur [calendly.com](https://calendly.com)
2. Créez votre compte gratuit ou payant
3. Configurez vos créneaux de disponibilité
4. Personnalisez votre page de réservation

### 2. Intégrer Calendly
Dans le fichier `app/page.tsx`, remplacez :
```typescript
window.open('https://calendly.com/votre-compte', '_blank', 'width=800,height=600')
```
Par votre vraie URL Calendly :
```typescript
window.open('https://calendly.com/votre-nom-utilisateur/30min', '_blank', 'width=800,height=600')
```

### 3. Options d'intégration avancées

#### Option A: Widget intégré (recommandé)
```typescript
// Installer le package Calendly
npm install react-calendly

// Dans votre composant
import { InlineWidget } from 'react-calendly'

<InlineWidget url="https://calendly.com/votre-compte" />
```

#### Option B: Popup Calendly
```typescript
// Ajouter le script Calendly dans layout.tsx
<script src="https://assets.calendly.com/assets/external/widget.js"></script>

// Utiliser dans le composant
const openCalendly = () => {
  // @ts-ignore
  Calendly.initPopupWidget({url: 'https://calendly.com/votre-compte'})
}
```

## 📧 Configuration du système d'email

### Option 1: EmailJS (Gratuit, facile)

1. **Installation**
```bash
npm install @emailjs/browser
```

2. **Configuration**
```typescript
// Dans app/page.tsx
import emailjs from '@emailjs/browser'

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  setIsSubmitting(true)
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY'
    )
    setSubmitStatus('success')
  } catch (error) {
    setSubmitStatus('error')
  } finally {
    setIsSubmitting(false)
  }
}
```

3. **Configuration EmailJS**
- Créez un compte sur [emailjs.com](https://www.emailjs.com/)
- Configurez un service email (Gmail, Outlook, etc.)
- Créez un template d'email
- Récupérez vos clés API

### Option 2: Resend (Moderne, fiable)

1. **Installation**
```bash
npm install resend
```

2. **Configuration dans .env.local**
```
RESEND_API_KEY=your_resend_api_key
```

3. **Mise à jour de l'API route**
```typescript
// Dans app/api/contact/route.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  // ... validation ...
  
  await resend.emails.send({
    from: 'contact@votre-domaine.com',
    to: 'contact@fraym.com',
    subject: `Nouveau message de ${name}`,
    html: emailTemplate
  })
  
  // ...
}
```

### Option 3: SendGrid (Entreprise)

1. **Installation**
```bash
npm install @sendgrid/mail
```

2. **Configuration**
```typescript
// Dans app/api/contact/route.ts
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

const msg = {
  to: 'contact@fraym.com',
  from: 'noreply@votre-domaine.com',
  subject: `Nouveau message de ${name}`,
  html: emailTemplate
}

await sgMail.send(msg)
```

## 🔧 Configuration des variables d'environnement

Créez un fichier `.env.local` :
```
# EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Resend
RESEND_API_KEY=your_resend_api_key

# SendGrid
SENDGRID_API_KEY=your_sendgrid_api_key

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/votre-compte
```

## 📱 Informations de contact à personnaliser

Dans `app/page.tsx`, mettez à jour :

```typescript
// Email de contact
<a href="mailto:contact@fraym.com">
  contact@fraym.com
</a>

// Numéro de téléphone
<a href="tel:+33123456789">
  +33 1 23 45 67 89
</a>
```

Remplacez par vos vraies coordonnées :
- Email : votre-email@votre-domaine.com
- Téléphone : votre numéro réel

## 🚀 Déploiement

### Vercel (recommandé)
1. Connectez votre repo GitHub à Vercel
2. Ajoutez vos variables d'environnement dans les settings Vercel
3. Déployez

### Netlify
1. Connectez votre repo à Netlify
2. Configurez les variables d'environnement
3. Déployez

## 🧪 Test du système

1. **Test du formulaire de contact**
   - Remplissez le formulaire
   - Vérifiez la réception de l'email
   - Testez les messages d'erreur

2. **Test de Calendly**
   - Cliquez sur "Prendre rendez-vous"
   - Vérifiez que la fenêtre Calendly s'ouvre
   - Testez une réservation

3. **Test des liens directs**
   - Testez le lien email (mailto:)
   - Testez le lien téléphone (tel:)

## 🔒 Sécurité

- Ne jamais exposer vos clés API côté client
- Utilisez des variables d'environnement
- Validez toujours les données côté serveur
- Implémentez un rate limiting si nécessaire
- Ajoutez un CAPTCHA pour éviter le spam

## 📞 Support

Si vous avez des questions sur la configuration, consultez :
- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Documentation Resend](https://resend.com/docs)
- [Documentation Calendly](https://help.calendly.com/)