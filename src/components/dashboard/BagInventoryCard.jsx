import { ShoppingBag, TriangleAlert } from 'lucide-react'
import Card from './Card'
import { bagSizes, bagTotalInventory } from '../../data/bagDashboard'

export default function BagInventoryCard({ name, color, tint, lowStock }) {
  return (
    <Card className="p-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <span
            className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-lg"
            style={{ background: tint, color }}
          >
            <ShoppingBag size={16} />
          </span>
          {name}
        </h3>

        {lowStock && (
          <span className="flex items-center gap-1 text-xs font-medium text-[#E02424]">
            <TriangleAlert size={13} />
            Low Stock
          </span>
        )}
      </div>

      <div className="mt-3 flex items-center justify-between gap-2 text-xs">
        <span className="text-gray-600">Total Inventory</span>
        <span className="text-sm font-bold text-primary">{bagTotalInventory}</span>
      </div>

      <div className="mt-3 rounded-lg bg-[#F3F4F6] px-3 py-1">
        <table className="w-full text-xs">
          <caption className="sr-only">{name} bag inventory by size</caption>
          <tbody>
            {bagSizes.map(({ size, value }, index) => (
              <tr
                key={size}
                className={index > 0 ? 'border-t border-gray-200' : undefined}
              >
                <td className="py-1.5 text-gray-600">{size}</td>
                <td className="py-1.5 text-center text-gray-400">-</td>
                <td className="py-1.5 text-right font-bold text-gray-900">
                  {value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  )
}
