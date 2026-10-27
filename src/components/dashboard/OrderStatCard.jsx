const tints = {
  grey: 'bg-gray-100 text-gray-600',
  orange: 'bg-orange-50 text-orange-500',
  blue: 'bg-blue-50 text-blue-600',
  purple: 'bg-purple-50 text-purple-600',
  green: 'bg-green-50 text-green-600',
  red: 'bg-red-50 text-red-500',
  sky: 'bg-sky-50 text-sky-500',
}

export default function OrderStatCard({ label, value, icon: Icon, tint }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-[0_2px_6px_rgba(51,51,51,0.12)]">
      <span
        className={`grid h-9 w-9 flex-shrink-0 place-items-center rounded-lg ${tints[tint]}`}
      >
        <Icon size={16} />
      </span>

      <div className="min-w-0">
        <p className="truncate text-xs text-gray-600">{label}</p>
        <p className="mt-0.5 text-sm font-bold text-gray-900">{value}</p>
      </div>
    </div>
  )
}
