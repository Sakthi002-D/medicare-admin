export default function Card({ className = '', children }) {
  return (
    <div
      className={`rounded-xl border border-[#DCDDDF] bg-white shadow-[0_4px_4px_0_rgba(51,51,51,0.15)] ${className}`}
    >
      {children}
    </div>
  )
}
