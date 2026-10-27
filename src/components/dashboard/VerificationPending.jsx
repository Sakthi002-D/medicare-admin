import { CircleCheck, Maximize2 } from 'lucide-react'
import Card from './Card'
import { verificationPending } from '../../data/hospitalDashboard'

export default function VerificationPending() {
  return (
    <Card className="flex h-[300px] flex-col p-5">
      <div className="flex items-center justify-between">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-gray-800">
          <CircleCheck size={16} className="text-primary" />
          Verification Pending
        </h2>

        <button
          type="button"
          aria-label="Expand verification pending"
          className="text-gray-400 transition hover:text-primary"
        >
          <Maximize2 size={14} />
        </button>
      </div>

      <div className="mt-4 flex min-h-0 flex-1 flex-col justify-center gap-3">
        {verificationPending.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg bg-[#F3F4F6] px-4 py-3"
          >
            <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-[#7FB0E8] text-[#0D4C8F]">
              <Icon size={16} />
            </span>
            <span className="text-sm text-gray-700">{label}</span>
            <span className="ml-auto text-base font-bold text-gray-900">
              {value}
            </span>
          </div>
        ))}
      </div>
    </Card>
  )
}
