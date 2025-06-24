# Configuration Calendly avec react-calendly

## 📋 Prérequis

1. **Compte Calendly** : Créez un compte sur [calendly.com](https://calendly.com)
2. **Type d'événement** : Configurez au moins un type d'événement (ex: "Consultation 30 min")

## 🚀 Configuration rapide

### 1. Obtenir votre URL Calendly

1. Connectez-vous à votre compte Calendly
2. Allez dans "Event Types" 
3. Cliquez sur votre événement
4. Copiez l'URL publique (ex: `https://calendly.com/votre-nom/30min`)

### 2. Configurer l'URL dans le projet

Modifiez le fichier `lib/config.ts` :

```typescript
export const CALENDLY_CONFIG = {
  // Remplacez par votre vraie URL Calendly
  url: 'https://calendly.com/votre-nom/30min', // ← Changez ici
  
  defaultPrefill: {
    // Optionnel : pré-remplir des informations
    // name: 'Nom par défaut',
    // email: 'email@example.com',
  },
  
  styles: {
    height: '600px', // Hauteur du widget
    width: '100%'
  }
}
```

## 🎨 Composants disponibles

### CalendlyButton (Popup)
```tsx
<CalendlyButton 
  url={calendlyUrl}
  prefill={{
    name: formData.name,
    email: formData.email
  }}
/>
```

### CalendlyInline (Widget intégré)
```tsx
<CalendlyInline 
  url={calendlyUrl}
  prefill={{
    name: formData.name,
    email: formData.email
  }}
/>
```

### CalendlyPopup (Modal personnalisé)
```tsx
<CalendlyPopup 
  url={calendlyUrl}
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  prefill={{
    name: formData.name,
    email: formData.email
  }}
/>
```

## ⚙️ Options de personnalisation

### Pré-remplissage des données

```typescript
const prefillData = {
  name: 'Jean Dupont',
  email: 'jean@example.com',
  firstName: 'Jean',
  lastName: 'Dupont',
  // Champs personnalisés
  customAnswers: {
    a1: 'Réponse à la question 1',
    a2: 'Réponse à la question 2'
  }
}
```

### Styles du widget

```typescript
export const CALENDLY_CONFIG = {
  styles: {
    height: '700px', // Hauteur personnalisée
    width: '100%'
  }
}
```

### Messages personnalisés

Modifiez `lib/config.ts` :

```typescript
export const MESSAGES = {
  calendly: {
    buttonText: 'Réserver un créneau',
    sectionTitle: 'Planifiez votre rendez-vous',
    sectionDescription: 'Choisissez le moment idéal pour notre échange.'
  }
}
```

## 🔧 Configuration avancée Calendly

### 1. Questions personnalisées

Dans votre compte Calendly :
1. Allez dans "Event Types"
2. Sélectionnez votre événement
3. Onglet "Invitee Questions"
4. Ajoutez vos questions personnalisées

### 2. Notifications et rappels

1. Onglet "Notifications & Workflows"
2. Configurez les emails de confirmation
3. Activez les rappels automatiques

### 3. Intégrations

- **Google Calendar** : Synchronisation automatique
- **Zoom** : Création automatique de liens de réunion
- **Slack** : Notifications dans vos canaux

## 🎯 Événements et callbacks

```tsx
import { useCalendlyEventListener } from 'react-calendly'

function MyComponent() {
  useCalendlyEventListener({
    onProfilePageViewed: () => console.log('Page vue'),
    onDateAndTimeSelected: () => console.log('Date sélectionnée'),
    onEventTypeViewed: () => console.log('Type d\'événement vu'),
    onEventScheduled: (e) => {
      console.log('Événement planifié:', e.data.payload)
      // Redirection ou action personnalisée
    }
  })
  
  return <CalendlyInline url={calendlyUrl} />
}
```

## 🚀 Déploiement

### Variables d'environnement (optionnel)

Créez `.env.local` :

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/votre-nom/30min
```

Puis dans `lib/config.ts` :

```typescript
export const CALENDLY_CONFIG = {
  url: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/votre-nom/30min',
  // ...
}
```

## 🔍 Test et validation

1. **Mode développement** :
   ```bash
   npm run dev
   ```

2. **Testez les composants** :
   - Bouton popup : Clic → Modal Calendly
   - Widget intégré : Affichage direct
   - Pré-remplissage : Vérifiez que les données apparaissent

3. **Test de réservation** :
   - Réservez un créneau test
   - Vérifiez la réception des emails
   - Testez l'intégration calendrier

## 📱 Responsive

Le widget est automatiquement responsive. Pour personnaliser :

```css
/* Dans votre CSS global */
.calendly-inline-widget {
  min-height: 500px;
}

@media (max-width: 768px) {
  .calendly-inline-widget {
    min-height: 400px;
  }
}
```

## 🛠️ Dépannage

### Problèmes courants

1. **Widget ne s'affiche pas** :
   - Vérifiez l'URL Calendly
   - Assurez-vous que l'événement est public

2. **Pré-remplissage ne fonctionne pas** :
   - Vérifiez les noms des champs
   - Consultez la documentation Calendly

3. **Erreur de CORS** :
   - Normal en développement local
   - Testez en production

### Support

- [Documentation react-calendly](https://github.com/tcampb/react-calendly)
- [Documentation Calendly](https://help.calendly.com/)
- [API Calendly](https://developer.calendly.com/)

## ✅ Checklist finale

- [ ] Compte Calendly créé et configuré
- [ ] URL Calendly mise à jour dans `lib/config.ts`
- [ ] Types d'événements configurés
- [ ] Questions personnalisées ajoutées (si nécessaire)
- [ ] Intégrations activées (Google Calendar, Zoom, etc.)
- [ ] Tests effectués en développement
- [ ] Déploiement en production testé

Votre intégration Calendly est maintenant prête ! 🎉