'use client'

import * as Form from '@radix-ui/react-form'
import { cva } from 'class-variance-authority'
import clsx from 'clsx'
import { produce } from 'immer'
import type { ChangeEvent, KeyboardEvent } from 'react'
import { useRef, useState } from 'react'

const otpInputStyles = cva('border rounded text-center font-medium outline-none', {
  variants: {
    state: {
      default: 'border-gray-300 text-black',
      focused: 'border-blue-500 text-black',
      error: 'border-red-500 text-red-700',
    },
  },
  defaultVariants: {
    state: 'default',
  },
})

const OTPInput: React.FC<{ onComplete: (otp: string) => void; length?: number }> = ({
  onComplete,
  length = 6,
}) => {
  const [otp, setOtp] = useState<string[]>(Array.from({ length }, () => ''))
  const inputRefs = useRef<HTMLInputElement[]>([])
  const [focusIndex, setFocusIndex] = useState<number | null>(null)

  const handleChange = (index: number, value: string) => {
    if (Number.isNaN(Number(value))) return

    setOtp(
      produce((draft) => {
        draft[index] = value
      }),
    )

    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus()
      setFocusIndex(index + 1)
    }

    if (otp.every((digit, idx) => (idx === index ? value : digit) !== '')) {
      onComplete(otp.join(''))
    }
  }

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus()
      setFocusIndex(index - 1)
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      {Array.from({ length }, (_, index) => (
        <Form.Field name={`otp-input-${index}`} key={index}>
          <Form.Control asChild>
            <input
              type="text"
              value={otp[index]}
              maxLength={1}
              ref={(ref) => {
                if (ref) inputRefs.current[index] = ref
              }}
              onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className={clsx(
                otpInputStyles({
                  state: focusIndex === index ? 'focused' : 'default',
                }),
              )}
              style={{ width: '2.5rem', height: '2.5rem', fontSize: '1.5rem' }}
            />
          </Form.Control>
        </Form.Field>
      ))}
    </div>
  )
}

export default OTPInput
