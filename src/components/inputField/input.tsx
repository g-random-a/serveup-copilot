'use client'

import React from 'react';
import { Button, TextField } from '@radix-ui/themes';
import { ExclamationTriangleIcon, EyeClosedIcon, EyeOpenIcon } from '@radix-ui/react-icons';
import { cva } from 'class-variance-authority';

const inputStyles = cva("border rounded text-sm px-3 py-1 w-full outline-none transition-all", {
  variants: {
    state: {
      default: "border-gray-300 text-gray-900",
      focused: "border-blue-500",
      error: "border-red-500 text-red-600",
    },
  },
  defaultVariants: {
    state: "default",
  },
});


// Custom TextField component
interface CustomTextFieldProps {
  label: string;
  placeholder: string;
  size?: '1' | '2' | '3';
  error?: string;
  type: "number" | "search" | "time" | "text" | "hidden" | "date" | "datetime-local" | "email" | "month" | "password" | "tel" | "url" | "week" | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  [key: string]: any;

}

const CustomTextField: React.FC<CustomTextFieldProps> = ({label, placeholder, size = '2', error, type, setValue, ...props }) => {

  const [showError, setShowError] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Replace this with any custom validation logic
    setValue(e.target.value);
    const isValid = e.target.value.length > 0;
    setShowError(!isValid);
  };

  return (
    <div className='max-w-sm w-full'>
      <p className="block text-sm text-gray-800 font-medium mb-1">{label}</p>
      <div className='bg-red'>
      <TextField.Root
        placeholder={placeholder}
        {...props}
        onBlur={handleBlur}
        color={showError ? 'red' : 'gray'}
        type = {showPassword ? 'text' : type}
        variant="classic"
        value={props.value}
        onChange={(e) => setValue(e.target.value)}
      >
          <TextField.Slot>
            {showError && (
              <ExclamationTriangleIcon color='red'/>
            )}
          </TextField.Slot>

          <TextField.Slot style={{marginRight: "5px"}}>

          {
            type == "password"  && 
            (
              showPassword ? 
              <Button
              variant="ghost"
              onClick={()=> setShowPassword(!showPassword)}
              >
                <EyeClosedIcon /> 
              </Button> :

              <Button
              variant="ghost"
              onClick={()=> setShowPassword(!showPassword)}
              >
                <EyeOpenIcon onClick={()=> setShowPassword(!showPassword)}/>
              </Button>
            )
            
          }
          </TextField.Slot>


    </TextField.Root>
      </div>
    {showError && (
        <span className="block text-sm text-red-600 font-thin">Please enter a valid username</span>
    )}
    </div>
  );
};

export default CustomTextField;