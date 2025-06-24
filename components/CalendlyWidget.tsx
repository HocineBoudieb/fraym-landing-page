'use client'

import { InlineWidget, PopupWidget, useCalendlyEventListener } from 'react-calendly'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Calendar, X } from 'lucide-react'
import { CALENDLY_CONFIG, MESSAGES } from '@/lib/config'

interface CalendlyWidgetProps {
  url?: string
  prefill?: {
    name?: string
    email?: string
  }
}

export function CalendlyInline({ url = 'https://calendly.com/votre-compte', prefill }: CalendlyWidgetProps) {
  return (
    <div className="w-full rounded-lg overflow-hidden" style={{ height: CALENDLY_CONFIG.styles.height }}>
      <InlineWidget
        url={url}
        prefill={prefill}
        styles={{
          height: '600px',
          width: '100%'
        }}
      />
    </div>
  )
}

export function CalendlyPopup({ url = 'https://calendly.com/votre-compte', prefill }: CalendlyWidgetProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 text-base px-8 py-4"
      >
        <Calendar className="w-5 h-5" />
        {MESSAGES.calendly.buttonText}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-full h-full">
                <InlineWidget
                  url={url}
                  prefill={prefill}
                  styles={{
                    height: '100%',
                    width: '100%'
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export function CalendlyButton({ 
  url = 'https://calendly.com/votre-compte', 
  prefill,
  variant = 'primary',
  children = 'Prendre rendez-vous'
}: CalendlyWidgetProps & {
  variant?: 'primary' | 'secondary'
  children?: React.ReactNode
}) {
  const openCalendly = () => {
    // Construire l'URL avec les paramètres de pré-remplissage
    let calendlyUrl = url
    
    if (prefill) {
      const params = new URLSearchParams()
      if (prefill.name) params.append('name', prefill.name)
      if (prefill.email) params.append('email', prefill.email)
      
      if (params.toString()) {
        calendlyUrl += '?' + params.toString()
      }
    }
    
    // Ouvrir Calendly dans une nouvelle fenêtre
    window.open(calendlyUrl, 'calendly', 'width=800,height=700,scrollbars=yes,resizable=yes')
  }

  const buttonClasses = variant === 'primary'
    ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center gap-3 text-base px-8 py-4"
    : "bg-white/90 hover:bg-white text-purple-700 font-medium rounded-xl transition-all duration-300 border border-purple-200 hover:border-purple-300 shadow-sm hover:shadow-md backdrop-blur-sm flex items-center gap-3 text-base px-8 py-4"

  return (
    <button
      onClick={openCalendly}
      className={buttonClasses}
    >
      <Calendar className="w-5 h-5" />
      {children}
    </button>
  )
}