import './globals.css'
import type { Metadata } from 'next'
import { Roboto, Poppins } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Wheater APP',
  description: 'This is wheater app for checking wheater in your city',
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
