import type { Metadata } from 'next'
import './globals.css'
import SmoothScroll from './components/SmoothScroll'

export const metadata: Metadata = {
  title: 'Catering Vladimír Šindelář',
  description: 'Prvotřídní symfonie chuti',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="cs">
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  )
}
