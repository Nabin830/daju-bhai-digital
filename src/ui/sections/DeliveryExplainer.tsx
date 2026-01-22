import Badge from '../components/Badge'

export default function DeliveryExplainer() {
  const steps = [
    { t: 'Choose a digital product', d: 'Every item is labeled as a Digital PDF or ZIP toolkit.' },
    { t: 'Pay securely (simulated UI)', d: 'Select Stripe (card) or PayPal at checkout.' },
    { t: 'Get instant access', d: 'After confirmation, downloads appear immediately on the Success page.' }
  ]
  return (
    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <div className="flex items-center gap-2">
        <Badge>Digital Delivery</Badge>
        <div className="text-sm font-bold text-slate-900">How delivery works</div>
      </div>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {steps.map((s, idx) => (
          <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <div className="text-xs font-black text-amber-500">STEP {idx + 1}</div>
            <div className="mt-1 text-sm font-bold text-slate-900">{s.t}</div>
            <div className="mt-1 text-sm text-slate-600">{s.d}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 text-xs text-slate-500">
        Note: This project uses local mock data only. No real payment API keys are used.
      </div>
    </div>
  )
}
