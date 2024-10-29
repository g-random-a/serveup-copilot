'use client'

import { CalendarIcon } from '@radix-ui/react-icons'
import { Flex, SegmentedControl } from '@radix-ui/themes'
import { format } from 'date-fns'
import * as React from 'react'

import { cn } from '@/lib/utils'

import SelectRestaurantComponent from '../selectRestaurant/selectRestaurantComponent'
import { Button } from '../ui/button'
import HomePageCrousal from './crousal'

const date = {
  from: new Date(),
  to: new Date(),
}

const HomePage: React.FC = () => {
  return (
    <Flex
      align="center"
      justify="end"
      direction="column"
      gap="3"
      className="bg-white w-full p-4 max-w-sm "
    >
      <SelectRestaurantComponent title="Roman's Sunnyside" value="Online" onclick={() => {}} />

      <SegmentedControl.Root defaultValue="inbox" radius="small">
        <SegmentedControl.Item value="inbox">Net sales</SegmentedControl.Item>
        <SegmentedControl.Item value="drafts" className="">
          Counter sales
        </SegmentedControl.Item>
        <SegmentedControl.Item value="sent">Online sales</SegmentedControl.Item>
      </SegmentedControl.Root>

      <HomePageCrousal />

      <Flex gap="2" className="w-full justify-between">
        <Button
          id="date"
          variant="outline"
          className={cn('justify-start text-left font-normal', !date && 'text-muted-foreground')}
        >
          {date?.from ? (
            date.to ? (
              <>
                {format(date.from, 'mm/dd/y')} - {format(date.to, 'mm/dd/y')}
              </>
            ) : (
              format(date.from, 'LLL dd, y')
            )
          ) : (
            <span>Pick a date</span>
          )}
          <CalendarIcon />
        </Button>

        <Button variant="secondary"> Compare</Button>
      </Flex>
    </Flex>
  )
}

export default HomePage
