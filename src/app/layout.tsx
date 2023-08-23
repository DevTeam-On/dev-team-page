import HeaderComponent from '@/components/Header'
import './globals.css'
import { Maven_Pro, Titillium_Web, JetBrains_Mono } from 'next/font/google'

const mavenPro = Maven_Pro({ subsets: ['latin'], variable: '--font-mavem-pro' })
const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains'
})
const titilliumWeb = Titillium_Web({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-titillium-web'
})

export const metadata = {
  title: 'Dev Team | Desenvolvimento de softwares',
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
        className={`${mavenPro.variable} ${jetBrainsMono.variable} ${titilliumWeb.variable} h-full w-full bg-gradient-to-t from-blue-400 to-blue-100 bg-no-repeat`}
      >
        <HeaderComponent />
        {children}
      </body>
    </html>
  )
}
