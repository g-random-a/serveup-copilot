import './styles.css'

import type { Metadata } from 'next'

import { Layout } from '@/components'

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Serveup Dashboard',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Layout>{children}</Layout>
}
