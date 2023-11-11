import type { Metadata } from 'next'
import './globals.css'
import { roboto } from './fonts'

import Header from '@/components/ui/Header'
import { Footer } from '@/components/ui/Footer'

export const metadata: Metadata = {
  title: 'Borcelle',
  description: 'Postres & Bakery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antiliased`}>
        <Header />
        {children}
        <Footer />
      </body>
  
    </html>
  )
}
