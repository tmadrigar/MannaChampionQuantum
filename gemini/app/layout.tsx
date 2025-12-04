import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './stars.module.css' // <-- Importe o novo CSS aqui!

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Manna Champion Quantum 2025',
  description: 'Projetos inovadores de Computação Quântica.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}