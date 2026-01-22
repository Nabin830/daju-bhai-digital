
export default function TrustBar() {
  const items = [
    { title: 'Instant digital delivery', desc: 'Download PDFs/ZIPs right after checkout — no shipping.' },
    { title: 'Clear policies', desc: 'Refund, delivery, privacy, and terms are transparent and easy to find.' },
    { title: 'Secure checkout UI', desc: 'Stripe and PayPal checkout experience simulated for demonstration.' }
  ]
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map(i => (
        <div key={i.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="text-sm font-bold text-slate-900">{i.title}</div>
          <div className="mt-1 text-sm text-slate-600">{i.desc}</div>
        </div>
      ))}
    </div>
  )
}
