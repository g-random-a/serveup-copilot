'use client'

import { Spinner } from '@radix-ui/themes'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useState } from 'react'

import CustomButton from '../button/customButton'
import CustomAlertDialog from '../dialog/alertDialog'
import InputField from '../inputs/input'

function LoginForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  // const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const handleLogin = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    setLoading(true)
    if (!username) {
      setError('Please enter a valid username')
    } else {
      setError(null)
      // wait for 30 sec
      setIsDialogOpen(true)
      setTimeout(() => {
        setLoading(false)
        router.push('/otp')
      }, 3000)

      // Add login functionality here
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-white rounded-[8px] shadow-md max-w-sm mx-auto gap-3">
      <img src="/logo.svg" alt="Logo" className="mb-4" style={{ height: '50px' }} />
      <h2 className="text-2xl font-semibold mb-2 text-center">
        Log in with your ServeOS account details
      </h2>
      <InputField
        label="Username"
        placeholder="Enter your username"
        error={error ?? undefined}
        type="text"
        setValue={setUsername}
        value={username}
      />
      <InputField
        label="Password"
        placeholder="Enter your password"
        error={error ?? undefined}
        type="password"
        setValue={setPassword}
        value={password}
      />

      <CustomButton intent="primary" size="large" onClick={handleLogin} disabled={loading}>
        {loading ? <Spinner /> : 'Login'}
      </CustomButton>

      <CustomAlertDialog
        title="You do not have access to co-pilot"
        description="Please contact your system administrator to enable your co-pilot log in."
        open={isDialogOpen}
        setOpen={() => {
          setIsDialogOpen(!isDialogOpen)
        }}
        cancelText="Okay"
      />

      <a href="#" className="text-blue-600 mt-4 ">
        Forgot password?
      </a>
    </div>
  )
}

export default LoginForm
