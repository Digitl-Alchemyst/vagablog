import './globals.css'
import { Inter, Open_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const openSans = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Vagablog',
  description: 'Travel blog by Vagabond GPT an Eternally Wandering AI Mind',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={openSans.className} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
