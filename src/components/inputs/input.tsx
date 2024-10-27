'use client'

import { ExclamationTriangleIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons'
import { Button, TextField } from '@radix-ui/themes'
import * as React from 'react'

// Custom TextField component
interface CustomTextFieldProps {
  label: string
  placeholder: string
  error?: string
  type:
    | 'number'
    | 'search'
    | 'time'
    | 'text'
    | 'hidden'
    | 'date'
    | 'datetime-local'
    | 'email'
    | 'month'
    | 'password'
    | 'tel'
    | 'url'
    | 'week'
    | undefined
  setValue: React.Dispatch<React.SetStateAction<string>>
  [key: string]: any
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  label,
  placeholder,
  error,
  type,
  setValue,
  ...props
}) => {
  const [showError, setShowError] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Replace this with any custom validation logic
    setValue(e.target.value)
    const isValid = e.target.value.length > 0
    setShowError(!isValid)
  }

  return (
    <div className="max-w-sm w-full">
      <p className="block text-sm text-gray-800 font-medium mb-1">{label}</p>
      <div className="bg-red">
        <TextField.Root
          placeholder={placeholder}
          {...props}
          onBlur={handleBlur}
          color={showError ? 'red' : 'gray'}
          type={showPassword ? 'text' : type}
          variant="classic"
          value={props.value}
          onChange={(e) => setValue(e.target.value)}
        >
          <TextField.Slot>{showError && <ExclamationTriangleIcon color="red" />}</TextField.Slot>

          <TextField.Slot style={{ marginRight: '5px' }}>
            {type === 'password' &&
              (showPassword ? (
                <Button variant="ghost" onClick={() => setShowPassword(!showPassword)}>
                  <EyeClosedIcon />
                </Button>
              ) : (
                <Button variant="ghost" onClick={() => setShowPassword(!showPassword)}>
                  <EyeOpenIcon onClick={() => setShowPassword(!showPassword)} />
                </Button>
              ))}
          </TextField.Slot>
        </TextField.Root>
      </div>
      {showError && (
        <span className="block text-sm text-red-600 font-thin">Please enter a valid username</span>
      )}
    </div>
  )
}

export default CustomTextField
