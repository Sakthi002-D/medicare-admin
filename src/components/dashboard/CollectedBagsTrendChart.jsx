import { ChartLine } from 'lucide-react'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Card from './Card'
import { bagSeries, collectedBagsTrend } from '../../data/bagDashboard'

function TrendTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  return (
    <div className="rounded-lg bg-white px-3 py-2 text-xs shadow-[0_4px_12px_rgba(51,51,51,0.25)]">
      <p className="font-bold text-gray-900">{label}</p>
      {payload.map((item) => (
        <p key={item.dataKey} className="mt-1" style={{ color: item.stroke }}>
          {item.name} :{' '}
          <span className="font-bold">
            {item.value.toLocaleString('en-IN')}
          </span>
        </p>
      ))}
    </div>
  )
}

export default function CollectedBagsTrendChart() {
  return (
    <Card className="flex h-[380px] flex-col p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <ChartLine size={16} className="text-primary" />
          Collected Bags Trend
        </h2>

        <ul className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
          {bagSeries.map(({ key, label, color }) => (
            <li key={key} className="flex items-center gap-1.5">
              <span className="h-1 w-5 rounded-full" style={{ background: color }} />
              {label}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={collectedBagsTrend}
            margin={{ top: 10, right: 10, left: -14, bottom: 0 }}
          >
            <CartesianGrid vertical={false} stroke="#E5E7EB" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis
              domain={[0, 10000]}
              ticks={[0, 2500, 5000, 7500, 10000]}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <Tooltip
              content={<TrendTooltip />}
              cursor={{ stroke: '#9CA3AF', strokeWidth: 1 }}
            />
            {bagSeries.map(({ key, name, color }) => (
              <Line
                key={key}
                type="monotone"
                dataKey={key}
                name={name}
                stroke={color}
                strokeWidth={1}
                dot={false}
                activeDot={{ r: 3.5 }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
