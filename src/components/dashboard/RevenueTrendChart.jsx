import { TrendingUp } from 'lucide-react'
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
import { revenueTotals, revenueTrend } from '../../data/hospitalDashboard'

function RevenueTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  const thisYear = payload.find((item) => item.dataKey === 'thisYear')
  const lastYear = payload.find((item) => item.dataKey === 'lastYear')

  return (
    <div className="rounded-lg bg-white px-3 py-2 text-xs shadow-[0_4px_12px_rgba(51,51,51,0.25)]">
      <p className="font-bold text-gray-900">{label}</p>
      <p className="mt-1 text-gray-600">
        This Year :{' '}
        <span className="font-bold text-primary">
          ₹ {thisYear?.value.toLocaleString('en-IN')}
        </span>
      </p>
      <p className="text-gray-600">
        Last Year :{' '}
        <span className="font-bold text-[#9E9E9E]">
          ₹ {lastYear?.value.toLocaleString('en-IN')}
        </span>
      </p>
    </div>
  )
}

export default function RevenueTrendChart() {
  return (
    <Card className="flex h-[460px] flex-col p-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <TrendingUp size={16} className="text-primary" />
            Revenue Trend
          </h2>
          <p className="mt-1 text-xs text-gray-400">
            Monthly comparison (This Year vs Last Year)
          </p>
        </div>

        <div className="flex items-center gap-5 text-xs text-gray-600">
          <span className="flex items-center gap-2">
            <span className="h-1 w-5 rounded-full bg-[#1976D2]" />
            This Year
          </span>
          <span className="flex items-center gap-2">
            <span className="h-1 w-5 rounded-full bg-[#9E9E9E]" />
            Last Year
          </span>
        </div>

        <div className="text-right text-xs text-gray-600">
          <p className="font-semibold text-gray-800">Total</p>
          <p className="mt-1">
            This Year - <span className="font-bold text-gray-900">{revenueTotals.thisYear}</span>
          </p>
          <p>
            Last Year - <span className="font-bold text-gray-900">{revenueTotals.lastYear}</span>
          </p>
        </div>
      </div>

      <div className="mt-4 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={revenueTrend} margin={{ top: 10, right: 10, left: -14, bottom: 0 }}>
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
              content={<RevenueTooltip />}
              cursor={{ stroke: '#9CA3AF', strokeWidth: 1 }}
            />
            <Line
              type="linear"
              dataKey="thisYear"
              stroke="#1976D2"
              strokeWidth={1}
              dot={{ r: 3.5, fill: '#fff', stroke: '#1976D2', strokeWidth: 1.5 }}
              activeDot={{ r: 4.5 }}
            />
            <Line
              type="linear"
              dataKey="lastYear"
              stroke="#9E9E9E"
              strokeWidth={1}
              dot={{ r: 3.5, fill: '#fff', stroke: '#9E9E9E', strokeWidth: 1.5 }}
              activeDot={{ r: 4.5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
