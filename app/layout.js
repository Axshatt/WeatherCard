import { Inter } from 'next/font/google'
import {city} from '@/app/components/card'
import './globals.css'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `Weather App`,
  description: 'Weather App',
  
}

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
