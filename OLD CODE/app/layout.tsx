import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: {
    template: '',
    default: 'Holmanworks',
  },
  description: '',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-32x32.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
        />
      </head>

      <body 
        className="text-gray-950 antialiased">
          {children}
          <Analytics />
      </body>
    </html>
  )
}
