import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'] })

export const metadata: Metadata = {
  title: 'Pricewatch',
  description: 'Track product prices effortlessly and save money on your online shopping.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className='max-w-10xl mx-auto'>
          <Navbar />
          {children}
        </main>
        <footer
          className='flex flex-col justify-center items-center p-10 relative bg-black text-white text-center'
        >
          <p>Copyright © PRICEWATCH 2023. All rights reserved.</p>
          <p>Made with 🤍 by <a href='https://linkedin.com/in/engr-sohaib' target='_blank' className='underline'>Engr. Sohaib</a></p>
        </footer>
      </body>
    </html>
  )
}
