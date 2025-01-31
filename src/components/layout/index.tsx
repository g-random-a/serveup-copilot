'use client'
import './styles.css'

import type { ReactNode } from 'react'

import CustomNavbar from '../navbar/navbar'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative layout">
      {children}
      <CustomNavbar />
    </div>
  )
}
