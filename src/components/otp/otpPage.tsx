'use client'

import * as Form from '@radix-ui/react-form'
import { Checkbox, Spinner } from '@radix-ui/themes'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { useRouter } from 'next/navigation'
import * as React from 'react'
import { useState } from 'react'

import CustomButton from '../button/customButton'
import OTPInput from '../inputs/otpInput'

const checkboxStyles = cva('flex items-center gap-2 justify-center', {
  variants: {
    size: {
      medium: 'text-sm',
    },
  },
  defaultVariants: {
    size: 'medium',
  },
})

function OTPVerification() {
  const [isTrusted, setIsTrusted] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const [otpCode, setOtpCode] = useState('')

  const handleOTPComplete = (otp: string) => {
    setLoading(true)
    // wait for 3 second
    setOtpCode(otp)
    setTimeout(() => {
      setLoading(false)
      router.push('/otp')
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center justify-center p-6 px-10 bg-white rounded-md shadow-md max-w-sm mx-auto text-center">
      <img src="/logo.svg" alt="Logo" className="mb-4" style={{ height: '50px' }} />
      <h2 className="text-2xl font-semibold mb-2">Enter your 6-digit verification code</h2>
      <p className="text-gray-600 text-center mb-4">
        To ensure the security of your account, please enter the 6-digit verification code generated
        by your authenticator app.
      </p>

      <Form.Root
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col justify-center items-center text-start"
      >
        <div className="w-full">
          <p className="text-start text-md self-start">OTP</p>
        </div>
        <OTPInput length={6} onComplete={handleOTPComplete} />

        <Form.Submit asChild>
          <CustomButton
            intent="primary"
            size="large"
            className="w-full mt-4"
            disabled={loading || otpCode.length === 0}
          >
            {loading ? <Spinner /> : 'Confirm'}
          </CustomButton>
        </Form.Submit>

        <div className={clsx(checkboxStyles({ size: 'medium' }), 'mt-4')}>
          <Checkbox
            color="cyan"
            checked={isTrusted}
            onCheckedChange={(checked: boolean) => setIsTrusted(checked === true)}
          />

          <label className="text-gray-700">Trust this device</label>
        </div>
      </Form.Root>

      <a href="#" className="text-blue-600 mt-6">
        Need help authenticating?
      </a>
    </div>
  )
}

export default OTPVerification
