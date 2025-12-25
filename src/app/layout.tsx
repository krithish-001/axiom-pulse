import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Axiom Pulse",
  description: "Real-time token discovery table",
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
