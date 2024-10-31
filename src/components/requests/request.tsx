'use client'

import * as React from 'react'
import { useState } from 'react'

import CustomAlertDialog from '../dialog/alertDialog'
import RequestCard from './requestCard'

function RequestsPage() {
  const data = [
    {
      name: "Roman's Pizaria",
      location: 'Sunnyside',
      payment: 'R1,376.00',
      supplier: 'John Smith 12/12/2024 11:35am',
    },
    {
      name: "Roman's Pizaria",
      location: 'Downtown',
      payment: 'R820.00',
      supplier: 'Jane Doe 13/12/2024 10:00am',
    },
    {
      name: "Roman's Pizaria",
      location: 'Sunnyside',
      payment: 'R1,376.00',
      supplier: 'John Smith 12/12/2024 11:35am',
    },
    {
      name: "Roman's Pizaria",
      location: 'Downtown',
      payment: 'R820.00',
      supplier: 'Jane Doe 13/12/2024 10:00am',
    },
    {
      name: "Roman's Pizaria",
      location: 'Sunnyside',
      payment: 'R1,376.00',
      supplier: 'John Smith 12/12/2024 11:35am',
    },
    {
      name: "Roman's Pizaria",
      location: 'Downtown',
      payment: 'R820.00',
      supplier: 'Jane Doe 13/12/2024 10:00am',
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="bg-white flex flex-col items-center max-w-sm requests-container">
      <div className="w-full max-w-md p-3">
        {data.map((item, index) => {
          const requestCardCustom = (
            <RequestCard
              name={item.name}
              key={`${index}card`}
              location={item.location}
              payment={item.payment}
              supplier={item.supplier}
              isActive={index === activeIndex}
              changeIndex={() => setActiveIndex(index)}
            />
          )
          const descReqeustCardCustom = (
            <RequestCard
              name={item.name}
              key={`${index}descCard`}
              location={item.location}
              payment={item.payment}
              supplier={item.supplier}
              isActive={false}
              changeIndex={() => {}}
            />
          )

          return (
            <CustomAlertDialog
              key={index}
              trigger={requestCardCustom}
              description={descReqeustCardCustom}
              actionText="Approve"
              cancelText="Reject"
            />
          )
        })}
      </div>
    </div>
  )
}

export default RequestsPage
