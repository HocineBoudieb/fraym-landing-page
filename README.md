# Fraym Landing Page

Une landing page moderne et interactive pour Fraym, créée avec Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## 🚀 Fonctionnalités

- **Design moderne** avec glassmorphism et animations fluides
- **Section Hero** immersive avec éléments flottants animés
- **Démo interactive** permettant de tester l'interface adaptative
- **Comparatifs visuels** entre navigation classique et Fraym
- **Métriques de performance** avec animations au scroll
- **Tableau comparatif** avec la concurrence
- **Témoignages clients** et preuves sociales
- **Formulaire de contact** intégré
- **Responsive design** optimisé pour tous les appareils
- **Animations** avec Framer Motion
- **Performance optimisée** avec Next.js 14

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations et transitions
- **Lucide React** - Icônes modernes

## 📦 Installation

1. Installer les dépendances :
```bash
npm install
```

2. Lancer le serveur de développement :
```bash
npm run dev
```

3. Ouvrir [http://localhost:3000](http://localhost:3000) dans votre navigateur

## 🎨 Structure du projet

```
├── app/
│   ├── globals.css          # Styles globaux et classes utilitaires
│   ├── layout.tsx           # Layout principal avec métadonnées SEO
│   └── page.tsx             # Page d'accueil avec tous les composants
├── public/                  # Assets statiques
├── tailwind.config.js       # Configuration Tailwind
├── tsconfig.json           # Configuration TypeScript
└── package.json            # Dépendances et scripts
```

## 📱 Sections de la landing page

1. **Hero Section** - Accroche principale avec CTA
2. **Vision Produit** - Explication du concept Fraym
3. **Démo Interactive** - Test en temps réel de l'interface
4. **Bénéfices** - Métriques et avantages chiffrés
5. **Comparatif** - Tableau de comparaison concurrentielle
6. **Preuves Sociales** - Témoignages clients
7. **CTA Final** - Formulaire de contact et prise de rendez-vous
8. **Footer** - Informations de l'entreprise

## 🎯 Optimisations SEO

- Métadonnées complètes (title, description, keywords)
- Open Graph pour les réseaux sociaux
- Structure sémantique HTML5
- Images optimisées et alt text
- Performance optimisée avec Next.js

## 🚀 Déploiement

Pour construire le projet pour la production :

```bash
npm run build
npm start
```

## 📝 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `tailwind.config.js` :
- Primary : Bleu (#0ea5e9)
- Gradients personnalisés
- Palette de gris étendue

### Animations
Les animations sont configurées dans :
- `tailwind.config.js` pour les keyframes
- `globals.css` pour les classes utilitaires
- Composants avec Framer Motion

### Contenu
Tout le contenu est modifiable dans `app/page.tsx` selon le cahier de rédaction fourni.

## 📞 Support

Pour toute question ou personnalisation, contactez l'équipe de développement.

---

**Fraym** - L'interface intelligente qui transforme l'expérience web