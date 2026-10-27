import {
  Bike, Bus, CircleHelp, Fuel, IndianRupee, MapPin, Receipt, Route as RouteIcon,
  TrendingDown, Truck, User, UserRound, Wrench,
} from 'lucide-react'
import {
  Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from 'recharts'
import {
  costAnalysis, costSummary, fleetStats, fuelPrices, fuelUsage, notAssigned, scheduleRoutes,
} from '../data/fleetDashboard'

const card = 'rounded-xl border border-[#DCDDDF] bg-white shadow-[0_4px_4px_rgba(51,51,51,0.15)]'
const miniCard = 'rounded-lg border border-[#DCDDDF] bg-white shadow-[0_2px_6px_rgba(51,51,51,0.15)]'

const icons = {
  truck: Truck, bus: Bus, bike: Bike, driver: UserRound, user: User,
  route: RouteIcon, fuel: Fuel, wrench: Wrench, receipt: Receipt,
}

const tones = {
  grey: 'bg-gray-200 text-gray-500',
  orange: 'bg-amber-100 text-amber-500',
  green: 'bg-green-100 text-green-600',
  blue: 'bg-blue-100 text-primary',
  purple: 'bg-purple-100 text-purple-600',
  sky: 'bg-sky-100 text-sky-600',
}

const toneText = { orange: 'text-amber-500', green: 'text-green-600', blue: 'text-primary' }

const costBars = [
  { key: 'maintenance', label: 'Maintenance', color: '#1976D2' },
  { key: 'fuel', label: 'Fuel', color: '#F5A00F' },
  { key: 'fastag', label: 'Fastag', color: '#1FA14A' },
]

const routeColumns = [
  { key: 'id', label: 'S.no' },
  { key: 'routeCode', label: 'Route code' },
  { key: 'route', label: 'Route' },
  { key: 'vehicle', label: 'Vehicle Reg no' },
  { key: 'driver', label: 'Driver' },
  { key: 'assistant', label: 'Assistant' },
]

function PanelTitle({ icon: Icon, children }) {
  return (
    <h2 className="mb-3 flex items-center gap-2 text-sm font-semibold text-ink">
      <Icon size={18} className="text-primary" />
      {children}
    </h2>
  )
}

function IconBadge({ icon, tone }) {
  const Icon = icons[icon]
  return (
    <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg ${tones[tone]}`}>
      <Icon size={18} />
    </span>
  )
}

function SummaryItem({ icon: Icon, iconClass = 'text-ink', label, value, valueClass = 'text-ink', note }) {
  return (
    <li className="flex gap-2 py-2">
      <Icon size={18} className={`mt-0.5 shrink-0 ${iconClass}`} />
      <div>
        <p className="text-xs text-ink">{label}</p>
        <p className={`text-[15px] font-bold ${valueClass}`}>{value}</p>
        {note && (
          <p className="mt-0.5 flex items-center gap-1 text-[10px] text-muted">
            <TrendingDown size={10} className="text-primary" />
            {note}
          </p>
        )}
      </div>
    </li>
  )
}

function CostTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  const values = Object.fromEntries(payload.map((p) => [p.dataKey, p.value]))
  return (
    <div className="rounded-md border border-[#DCDDDF] bg-white p-2 text-xs shadow-md">
      <p className="mb-1 font-semibold">{label}</p>
      {costBars.map((b) => (
        <p key={b.key} className="flex justify-between gap-4">
          <span>{b.label}</span>
          <span className="font-semibold" style={{ color: b.color }}>₹ {values[b.key] ?? 0}</span>
        </p>
      ))}
    </div>
  )
}

const RADIAN = Math.PI / 180

function renderOutsideLabel({ cx, cy, midAngle, outerRadius, value }) {
  const r = outerRadius + 14
  const x = cx + r * Math.cos(-midAngle * RADIAN)
  const y = cy + r * Math.sin(-midAngle * RADIAN)
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="central" fontSize={10} fill="#1F2937">
      {value}%
    </text>
  )
}

export default function FleetSummary() {
  // Draw order is reversed so the small slice sits top-right and the big one at the bottom, as in Figma
  const donutData = [...fuelUsage.slices].reverse()

  return (
    <div className="space-y-4 pb-4">
      <section aria-label="Fleet statistics" className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {fleetStats.map((s) => (
          <div key={s.id} className={`${card} flex items-center justify-between p-3`}>
            <div>
              <p className="text-xs text-ink">{s.label}</p>
              <p className="text-lg font-bold">{s.value}</p>
            </div>
            <IconBadge icon={s.icon} tone={s.tone} />
          </div>
        ))}
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className={`${card} p-4`}>
          <PanelTitle icon={CircleHelp}>Not Assigned</PanelTitle>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {notAssigned.map((n) => (
              <li key={n.id} className={`${miniCard} flex items-center gap-2 p-2`}>
                <IconBadge icon={n.icon} tone={n.tone} />
                <div>
                  <p className="text-[11px] text-ink">{n.label}</p>
                  <p className="text-sm font-bold">{n.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className={`${card} p-4`}>
          <PanelTitle icon={Fuel}>Today&rsquo;s Fuel Prices</PanelTitle>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {fuelPrices.map((f) => (
              <li key={f.id} className="flex items-center gap-3 rounded-lg bg-[#F3F4F6] p-3">
                <IconBadge icon="fuel" tone={f.tone} />
                <div>
                  <p className="text-xs text-ink">{f.name}</p>
                  <p className="text-sm font-bold">
                    {f.price} <span className="text-[11px] font-normal text-muted">{f.unit}</span>
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.6fr_1fr]">
        <section className={`${card} p-4`}>
          <PanelTitle icon={IndianRupee}>Cost Analysis</PanelTitle>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="h-[220px] min-w-0 flex-1" role="img" aria-label="Monthly cost analysis bar chart">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={costAnalysis} barGap={2} barCategoryGap="30%">
                  <CartesianGrid vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} fontSize={10} />
                  <YAxis domain={[0, 10000]} ticks={[0, 2500, 5000, 7500, 10000]} tickLine={false} axisLine={false} fontSize={10} width={40} />
                  <Tooltip content={<CostTooltip />} cursor={{ fill: '#E5E7EB', opacity: 0.6 }} />
                  {costBars.map((b) => (
                    <Bar key={b.key} dataKey={b.key} fill={b.color} barSize={6} radius={[2, 2, 0, 0]} />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>

            <ul className="divide-y divide-gray-200 sm:w-[180px]">
              <SummaryItem icon={IndianRupee} label="Total Cost" value={costSummary.total} valueClass="text-primary" note={costSummary.note} />
              {costSummary.items.map((i) => (
                <SummaryItem key={i.id} icon={icons[i.icon]} iconClass={toneText[i.tone]} label={i.label} value={i.value} />
              ))}
            </ul>
          </div>
        </section>

        <section className={`${card} p-4`}>
          <PanelTitle icon={Fuel}>Fuel Usage Summary</PanelTitle>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <div className="relative h-[200px] w-full min-w-0 sm:w-[190px]" role="img" aria-label="Fuel usage donut chart">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={donutData}
                    dataKey="value"
                    innerRadius="58%"
                    outerRadius="75%"
                    startAngle={20}
                    endAngle={380}
                    stroke="none"
                    label={renderOutsideLabel}
                    labelLine={false}
                  >
                    {donutData.map((s) => (
                      <Cell key={s.id} fill={s.color} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="text-[10px] text-muted">Total</span>
                <span className="text-[10px] text-muted">Fuel Consumed</span>
                <span className="text-sm font-bold">{fuelUsage.total}</span>
              </div>
            </div>

            <ul className="w-full divide-y divide-gray-200 sm:w-auto sm:flex-1">
              <SummaryItem icon={IndianRupee} label="Total Cost" value={costSummary.total} valueClass="text-primary" note={costSummary.note} />
              {fuelUsage.slices.map((s) => (
                <SummaryItem key={s.id} icon={Fuel} iconClass={toneText[s.tone]} label={s.name} value={s.detail} valueClass="text-[13px] text-ink" />
              ))}
            </ul>
          </div>
        </section>
      </div>

      <section className={`${card} p-4`}>
        <PanelTitle icon={MapPin}>Current Schedule Routes</PanelTitle>
        <div className="max-h-[260px] overflow-auto [scrollbar-color:#1976d2_transparent] [scrollbar-width:thin]">
          <table className="w-full min-w-[720px] border-collapse text-center text-sm">
            <caption className="sr-only">Current schedule routes</caption>
            <thead className="sticky top-0 bg-white">
              <tr>
                {routeColumns.map((c) => (
                  <th key={c.key} scope="col" className="border-b border-gray-300 px-3 py-3 font-semibold">
                    {c.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {scheduleRoutes.map((row) => (
                <tr key={row.id} className="border-b border-gray-200 last:border-0">
                  {routeColumns.map((c) => (
                    <td key={c.key} className="px-3 py-3 text-[13px]">{row[c.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  )
}