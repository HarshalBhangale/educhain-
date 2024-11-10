import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "../components/navigation/navbar";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nimbus Finance',
  description: 'Defi platform to stake, lend/borrow and invest in yield vaults',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 bg-opacity-50 ">
            <Navbar />
            {children}
          </div>
        </Providers>

      </body>
    </html >
  )
}
