import { Fuel } from 'lucide-react'

export default function FuelPriceTile({ name, price, color }) {
  return (
    <div className="flex flex-1 items-center gap-3 rounded-lg bg-[#F3F4F6] px-4 py-3">
      <Fuel size={20} style={{ color }} />
      <div className="min-w-0">
        <p className="text-xs text-gray-600">{name}</p>
        <p className="mt-0.5 whitespace-nowrap text-sm font-bold text-gray-900">
          {price} <span className="text-xs font-normal text-gray-500">/ Liter</span>
        </p>
      </div>
    </div>
  )
}
