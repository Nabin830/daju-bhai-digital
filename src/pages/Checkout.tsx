import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../ui/components/Container'
import Input from '../ui/components/Input'
import Select from '../ui/components/Select'
import Button from '../ui/components/Button'
import Badge from '../ui/components/Badge'
import { useCart } from '../providers/CartProvider'
import { useCurrency } from '../providers/CurrencyProvider'
import type { Currency } from '../lib/currency'
import { formatMoney } from '../lib/currency'
import { makeOrderId } from '../lib/ids'

type PaymentMethod = 'stripe' | 'paypal'

const countryOptions = [
  { value: 'US', label: 'United States' },
  { value: 'NP', label: 'Nepal' },
  { value: 'AU', label: 'Australia' },
  { value: 'IN', label: 'India' },
  { value: 'GB', label: 'United Kingdom' },
  { value: 'CA', label: 'Canada' },
  { value: 'OTHER', label: 'Other' }
]

export default function Checkout() {
  const { items, clear } = useCart()
  const { currency, setCurrency } = useCurrency()
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('US')
  const [method, setMethod] = useState<PaymentMethod>('stripe')

  // Stripe mock
  const [cardNumber, setCardNumber] = useState('')
  const [exp, setExp] = useState('')
  const [cvc, setCvc] = useState('')
  const [name, setName] = useState('')

  const totals = useMemo(() => {
    const usd = items.reduce((sum, x) => sum + x.product.priceUSD * x.qty, 0)
    const npr = items.reduce((sum, x) => sum + x.product.priceNPR * x.qty, 0)
    return { usd, npr }
  }, [items])

  const primaryTotal = currency === 'USD' ? formatMoney(totals.usd, 'USD') : formatMoney(totals.npr, 'NPR')
  const secondaryTotal = currency === 'USD' ? formatMoney(totals.npr, 'NPR') : formatMoney(totals.usd, 'USD')

  const canPay = items.length > 0 && email.includes('@') && email.includes('.') && (method !== 'stripe' || (cardNumber.length >= 12 && exp.length >= 4 && cvc.length >= 3 && name.trim().length >= 2))

  const submit = () => {
    if (!canPay) return
    const id = makeOrderId()
    // Store a minimal mock receipt in session storage for Success page
    const payload = {
      orderId: id,
      email,
      country,
      currency,
      totals,
      paymentMethod: method,
      items: items.map(x => ({ slug: x.product.slug, title: x.product.title, qty: x.qty, fileType: x.product.fileType }))
    }
    sessionStorage.setItem('dbd_last_order', JSON.stringify(payload))
    clear()
    navigate('/success')
  }

  if (items.length === 0) {
    return (
      <Container className="py-12">
        <h1 className="text-2xl font-black text-slate-900">Checkout</h1>
        <p className="mt-2 text-slate-600">Your cart is empty. Add digital products before checking out.</p>
        <div className="mt-5">
          <Link to="/shop">
            <Button variant="primary">Go to shop</Button>
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <h1 className="text-3xl font-black text-slate-900">Checkout</h1>
        <p className="mt-2 text-slate-600">
          This checkout is a <span className="font-semibold">UI simulation</span> (no real payments). Your purchase is for digital products only.
        </p>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center justify-between">
                <div className="text-sm font-bold text-slate-900">Customer details</div>
                <Badge>Business: DAJU BHAI DIGITAL</Badge>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <Input label="Email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
                <Select label="Billing country" value={country} onChange={e => setCountry(e.target.value)} options={countryOptions} />
              </div>

              <div className="mt-4">
                <Select
                  label="Currency"
                  value={currency}
                  onChange={e => setCurrency(e.target.value as Currency)}
                  options={[
                    { value: 'USD', label: 'USD ($)' },
                    { value: 'NPR', label: 'NPR (Rs)' }
                  ]}
                  hint="Prices are shown in both currencies for clarity."
                />
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
                <div className="font-bold">Digital delivery notice</div>
                <div className="mt-1">This is a digital product. No physical shipping.</div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-bold text-slate-900">Payment method (UI simulation)</div>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold ${method === 'stripe' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
                  onClick={() => setMethod('stripe')}
                >
                  Stripe (Card)
                </button>
                <button
                  className={`rounded-xl border px-4 py-2 text-sm font-semibold ${method === 'paypal' ? 'border-slate-900 bg-slate-900 text-white' : 'border-slate-200 bg-white text-slate-900'}`}
                  onClick={() => setMethod('paypal')}
                >
                  PayPal
                </button>
              </div>

              {method === 'stripe' ? (
                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  <Input label="Name on card" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
                  <Input label="Card number" value={cardNumber} onChange={e => setCardNumber(e.target.value)} placeholder="4242 4242 4242 4242" />
                  <Input label="Expiry" value={exp} onChange={e => setExp(e.target.value)} placeholder="MM/YY" />
                  <Input label="CVC" value={cvc} onChange={e => setCvc(e.target.value)} placeholder="123" />
                  <div className="md:col-span-2 text-xs text-slate-500">
                    This is a mock card form. Do not enter real card details.
                  </div>
                </div>
              ) : (
                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                  <div className="font-bold">PayPal checkout  </div>
                  <div className="mt-1">In a real integration, you would be redirected to PayPal to complete payment securely.</div>
                  <div className="mt-2 text-xs text-slate-500">No real PayPal API keys are used in this demo.</div>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <Button variant="primary" onClick={submit} disabled={!canPay}>
                  Confirm order  
                </Button>
                <Link to="/cart">
                  <Button variant="ghost">Back to cart</Button>
                </Link>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                By confirming, you agree to our <Link className="font-semibold text-slate-900 underline" to="/terms">Terms</Link> and{' '}
                <Link className="font-semibold text-slate-900 underline" to="/privacy">Privacy Policy</Link>.
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <div className="text-sm font-bold text-slate-900">Order summary</div>
            <div className="mt-4 space-y-3">
              {items.map(x => (
                <div key={x.product.slug} className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-slate-900">{x.product.title}</div>
                    <div className="text-xs text-slate-500">Digital {x.product.fileType} • Qty {x.qty}</div>
                  </div>
                  <div className="text-right text-sm font-bold text-slate-900">
                    {currency === 'USD'
                      ? formatMoney(x.product.priceUSD * x.qty, 'USD')
                      : formatMoney(x.product.priceNPR * x.qty, 'NPR')}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 border-t border-slate-100 pt-4">
              <div className="flex items-start justify-between">
                <div className="text-sm text-slate-600">Total</div>
                <div className="text-right">
                  <div className="text-lg font-black text-slate-900">{primaryTotal}</div>
                  <div className="text-xs text-slate-500">({secondaryTotal})</div>
                </div>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600">
              <div className="font-bold text-slate-900">Refund note</div>
              Digital products are non-refundable once downloaded. Refunds are only considered if a file is defective or inaccessible.
              See the <Link className="font-semibold text-slate-900 underline" to="/refund-policy">Refund Policy</Link>.
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
