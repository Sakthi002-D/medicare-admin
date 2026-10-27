import { PieChart as PieChartIcon } from 'lucide-react'
import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import Card from './Card'
import { agreementStatus } from '../../data/hospitalDashboard'

// Figma slice placement: orange top right, red left, green across the bottom.
const pieData = ['In Progress', 'Active', 'Expired'].map((name) =>
  agreementStatus.find((status) => status.name === name),
)

function renderOutsideLabel({ x, y, textAnchor, value }) {
  return (
    <text
      x={x}
      y={y}
      textAnchor={textAnchor}
      dominantBaseline="central"
      fill="#374151"
      fontSize={12}
      fontWeight={600}
    >
      {value}%
    </text>
  )
}

export default function AgreementStatusChart() {
  return (
    <Card className="flex h-[300px] flex-col p-5">
      <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
        <PieChartIcon size={16} className="text-primary" />
        Agreement Status
      </h2>

      <div className="flex min-h-0 flex-1 items-center gap-3">
        <div className="h-full min-w-0 flex-1">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart margin={{ top: 14, right: 20, bottom: 14, left: 20 }}>
              <Pie
                data={pieData}
                dataKey="percent"
                nameKey="name"
                innerRadius="50%"
                outerRadius="75%"
                startAngle={90}
                endAngle={-270}
                label={renderOutsideLabel}
                labelLine={{ stroke: '#9CA3AF', strokeWidth: 1 }}
              >
                {pieData.map((entry) => (
                  <Cell key={entry.name} fill={entry.color} stroke="none" />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="w-[142px] space-y-3 text-xs text-gray-600">
          {agreementStatus.map(({ name, count, color }) => (
            <li key={name} className="flex items-center gap-2 whitespace-nowrap">
              <span
                className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                style={{ background: color }}
              />
              <span className="flex-1">{name} -</span>
              <span className="font-bold text-gray-900">{count}</span>
            </li>
          ))}
        </ul>
      </div>
    </Card>
  )
}
