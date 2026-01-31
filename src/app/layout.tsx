import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ReactPro - Premium WordPress to React Conversion',
  description: 'Transform your WordPress site into a lightning-fast, modern React application. Up to 70% faster load times with expert conversion services.',
  keywords: 'WordPress to React, React conversion, web development, performance optimization',
  authors: [{ name: 'QuantNexus AI' }],
  openGraph: {
    title: 'ReactPro - Premium WordPress to React Conversion',
    description: 'Transform your WordPress site into a lightning-fast, modern React application.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
