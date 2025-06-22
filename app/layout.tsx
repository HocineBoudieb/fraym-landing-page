import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Fraym - Interface Intelligente et Conversationnelle',
  description: 'Transformez votre site en une interface intelligente qui s\'adapte à chaque visiteur en temps réel.',
  keywords: 'UX adaptative, interface intelligente, personnalisation web, conversion, e-commerce',
  authors: [{ name: 'Fraym' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Fraym - Interface Intelligente et Conversationnelle',
    description: 'Transformez votre site en une interface intelligente qui s\'adapte à chaque visiteur en temps réel.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}