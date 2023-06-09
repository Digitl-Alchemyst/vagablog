import './globals.css';
import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';


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
      <body>

        <Navbar />
        {children}
        <Footer />
        
      </body>

    </html>
  )
}
