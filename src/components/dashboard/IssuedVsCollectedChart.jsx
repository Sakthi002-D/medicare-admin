import { ChartColumn } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import Card from './Card'
import { issuedVsCollected } from '../../data/bagDashboard'

function BarsTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  const issued = payload.find((item) => item.dataKey === 'issued')
  const collected = payload.find((item) => item.dataKey === 'collected')

  if (issued?.value == null && collected?.value == null) {
    return null
  }

  return (
    <div className="rounded-lg bg-white px-3 py-2 text-xs shadow-[0_4px_12px_rgba(51,51,51,0.25)]">
      <p className="font-bold text-gray-900">{label}</p>
      <p className="mt-1 text-gray-600">
        Issued :{' '}
        <span className="font-bold text-[#1976D2]">
          {issued?.value?.toLocaleString('en-IN')}
        </span>
      </p>
      <p className="text-gray-600">
        Collected :{' '}
        <span className="font-bold text-[#1FA14A]">
          {collected?.value?.toLocaleString('en-IN')}
        </span>
      </p>
    </div>
  )
}

export default function IssuedVsCollectedChart() {
  return (
    <Card className="flex h-[380px] flex-col p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <ChartColumn size={16} className="text-primary" />
          Issued Bags vs Collected Bags
        </h2>

        <ul className="flex items-center gap-4 text-xs text-gray-600">
          <li className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#1976D2]" />
            Issued
          </li>
          <li className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#1FA14A]" />
            Collected
          </li>
        </ul>
      </div>

      <div className="mt-4 min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={issuedVsCollected}
            barGap={2}
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
              content={<BarsTooltip />}
              cursor={{ fill: '#E5E7EB', opacity: 0.6 }}
            />
            <Bar dataKey="issued" name="Issued" fill="#1976D2" barSize={6} radius={[2, 2, 0, 0]} />
            <Bar dataKey="collected" name="Collected" fill="#1FA14A" barSize={6} radius={[2, 2, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
