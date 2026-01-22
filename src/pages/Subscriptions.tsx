import React, { useState } from 'react'
import Container from '../ui/components/Container'
import Button from '../ui/components/Button'
import Badge from '../ui/components/Badge'
import { SUBSCRIPTIONS } from '../data/subscriptions'
import { useCurrency } from '../providers/CurrencyProvider'
import { formatMoney } from '../lib/currency'

type Billing = 'monthly' | 'yearly'

export default function Subscriptions() {
  const [billing, setBilling] = useState<Billing>('monthly')
  const { currency } = useCurrency()

  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <h1 className="text-3xl font-black text-slate-900">Subscriptions</h1>
        <p className="mt-2 text-slate-600">
          Subscription access to premium digital content. Cancel anytime—no future charges after cancellation.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <button
            className={`rounded-xl border px-4 py-2 text-sm font-semibold ${billing === 'monthly' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
            onClick={() => setBilling('monthly')}
          >
            Monthly billing
          </button>
          <button
            className={`rounded-xl border px-4 py-2 text-sm font-semibold ${billing === 'yearly' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
            onClick={() => setBilling('yearly')}
          >
            Yearly billing
          </button>
          <Badge>Prices shown in USD & NPR</Badge>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {SUBSCRIPTIONS.map(p => {
            const usd = billing === 'monthly' ? p.monthlyPriceUSD : p.yearlyPriceUSD
            const npr = billing === 'monthly' ? p.monthlyPriceNPR : p.yearlyPriceNPR
            const primary = currency === 'USD' ? formatMoney(usd, 'USD') : formatMoney(npr, 'NPR')
            const secondary = currency === 'USD' ? formatMoney(npr, 'NPR') : formatMoney(usd, 'USD')
            return (
              <div key={p.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-bold text-slate-900">{p.name}</div>
                  <Badge className="bg-slate-50">{p.accessLevel}</Badge>
                </div>

                <div className="mt-4">
                  <div className="text-3xl font-black text-slate-900">{primary}</div>
                  <div className="text-sm text-slate-500">({secondary}) • {billing === 'monthly' ? 'per month' : 'per year'}</div>
                </div>

                <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
                  {p.features.map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    variant="secondary"
                    className="w-full"
                    onClick={() => {
                      // mock selection only
                      alert(`Selected plan: ${p.name} (${billing}). Proceed to checkout from Cart for product purchases. This is a mock UI.`)
                    }}
                  >
                    Choose plan  
                  </Button>
                </div>

                <div className="mt-3 text-xs text-slate-500">
                  Cancel anytime. Access remains until the end of the paid billing period. No future charges after cancellation.
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-6 text-sm text-slate-600 shadow-soft">
          <div className="font-bold text-slate-900">Subscription compliance notes</div>
          <ul className="mt-2 list-disc pl-5">
            <li>Subscriptions are for access to digital content only.</li>
            <li>No physical goods. No cash-out. No gambling or restricted content.</li>
            <li>See <a href="/subscription-terms" className="font-semibold text-slate-900 underline">Subscription Terms</a> for details.</li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
