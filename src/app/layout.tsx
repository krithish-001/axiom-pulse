import "./globals.css"
import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Axiom Pulse",
  description: "Real-time token discovery table",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  redirect("/pulse")

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
