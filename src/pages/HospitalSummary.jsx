import StatCard from '../components/dashboard/StatCard'
import AgreementStatusChart from '../components/dashboard/AgreementStatusChart'
import VerificationPending from '../components/dashboard/VerificationPending'
import HospitalTypeChart from '../components/dashboard/HospitalTypeChart'
import RevenueTrendChart from '../components/dashboard/RevenueTrendChart'
import { statCards } from '../data/hospitalDashboard'

export default function HospitalSummary() {
  return (
    <>
      <section
        aria-label="Hospital statistics"
        className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        {statCards.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </section>

      <section
        aria-label="Status overview"
        className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3"
      >
        <AgreementStatusChart />
        <VerificationPending />
        <div className="md:col-span-2 xl:col-span-1">
          <HospitalTypeChart />
        </div>
      </section>

      <section aria-label="Revenue trend" className="mt-4">
        <RevenueTrendChart />
      </section>
    </>
  )
}
