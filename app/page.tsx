'use client'

import { motion } from 'framer-motion'
import { Play, ArrowRight, CheckCircle, Users, TrendingUp, Clock, Star, ChevronRight, Calendar, Mail, Phone } from 'lucide-react'
import { useState } from 'react'
import { AuroraBackground } from '@/components/ui/aurora-background'
import { CalendlyPopup } from '@/components/CalendlyWidget'
import { CALENDLY_CONFIG, CONTACT_CONFIG, MESSAGES } from '@/lib/config'

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulation d'envoi d'email - remplacez par votre service d'email préféré
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  // Configuration Calendly
  const calendlyUrl = CALENDLY_CONFIG.url

  const openContactForm = () => {
    // Scroll vers le formulaire de contact
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <AuroraBackground className="relative min-h-screen flex items-center justify-center">
        <div className="container-max relative z-10 text-center section-padding">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="max-w-5xl mx-auto space-y-12"
          >
            <motion.h1 
              variants={fadeInUp}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 relative z-20"
            >
              Imaginez un site qui <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">comprend</span><br />
              chaque client
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed relative z-20"
            >
              Fraym révolutionne l'expérience utilisateur en personnalisant automatiquement 
              chaque interface selon les intentions détectées de vos visiteurs.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 relative z-20"
            >
              <button 
                onClick={openContactForm}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 text-base px-8 py-4"
              >
                <Mail className="w-5 h-5" />
                Nous contacter
              </button>
              <CalendlyPopup 
                url={calendlyUrl}
                prefill={{
                  name: formData.name,
                  email: formData.email
                }}
              />
            </motion.div>
            
            {/* Demo image */}
            <motion.div
              variants={fadeInUp}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="pt-8"
            >
              <div className="relative max-w-4xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
                  <img
                    src="/demo.png"
                    alt="Fraym Technology Demo"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </AuroraBackground>

      {/* Vision Produit */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
              Repensons l'expérience web
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Le web d'aujourd'hui est figé, construit autour de menus, de filtres, de parcours prédéfinis. 
              Fraym casse ce modèle. Avec notre technologie, chaque visite devient une expérience fluide, 
              naturelle, centrée sur l'intention. Votre site comprend ce que veut l'utilisateur, 
              et s'adapte en temps réel pour y répondre.
            </p>
            
            {/* Animation illustrative */}
            <div className="grid md:grid-cols-2 gap-8 mt-16">
              <motion.div 
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-2xl"
              >
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">Navigation classique</h3>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-2/3"></div>
                </div>
                <p className="text-gray-600 mt-4">Menus figés, parcours prédéfinis</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-cyan-50 p-8 rounded-2xl border border-primary-200"
              >
                <h3 className="text-2xl font-semibold mb-4 text-primary-700">Avec Fraym</h3>
                <div className="space-y-3">
                  <motion.div 
                    animate={{ width: ['50%', '80%', '60%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="h-4 bg-primary-400 rounded"
                  ></motion.div>
                  <motion.div 
                    animate={{ width: ['30%', '70%', '45%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                    className="h-4 bg-primary-300 rounded"
                  ></motion.div>
                  <motion.div 
                    animate={{ width: ['70%', '40%', '85%'] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                    className="h-4 bg-primary-500 rounded"
                  ></motion.div>
                </div>
                <p className="text-primary-700 mt-4">Interface adaptative en temps réel</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cas d'usage démonstratif */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Voyez Fraym à l'œuvre
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez comment Fraym transforme l'expérience utilisateur en temps réel.
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Texte explicatif avec étapes */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-3xl font-bold mb-6 text-gray-900">
                  Comment ça marche ?
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Fraym analyse en temps réel le comportement de vos visiteurs et adapte automatiquement l'interface pour optimiser leur expérience.
                </p>
              </div>
              
              <div className="space-y-6">
                {[
                  {
                    step: "01",
                    title: "Analyse comportementale",
                    description: "Fraym détecte les intentions et préférences de l'utilisateur dès les premiers clics"
                  },
                  {
                    step: "02",
                    title: "Adaptation intelligente",
                    description: "L'interface se reconfigure automatiquement pour présenter le contenu le plus pertinent"
                  },
                  {
                    step: "03",
                    title: "Optimisation continue",
                    description: "Chaque interaction affine davantage la personnalisation pour une expérience unique"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Vidéo démo */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="bg-gradient-to-br from-primary-100 to-cyan-100 p-4 rounded-3xl shadow-2xl">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto rounded-2xl shadow-lg"
                    style={{ aspectRatio: '9/16' }}
                  >
                    <source src="/demo.mp4" type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture vidéo.
                  </video>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bénéfices / Valeur ajoutée */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Un potentiel de résultats prometteur
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Basé sur les études de marché et les retours de nos partenaires potentiels
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                stat: "+74%",
                description: "d'utilisateurs frustrés par les sites peu personnalisés",
                source: "(Accenture)",
                icon: Users
              },
              {
                stat: "+10%",
                description: "de conversion estimée en e-commerce",
                source: "(projection basée sur études)",
                icon: TrendingUp
              },
              {
                stat: "×2",
                description: "Temps moyen passé avec une UX adaptative",
                source: "(études comportementales)",
                icon: Clock
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-primary-50 to-cyan-50 border border-primary-100"
              >
                <benefit.icon className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-primary-600 mb-2">{benefit.stat}</div>
                <p className="text-gray-700 font-medium mb-1">{benefit.description}</p>
                <p className="text-sm text-gray-500">{benefit.source}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Moins de rebond",
                description: "Les visiteurs trouvent rapidement ce qu'ils cherchent",
                icon: CheckCircle
              },
              {
                title: "Navigation intuitive",
                description: "Fini les menus complexes et les parcours confus",
                icon: ArrowRight
              },
              {
                title: "Interface personnalisée",
                description: "Chaque utilisateur vit une expérience unique",
                icon: Star
              }
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <card.icon className="w-8 h-8 text-primary-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparatif concurrentiel */}
      <section className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Pourquoi choisir Fraym ?
            </h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Solution</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-gray-900">Limites</th>
                    <th className="px-6 py-4 text-left text-lg font-semibold text-primary-600">Avantage Fraym</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    {
                      solution: "Chatbot",
                      limits: "Fenêtre détachée, non immersive",
                      advantage: "Intégration native dans la page"
                    },
                    {
                      solution: "Clerk / Klevu",
                      limits: "Suggestions figées",
                      advantage: "UI dynamique + intention contextuelle"
                    },
                    {
                      solution: "Shopify AI",
                      limits: "Aucune reconfiguration UI",
                      advantage: "Fraym adapte toute l'interface"
                    }
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-medium text-gray-900">{row.solution}</td>
                      <td className="px-6 py-4 text-gray-600">{row.limits}</td>
                      <td className="px-6 py-4 text-primary-600 font-medium">{row.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Preuves sociales */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Des entreprises nous font déjà confiance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plusieurs entreprises ont manifesté leur intérêt pour notre technologie 
              et nous accompagnent dans le développement de Fraym.
            </p>
          </motion.div>
          
          {/* Indicateurs de confiance */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <p className="text-gray-700 font-medium">Lettres d'intention signées</p>
              <p className="text-sm text-gray-500 mt-1">Entreprises prêtes à adopter Fraym</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <div className="text-4xl font-bold text-blue-600 mb-2">€2M+</div>
              <p className="text-gray-700 font-medium">Valeur estimée des projets</p>
              <p className="text-sm text-gray-500 mt-1">Potentiel de revenus identifié</p>
            </div>
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-100">
              <div className="text-4xl font-bold text-purple-600 mb-2">3</div>
              <p className="text-gray-700 font-medium">Secteurs d'activité</p>
              <p className="text-sm text-gray-500 mt-1">E-commerce, SaaS, Services</p>
            </div>
          </motion.div>
          
          {/* Témoignage prospectif */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-700 mb-8 leading-relaxed">
              "Le concept de Fraym répond exactement aux défis que nous rencontrons 
              avec notre plateforme e-commerce. Nous sommes impatients de tester la solution."
            </blockquote>
            <cite className="text-lg text-gray-600">
              — Directeur Digital, <span className="font-semibold">Entreprise partenaire</span>
            </cite>
          </motion.div>
        </div>
      </section>

      {/* Call to Action final */}
      <section id="contact-form" className="section-padding bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Envie de transformer votre UX ?
            </h2>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Parlez-nous de votre site, et construisons ensemble une expérience adaptative sur-mesure.
            </p>
            
            {/* Options de contact */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
               <CalendlyPopup 
                 url={calendlyUrl}
                 prefill={{
                   name: formData.name,
                   email: formData.email
                 }}
               />
               <a
                 href="mailto:contact@fraym.com"
                 className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
               >
                 <Mail className="w-5 h-5" />
                 contact@fraym.com
               </a>
               <a
                 href="tel:+33123456789"
                 className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 border border-white/20 hover:border-white/40 flex items-center justify-center gap-2"
               >
                 <Phone className="w-5 h-5" />
                 +33 1 23 45 67 89
               </a>
             </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <textarea
                placeholder="Parlez-nous de votre projet..."
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm resize-none"
                required
                disabled={isSubmitting}
              />
              
              {/* Messages de statut */}
              {submitStatus === 'success' && (
                <div className="bg-green-500/20 border border-green-400/30 text-green-100 px-4 py-3 rounded-lg">
                  ✅ Message envoyé avec succès ! Nous vous recontacterons rapidement.
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-400/30 text-red-100 px-4 py-3 rounded-lg">
                  ❌ Erreur lors de l'envoi. Veuillez réessayer ou nous contacter directement.
                </div>
              )}
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-600"></div>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Envoyer le message
                    </>
                  )}
                </button>
                <CalendlyPopup 
                   url={calendlyUrl}
                   prefill={{
                     name: formData.name,
                     email: formData.email
                   }}
                 />
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container-max text-center">
          <p className="text-gray-400">
            © 2024 Fraym. Tous droits réservés.
          </p>
        </div>
      </footer>
    </main>
  )
}