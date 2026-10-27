import Card from './Card'

const tints = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  orange: 'bg-orange-50 text-orange-500',
  red: 'bg-red-50 text-red-500',
  yellow: 'bg-yellow-50 text-yellow-500',
  grey: 'bg-gray-100 text-gray-600',
  purple: 'bg-purple-50 text-purple-600',
  sky: 'bg-sky-50 text-sky-500',
}

export default function StatCard({ label, value, icon: Icon, tint }) {
  return (
    <Card className="flex items-center justify-between gap-3 p-4">
      <div className="min-w-0">
        <p className="text-xs font-medium text-gray-600">{label}</p>
        <p className="mt-2 text-lg font-bold text-gray-900">{value}</p>
      </div>

      <span
        className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-lg ${tints[tint]}`}
      >
        <Icon size={20} />
      </span>
    </Card>
  )
}
