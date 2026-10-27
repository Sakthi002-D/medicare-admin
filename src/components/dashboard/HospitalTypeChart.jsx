import { PieChart as PieChartIcon } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import Card from './Card'
import { hospitalTypes } from '../../data/hospitalDashboard'

const RADIAN = Math.PI / 180

function renderSliceLabel({ cx, cy, midAngle, innerRadius, outerRadius, value }) {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.55
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="#fff"
      fontSize={12}
      fontWeight={600}
      textAnchor="middle"
      dominantBaseline="central"
    >
      {value}%
    </text>
  )
}

function TypeTooltip({ active, payload }) {
  if (!active || !payload?.length) {
    return null
  }

  const { name, count } = payload[0].payload

  return (
    <div className="rounded-lg bg-[#1F2937] px-3 py-2 text-xs text-white shadow-lg">
      <p className="font-semibold">{name}</p>
      <p className="mt-0.5">{count.toLocaleString('en-IN')}</p>
    </div>
  )
}

const legendRows = [
  ['OP-Full Time', 'Bedded Hospital', 'Dental'],
  ['OP-Half Time', 'Labs & Diagnostic Centers'],
]

export default function HospitalTypeChart() {
  return (
    <Card className="flex h-[300px] flex-col p-5">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
        <PieChartIcon size={16} className="text-primary" />
        Hospital Type
      </h2>

      <div className="min-h-0 flex-1">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={hospitalTypes}
              dataKey="percent"
              nameKey="name"
              outerRadius="85%"
              startAngle={90}
              endAngle={-270}
              label={renderSliceLabel}
              labelLine={false}
            >
              {hospitalTypes.map((entry) => (
                <Cell key={entry.name} fill={entry.color} stroke="none" />
              ))}
            </Pie>
            <Tooltip content={<TypeTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-1.5 text-xs text-gray-600">
        {legendRows.map((row) => (
          <ul key={row[0]} className="flex justify-center gap-x-4">
            {row.map((name) => (
              <li key={name} className="flex items-center gap-1.5 whitespace-nowrap">
                <span
                  className="h-2 w-2 flex-shrink-0 rounded-full"
                  style={{
                    background: hospitalTypes.find((type) => type.name === name)
                      .color,
                  }}
                />
                {name}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </Card>
  )
}
