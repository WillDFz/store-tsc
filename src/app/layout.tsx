import './globals.scss'
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/custom-bootstrap.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/UI/Header/Header';

import { CartProvider } from '../components/Context/CartContext/CartContext'
import Footer from './../components/UI/Footer/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store App',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <CartProvider>
            <Header />
            {children}
            <Footer/>
          </CartProvider>
        </div>
      </body>
    </html>
  )
}
