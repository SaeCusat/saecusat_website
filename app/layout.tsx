import type { Metadata } from 'next'
import './globals.css'
import { ErrorBoundary } from '@/components/ErrorBoundary'

export const metadata: Metadata = {
  title: 'SAE CUSAT - Society of Automotive Engineers',
  description: 'Official website of SAE CUSAT - Society of Automotive Engineers, CUSAT Chapter',
  keywords: ['SAE', 'CUSAT', 'Automotive Engineers', 'Formula SAE', 'Baja SAE'],
  generator: 'Next.js',
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
