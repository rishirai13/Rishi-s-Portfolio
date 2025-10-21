import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: "Rishi's Developer Portfolio",
  description: "A showcase of innovative web development projects, full-stack solutions, and cutting-edge frontend designs, reflecting expertise in modern technologies and creative problem-solving.",
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
