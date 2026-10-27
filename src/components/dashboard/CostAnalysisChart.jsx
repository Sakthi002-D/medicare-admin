import { BadgeIndianRupee } from 'lucide-react'
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
import CostSummaryList from './CostSummaryList'
import { costAnalysis, costSeries } from '../../data/fleetDashboard'

const tooltipOrder = ['fuel', 'maintenance', 'fastag']

function CostTooltip({ active, payload, label }) {
  if (!active || !payload?.length) {
    return null
  }

  const rows = tooltipOrder
    .map((key) => payload.find((item) => item.dataKey === key))
    .filter((item) => item?.value != null)

  if (!rows.length) {
    return null
  }

  return (
    <div className="rounded-lg bg-white px-3 py-2 text-xs shadow-[0_4px_12px_rgba(51,51,51,0.25)]">
      <p className="font-bold text-gray-900">{label}</p>
      {rows.map((item) => (
        <p key={item.dataKey} className="mt-1 text-gray-600">
          {item.name} :{' '}
          <span className="font-bold" style={{ color: item.fill }}>
            ₹ {item.value.toLocaleString('en-IN')}
          </span>
        </p>
      ))}
    </div>
  )
}

export default function CostAnalysisChart() {
  return (
    <Card className="flex h-full min-h-[380px] flex-col p-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <BadgeIndianRupee size={16} className="text-primary" />
          Cost Analysis
        </h2>

        <ul className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
          {costSeries.map(({ key, name, color }) => (
            <li key={key} className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-sm" style={{ background: color }} />
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4 grid min-h-0 flex-1 grid-cols-1 gap-4 lg:grid-cols-[1.6fr_1fr]">
        <div className="min-h-[260px] min-w-0">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={costAnalysis}
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
                content={<CostTooltip />}
                cursor={{ fill: '#E5E7EB', opacity: 0.6 }}
              />
              {costSeries.map(({ key, name, color }) => (
                <Bar
                  key={key}
                  dataKey={key}
                  name={name}
                  fill={color}
                  barSize={6}
                  radius={[2, 2, 0, 0]}
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        </div>

        <CostSummaryList />
      </div>
    </Card>
  )
}
