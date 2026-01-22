import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/components/Container'
import Button from '../ui/components/Button'
import Badge from '../ui/components/Badge'
import { SITE } from '../config/site'

type OrderPayload = {
  orderId: string
  email: string
  country: string
  currency: 'USD' | 'NPR'
  totals: { usd: number; npr: number }
  paymentMethod: 'stripe' | 'paypal'
  items: Array<{ slug: string; title: string; qty: number; fileType: string }>
}

export default function Success() {
  const order = useMemo(() => {
    const raw = sessionStorage.getItem('dbd_last_order')
    if (!raw) return null
    try {
      return JSON.parse(raw) as OrderPayload
    } catch {
      return null
    }
  }, [])

  return (
    <Container className="py-12">
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Order confirmed</h1>
            <p className="mt-2 text-slate-600">
              Thank you for your purchase from <span className="font-semibold">{SITE.name}</span>.
            </p>
          </div>
          <Badge>Digital delivery</Badge>
        </div>

        {order ? (
          <div className="mt-6 space-y-4">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="text-xs font-bold text-slate-900">Order ID</div>
              <div className="mt-1 text-lg font-black text-slate-900">{order.orderId}</div>
              <div className="mt-1 text-sm text-slate-600">Email: {order.email}</div>
              <div className="text-sm text-slate-600">Payment method  : {order.paymentMethod === 'stripe' ? 'Stripe (Card)' : 'PayPal'}</div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
              <div className="font-bold">Download available instantly</div>
              <div className="mt-1">
                In a real system, download links would be shown here or emailed. For this demo, the message confirms instant digital delivery.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <div className="text-sm font-bold text-slate-900">Items</div>
              <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                {order.items.map(i => (
                  <li key={i.slug}>
                    {i.title} — Qty {i.qty} — Digital {i.fileType}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
              <div className="font-bold">Subscription access (if purchased)</div>
              <div className="mt-1">
                If your order included a subscription, access would activate immediately and remain active until the end of your billing period.
                You can cancel anytime to stop future charges.
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
            No recent order found in this browser session. (This page reads a mock order from sessionStorage.)
          </div>
        )}

        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/shop"><Button variant="primary">Continue shopping</Button></Link>
          <Link to="/subscriptions"><Button variant="secondary">View subscriptions</Button></Link>
          <Link to="/contact"><Button variant="ghost">Contact support</Button></Link>
        </div>

        <div className="mt-6 text-xs text-slate-500">
          Need help? Email <a className="font-semibold text-slate-900 underline" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
        </div>
      </div>
    </Container>
  )
}
