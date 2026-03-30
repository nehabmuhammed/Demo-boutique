import type { Metadata } from 'next'
import { Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'I Meraki Designer Boutique | Pathanapuram',
  description: 'Luxury designer stitching and bridal blouse designing in Pathanapuram. Custom outfits crafted with passion and elegance.',
  keywords: ['Boutique in Pathanapuram', 'Designer boutique Pathanapuram', 'Bridal blouse stitching Pathanapuram', 'Ladies boutique Kollam'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${playfair.variable} font-sans bg-black text-neutral-200 antialiased`}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

