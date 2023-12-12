import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import BooksProvider from '@/context/BooksProvider'
import StoreProvider from '@/components/StoreProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Book Tracking App',
  description: 'A Simple Book Tracking Web Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StoreProvider>
          <BooksProvider>
            {children}
          </BooksProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
