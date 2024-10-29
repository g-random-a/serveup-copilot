'use client'

import { ChatBubbleIcon, GearIcon, HomeIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'

interface CustomNavbarProps {
  className?: string
}

const CustomNavbar: React.FC<CustomNavbarProps> = ({ className = '' }) => {
  const currentRoute = usePathname()

  return (
    <div className="sticky bottom-0 max-w-sm w-full justify-self-center self-center">
      <div className={`flex justify-center w-full align-baseline${className}`}>
        <nav className="w-full max-w-md bg-[#F0FBFE] p-4  border-neutral-400 flex justify-around">
          <Link href="/dashboard">
            <button
              className={`flex flex-col items-center  ${currentRoute === '/dashboard' ? 'text-neutral-900' : 'text-neutral-400'}`}
            >
              <HomeIcon className="mb-1" width={22} height={22} />
              Home
            </button>
          </Link>
          <Link href="/dashboard/requests">
            <button
              className={`flex flex-col items-center ${currentRoute === '/dashboard/requests' ? 'text-neutral-900' : 'text-neutral-400'}`}
            >
              <ChatBubbleIcon className="mb-1" width={22} height={22} />
              Requests
            </button>
          </Link>
          <Link href="/dashboard/settings">
            <button
              className={`flex flex-col items-center ${currentRoute === '/dashboard/settings' ? 'text-neutral-900' : 'text-neutral-400'}`}
            >
              <GearIcon className="mb-1" width={22} height={22} />
              Settings
            </button>
          </Link>
        </nav>
      </div>
    </div>
  )
}

export default CustomNavbar
