import { IndianRupee, TrendingDown } from 'lucide-react'
import { costSummary } from '../../data/fleetDashboard'

export default function CostSummaryList() {
  return (
    <ul className="divide-y divide-gray-200 text-sm">
      <li className="flex items-start gap-3 py-3 first:pt-0">
        <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg bg-blue-50 text-primary">
          <IndianRupee size={15} />
        </span>
        <div className="min-w-0">
          <p className="text-xs text-gray-600">Total Cost</p>
          <p className="mt-0.5 text-base font-bold text-primary">
            {costSummary.total}
          </p>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-gray-400">
            <TrendingDown size={12} className="text-green-600" />
            {costSummary.change}
          </p>
        </div>
      </li>

      {costSummary.items.map(({ label, value, icon: Icon, color }) => (
        <li key={label} className="flex items-center gap-3 py-3 last:pb-0">
          <span
            className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg"
            style={{ background: `${color}1A`, color }}
          >
            <Icon size={15} />
          </span>
          <div className="min-w-0">
            <p className="text-xs text-gray-600">{label}</p>
            <p className="mt-0.5 text-sm font-bold text-gray-900">{value}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}
