'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

import DatePickerWithPresets from './dateInputPicker'
import DateRangeSelector from './dateRangeSelector'

interface DatePickerProps {
  initialStartDate?: Date
  initialEndDate?: Date
  trigger?: React.ReactNode
  isOpen?: boolean
  onOpenChange?: (isOpen: boolean) => void
}

const HomeDatePickerSheet: React.FC<DatePickerProps> = ({
  initialStartDate,
  initialEndDate,
  trigger,
  isOpen,
  onOpenChange,
}) => {
  const [selectedStartDate, setSelectedStartDate] = useState<Date | null>(initialStartDate || null)
  const [selectedEndDate, setSelectedEndDate] = useState<Date | null>(initialEndDate || null)
  // const [currentMonth, setCurrentMonth] = useState<Date>(
  //   initialStartDate || new Date()
  // );

  const [selectedDateButton, setSelectedDateButton] = useState<number>(0)

  useEffect(() => {
    if (initialStartDate) setSelectedStartDate(initialStartDate)
    if (initialEndDate) setSelectedEndDate(initialEndDate)
  }, [initialStartDate, initialEndDate])

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onOpenChange}>
        {trigger && (
          <SheetTrigger asChild>
            <Button variant="outline">{trigger}</Button>
          </SheetTrigger>
        )}
        <SheetContent
          side="bottom"
          className="h-[90%] max-w-sm rounded-t-3xl justify-center self-center justify-self-center"
        >
          <SheetHeader>
            <SheetTitle>
              <div className="w-full text-start px-6">Select Date</div>
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-full py-5">
            <div className="w-full max-w-sm bg-white self-center justify-self-center">
              <div
                className="flex items-center justify-start space-x-2 mb-2 overflow-x-auto"
                style={{
                  WebkitOverflowScrolling: 'touch', // For smoother scrolling on mobile
                  scrollbarWidth: 'none', // Firefox
                }}
              >
                {['Custom', 'Today', 'Last week', 'Last Month', 'Last 3 Months'].map(
                  (label, index) => (
                    <Button
                      key={index}
                      variant={index === selectedDateButton ? 'default' : 'outline'}
                      size={index === selectedDateButton ? 'sm' : 'sm'}
                      onClick={() => setSelectedDateButton(index)}
                    >
                      {label}
                    </Button>
                  ),
                )}
              </div>
              <div className="flex items-center mb-4 space-x-2">
                <DatePickerWithPresets date={selectedStartDate} setDate={setSelectedStartDate} />
                <DatePickerWithPresets date={selectedEndDate} setDate={setSelectedEndDate} />
              </div>

              <DateRangeSelector
                setSelectedEndDate={setSelectedEndDate}
                setSelectedStartDate={setSelectedStartDate}
                selectedStartDate={selectedStartDate}
                selectedEndDate={selectedEndDate}
                onApply={() => {}}
                onClear={() => {}}
              />
            </div>
          </ScrollArea>
        </SheetContent>
      </Sheet>
    </>
  )
}

export default HomeDatePickerSheet
