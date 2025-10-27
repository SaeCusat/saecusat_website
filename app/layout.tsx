import type { Metadata } from 'next'
import './globals.css'
import './animations.css'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: 'SAE CUSAT - Society of Automotive Engineers',
  description: 'Official website of SAE CUSAT - Society of Automotive Engineers, CUSAT Chapter. Explore our Formula SAE and Baja SAE teams.',
  keywords: ['SAE', 'CUSAT', 'Automotive Engineers', 'Formula SAE', 'Baja SAE', 'Cochin University'],
  generator: 'Next.js',
  metadataBase: new URL('https://sae.cusat.co.in'),
  alternates: {
    canonical: 'https://sae.cusat.co.in',
  },
  openGraph: {
    title: 'SAE CUSAT - Society of Automotive Engineers',
    description: 'Official website of SAE CUSAT - Society of Automotive Engineers, CUSAT Chapter',
    url: 'https://sae.cusat.co.in',
    type: 'website',
    images: [
      {
        url: '/sae-logo.jpg',
        width: 1200,
        height: 630,
        alt: 'SAE CUSAT Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SAE CUSAT - Society of Automotive Engineers',
    description: 'Official website of SAE CUSAT - Society of Automotive Engineers, CUSAT Chapter',
    images: ['/sae-logo.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
    other: [
      {
        rel: 'android-chrome-192x192',
        url: '/android-chrome-192x192.png',
      },
      {
        rel: 'android-chrome-512x512',
        url: '/android-chrome-512x512.png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}
