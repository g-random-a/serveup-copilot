'use client'

import {
  Area,
  AreaChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'

const data = [
  { date: '12 Aug', sales: 30000 },
  { date: '13 Aug', sales: 25000 },
  { date: '14 Aug', sales: 40000 },
  { date: '15 Aug', sales: 30000 },
  { date: '16 Aug', sales: 36943 },
  { date: '17 Aug', sales: 32000 },
  { date: '18 Aug', sales: 30000 },
]

const SalesChart: React.FC = () => {
  const maxSales = Math.max(...data.map((d) => d.sales))

  return (
    <div className="h-[50vh] w-full relative max-w-sm ">
      <ResponsiveContainer width="100%" height="100%" className="bg-white justify-start px-3">
        <AreaChart
          data={data}
          className="size-full bg-white"
          margin={{ top: 10, right: 0, left: 0, bottom: 10 }}
        >
          <defs>
            <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#53CCE6" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#53CCE6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="gridGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            horizontal={false}
            stroke="url(#gridGradient)"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: '#8FA0A4',
              fontWeight: 400,
              alignmentBaseline: 'after-edge',
            }}
            interval={0}
            padding={{ left: 20, right: 20 }}
            alignmentBaseline="after-edge"
            // minTickGap={10}
            scale="point"
            textAnchor="middle"
          />

          <YAxis
            domain={[0, maxSales + maxSales * 0.1]}
            axisLine={false}
            tickLine={false}
            width={0}
          />

          <Tooltip
            cursor={false}
            content={({ active, payload }) => {
              if (active && payload && payload.length > 0) {
                // const currentIndex = data.findIndex((d) => d.date === payload[0].payload.date)
                // setHoveredIndex(currentIndex);
                return (
                  <div className="rounded-lg p-2 text-white bg-[#00002E] px-[12px] shadow-sm">
                    <div className="text-center">
                      <div className="text-[700]">R{payload[0].value}</div>
                      <div className="text-xs" style={{ color: 'rgba(255, 255, 255, 0.48)' }}>
                        {payload[0].payload.date}, 2024
                      </div>
                    </div>
                  </div>
                )
              }
              // setHoveredIndex(null);
              return null
            }}
          />
          <Area
            type="monotone"
            dataKey="sales"
            stroke="#53CCE6"
            strokeWidth={2}
            fill="url(#colorSales)"
            fillOpacity={1}
            activeDot={{
              r: 6,
              strokeWidth: 4,
              fill: '#ffffff',
              stroke: '#53CCE6',
            }}
          />

          {/* Vertical lines at each point with tooltip-based color change */}
          {/* {data.map((entry, index) => (
             <Line
                key={`line-${index}`}
                data={[
                { date: entry.date, sales: 0 },
                { date: entry.date, sales: entry.sales },
                ]}
                type="linear"
                dataKey="sales"
                stroke={index === hoveredIndex ? "#ffffff" : "#ffffff"}
                strokeWidth={2}
                dot={false} // Remove dots for the vertical line
           />
          ))} */}

          <Line type="monotone" dataKey="y" stroke="#ff7300" dot={true} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SalesChart
