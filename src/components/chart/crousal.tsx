'use client'

import * as React from 'react'
import { useEffect } from 'react'

import type { CarouselApi } from '@/components/ui/carousel'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'

import HomepageTable from './customTable'
import SalesChart from './graph-vercel'

export default function HomePageCrousal() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div>
        <Carousel setApi={setApi} className="flex-1 h-[50vh] ">
          <CarouselContent>
            <CarouselItem>
              <SalesChart />
            </CarouselItem>

            <CarouselItem>
              <HomepageTable />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
      <div className="py-2 flex justify-center gap-2 flex-1">
        {Array.from({ length: count }).map((_, index) => (
          <button
            key={index}
            className={`size-2 rounded-full transition-all ${
              index === current ? 'bg-primary' : 'bg-primary/50'
            }`}
            onClick={() => api?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </div>
  )
}
