import "./globals.css"
import React from "react"
import type { Metadata } from "next"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false

export const metadata: Metadata = {
  title: "Weather APP",
  description: "This is wheater app for checking weather in your city",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="flex h-screen w-screen items-center justify-center"
    >
      <body>{children}</body>
    </html>
  )
}
