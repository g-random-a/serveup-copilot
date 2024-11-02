'use client'

import {
  addDays,
  addMonths,
  endOfMonth,
  format,
  isBefore,
  isSameDay,
  isToday,
  startOfMonth,
} from 'date-fns'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'

interface DateRangeSelectorProps {
  selectedStartDate: Date | null
  setSelectedStartDate: React.Dispatch<React.SetStateAction<Date | null>>
  selectedEndDate: Date | null
  setSelectedEndDate: React.Dispatch<React.SetStateAction<Date | null>>
  onClear: () => void
  onApply: () => void
}

const DateRangeSelector: React.FC<DateRangeSelectorProps> = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
  onApply,
  onClear,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(selectedStartDate || new Date())

  const handleDateClick = (date: Date) => {
    if (!selectedStartDate || isBefore(date, selectedStartDate)) {
      setSelectedStartDate(date)
      setSelectedEndDate(null)
    } else if (isSameDay(date, selectedStartDate)) {
      setSelectedStartDate(null)
      setSelectedEndDate(null)
    } else {
      setSelectedEndDate(date)
    }
  }

  const generateDaysInMonth = (date: Date): Date[] => {
    const days: Date[] = []
    const start = startOfMonth(date)
    const end = endOfMonth(date)

    for (let day = start; day <= end; day = addDays(day, 1)) {
      days.push(day)
    }
    return days
  }

  // const handleDateInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement>,
  //   isStart: boolean
  // ) => {
  //   const parsedDate = new Date(e.target.value);
  //   if (!isNaN(parsedDate.getTime())) {
  //     isStart ? setSelectedStartDate(parsedDate) : setSelectedEndDate(parsedDate);
  //   }
  // };

  const daysInMonth = generateDaysInMonth(currentMonth)

  return (
    <div className="w-full max-w-sm bg-white self-center justify-self-center">
      <div className="flex items-center justify-between mb-4">
        <Button variant="ghost" onClick={() => setCurrentMonth(addMonths(currentMonth, -1))}>
          {/* ← */}
          <ChevronLeft />
        </Button>
        <Button variant="ghost">
          <span className="text-lg font-semibold">{format(currentMonth, 'MMMM')}</span>
        </Button>
        <Button variant="ghost" onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>
          <ChevronRight />
        </Button>
      </div>

      <div className="grid grid-cols-7 gap-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-500">
            {day}
          </div>
        ))}
        {daysInMonth.map((day) => {
          const isSelected =
            (selectedStartDate && isSameDay(selectedStartDate, day)) ||
            (selectedEndDate && isSameDay(selectedEndDate, day))
          const isBetween =
            selectedEndDate &&
            selectedStartDate &&
            isBefore(selectedStartDate, day) &&
            isBefore(day, selectedEndDate)
          return (
            <Button
              key={day.toISOString()}
              variant={
                isSelected
                  ? 'default'
                  : isBetween
                    ? 'secondary'
                    : isToday(day)
                      ? 'outline'
                      : 'ghost'
              }
              onClick={() => handleDateClick(day)}
              className={`rounded-full py-1 px-[30px]text-center ${
                isSelected ? 'bg-cyan text-white' : ''
              }`}
            >
              {format(day, 'd')}
            </Button>
          )
        })}
      </div>

      <div className="flex justify-between mt-4 gap-1">
        <Button
          onClick={() => {
            setSelectedStartDate(null)
            setSelectedEndDate(null)
            onClear()
          }}
          variant="outline"
          className="flex-1"
        >
          Clear
        </Button>
        <Button onClick={onApply} variant="default" className="flex-1">
          Apply
        </Button>
      </div>
    </div>
  )
}

export default DateRangeSelector
