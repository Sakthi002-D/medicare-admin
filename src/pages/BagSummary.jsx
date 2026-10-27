import { FileText } from 'lucide-react'
import Card from '../components/dashboard/Card'
import BagInventoryCard from '../components/dashboard/BagInventoryCard'
import OrderStatCard from '../components/dashboard/OrderStatCard'
import CollectedBagsTrendChart from '../components/dashboard/CollectedBagsTrendChart'
import IssuedVsCollectedChart from '../components/dashboard/IssuedVsCollectedChart'
import { bagInventory, orderStats } from '../data/bagDashboard'

export default function BagSummary() {
  return (
    <>
      <section
        aria-label="Bag inventory"
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
      >
        {bagInventory.map((bag) => (
          <BagInventoryCard key={bag.name} {...bag} />
        ))}
      </section>

      <section aria-label="Order summary" className="mt-4">
        <Card className="p-5">
          <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
            <FileText size={16} className="text-primary" />
            Order Summary
          </h2>

          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-7">
            {orderStats.map((stat) => (
              <OrderStatCard key={stat.label} {...stat} />
            ))}
          </div>
        </Card>
      </section>

      <section
        aria-label="Bag charts"
        className="mt-4 grid grid-cols-1 gap-4 xl:grid-cols-2"
      >
        <CollectedBagsTrendChart />
        <IssuedVsCollectedChart />
      </section>
    </>
  )
}
