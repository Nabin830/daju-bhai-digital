import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/components/Container'
import Button from '../ui/components/Button'
import Input from '../ui/components/Input'
import Badge from '../ui/components/Badge'
import { useCart } from '../providers/CartProvider'
import { useCurrency } from '../providers/CurrencyProvider'
import { formatMoney } from '../lib/currency'

export default function Cart() {
  const { items, remove, setQty, clear } = useCart()
  const { currency } = useCurrency()

  const totals = useMemo(() => {
    const usd = items.reduce((sum, x) => sum + x.product.priceUSD * x.qty, 0)
    const npr = items.reduce((sum, x) => sum + x.product.priceNPR * x.qty, 0)
    return { usd, npr }
  }, [items])

  const primaryTotal = currency === 'USD' ? formatMoney(totals.usd, 'USD') : formatMoney(totals.npr, 'NPR')
  const secondaryTotal = currency === 'USD' ? formatMoney(totals.npr, 'NPR') : formatMoney(totals.usd, 'USD')

  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Cart</h1>
            <p className="mt-2 text-slate-600">
              Your cart contains digital products only. Downloads are provided instantly after checkout.
            </p>
          </div>
          {items.length ? (
            <button className="text-sm font-semibold text-rose-600 hover:underline" onClick={clear}>
              Clear cart
            </button>
          ) : null}
        </div>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
            <div className="text-lg font-bold text-slate-900">Your cart is empty.</div>
            <p className="mt-2 text-slate-600">Browse the shop to add digital PDF books and toolkits.</p>
            <div className="mt-5">
              <Link to="/shop">
                <Button variant="primary">Go to shop</Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="grid gap-4">
                {items.map(({ product, qty }) => (
                  <div key={product.slug} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                    <div className="flex gap-4">
                      <img src={product.previewImage} alt={`${product.title} preview`} className="h-24 w-36 rounded-2xl object-cover border border-slate-200" />
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge>Digital {product.fileType}</Badge>
                          <Badge className="bg-slate-50">{product.category}</Badge>
                        </div>
                        <div className="mt-2 text-lg font-extrabold text-slate-900">{product.title}</div>
                        <div className="mt-1 text-sm text-slate-600">{product.language} • License: {product.licenseType}</div>

                        <div className="mt-4 grid gap-3 sm:grid-cols-3 sm:items-end">
                          <Input
                            label="Quantity"
                            type="number"
                            min={1}
                            max={99}
                            value={qty}
                            onChange={e => setQty(product.slug, Number(e.target.value))}
                          />
                          <div className="sm:col-span-2 flex items-end justify-between gap-4">
                            <div className="text-sm">
                              <div className="text-xs text-slate-500">Line total</div>
                              <div className="text-lg font-black text-slate-900">
                                {currency === 'USD'
                                  ? formatMoney(product.priceUSD * qty, 'USD')
                                  : formatMoney(product.priceNPR * qty, 'NPR')}
                              </div>
                              <div className="text-xs text-slate-500">
                                ({currency === 'USD'
                                  ? formatMoney(product.priceNPR * qty, 'NPR')
                                  : formatMoney(product.priceUSD * qty, 'USD')})
                              </div>
                            </div>
                            <button className="text-sm font-semibold text-rose-600 hover:underline" onClick={() => remove(product.slug)}>
                              Remove
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-bold text-slate-900">Order summary</div>
              <div className="mt-4 flex items-start justify-between">
                <div className="text-sm text-slate-600">Subtotal</div>
                <div className="text-right">
                  <div className="text-lg font-black text-slate-900">{primaryTotal}</div>
                  <div className="text-xs text-slate-500">({secondaryTotal})</div>
                </div>
              </div>

              <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
                <div className="font-bold">Digital delivery notice</div>
                <div className="mt-1">This is a digital product. No physical shipping.</div>
              </div>

              <div className="mt-6">
                <Link to="/checkout">
                  <Button variant="primary" className="w-full">Proceed to checkout</Button>
                </Link>
                <Link to="/shop" className="mt-3 block">
                  <Button variant="ghost" className="w-full">Continue shopping</Button>
                </Link>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Review our <Link to="/refund-policy" className="font-semibold text-slate-900 underline">Refund Policy</Link> before purchasing.
              </div>
            </div>
          </div>
        )}
      </Container>
    </div>
  )
}
