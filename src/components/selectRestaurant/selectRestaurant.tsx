'use client'

import { CrossCircledIcon } from '@radix-ui/react-icons'
import {
  Badge,
  Box,
  Button,
  Checkbox,
  DataList,
  Dialog,
  Flex,
  Heading,
  IconButton,
  ScrollArea,
} from '@radix-ui/themes'
import * as React from 'react'
import { useState } from 'react'

interface RadioItemProps {
  itemValue: string
  label: string
}

const RadioItem: React.FC<RadioItemProps> = ({ itemValue, label }) => {
  const [value, setValue] = useState('1')

  const datalist = [
    { title: 'Server', value: 'Online' },
    { title: 'On line order', value: 'Online' },
    { title: 'Uber Eats', value: 'Online' },
    { title: 'Mr Delivery', value: 'Online' },
  ]

  return (
    <div
      role="radio"
      aria-checked={value === itemValue}
      onClick={() => setValue(itemValue)}
      tabIndex={0}
      style={{
        cursor: 'pointer',
        padding: '16px',
        border: value === itemValue ? '1px solid #00A6C6' : '1px solid #E8E8E8',
        borderRadius: '8px',
        marginBottom: '10px',
      }}
    >
      <Flex direction="column" width="100%">
        <Flex direction="row" justify="between" style={{ marginBottom: '10px' }}>
          <Heading className="font-medium text-gray-800">{label}</Heading>
          <Checkbox
            color="cyan"
            checked={value === itemValue}
            onCheckedChange={() => setValue(itemValue)}
          />
        </Flex>
        <DataList.Root style={{ gap: '10px' }}>
          {value === itemValue &&
            datalist.map((data, index) => (
              <DataList.Item align="center" key={index}>
                <DataList.Label minWidth="88px">{data.title}</DataList.Label>
                <DataList.Value>
                  <Badge color="jade" variant="soft">
                    {data.value}
                  </Badge>
                </DataList.Value>
              </DataList.Item>
            ))}
          {value !== itemValue && (
            <Badge color="jade" variant="soft">
              Online
            </Badge>
          )}
        </DataList.Root>
      </Flex>
    </div>
  )
}

function StoreSelector() {
  return (
    <Box maxWidth="600px">
      <RadioItem itemValue="1" label="Roman's Sunnyside" />
      <RadioItem itemValue="2" label="Roman's Sunnyside" />
      <RadioItem itemValue="3" label="Roman's Sunnyside" />
      <RadioItem itemValue="4" label="Roman's Sunnyside" />
    </Box>
  )
}

function dialogBox() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Open popup</Button>
      </Dialog.Trigger>

      <Dialog.Content
        maxWidth="450px"
        style={{
          position: 'fixed',
          bottom: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
          maxWidth: '450px',
          borderRadius: '12px 12px 0 0',
          boxShadow: '0px -4px 12px rgba(0, 0, 0, 0.1)',
          animation: 'slide-up 0.3s ease-out',
        }}
      >
        <Dialog.Title>
          <Flex direction="row" justify="between" style={{ marginBottom: '10px' }}>
            <Heading className="font-medium text-gray-800">Select a store</Heading>
            <IconButton variant="ghost">
              <CrossCircledIcon width="23px" height="23px" color="black" />
            </IconButton>
          </Flex>
        </Dialog.Title>
        <ScrollArea
          type="always"
          scrollbars="vertical"
          style={{ height: 500, paddingRight: '20px' }}
        >
          <StoreSelector />
        </ScrollArea>
      </Dialog.Content>

      <style jsx global>
        {`
          @keyframes slide-up {
            from {
              transform: translate(-50%, 100%);
            }
            to {
              transform: translate(-50%, 0);
            }
          }
        `}
      </style>
    </Dialog.Root>
  )
}

export default dialogBox
