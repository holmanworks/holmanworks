import '@/styles/tailwind.css'
import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next';


export const metadata: Metadata = {
  title: 'holmanworks',
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
          href="https://fonts.googleapis.com/css2?family=Figtree:ital,wght@0,300..900;1,300..900&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Kreon:wght@300..700&family=Manrope:wght@200..800&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
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
