import HeaderComponent from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dev Team',
  description: 'Página de serviços da Dev Team, venha desenvolver sua ideia.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        // className={inter.className}
        className="h-screen w-screen bg-gradient-to-t from-blue-400 to-blue-100 bg-no-repeat"
      >
        <HeaderComponent />
        {children}
      </body>
    </html>
  )
}
