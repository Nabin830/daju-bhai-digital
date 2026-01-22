import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/components/Container'
import Button from '../ui/components/Button'
import Badge from '../ui/components/Badge'
import Price from '../ui/components/Price'
import TrustBar from '../ui/sections/TrustBar'
import DeliveryExplainer from '../ui/sections/DeliveryExplainer'
import { PRODUCTS } from '../data/products'
import { SUBSCRIPTIONS } from '../data/subscriptions'
import { SITE } from '../config/site'

export default function Home() {
  const featured = useMemo(() => PRODUCTS.slice(0, 6), [])

  return (
    <div>
      <section className="bg-gradient-to-b from-slate-50 to-white">
        <Container className="py-12 md:py-16">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge>Digital Publishing • Online Education</Badge>
              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 md:text-5xl">
                Premium Digital Books & Learning Subscriptions
              </h1>
              <p className="mt-4 text-base text-slate-600 md:text-lg">
                {SITE.name} sells <span className="font-semibold">digital PDF books</span>, guides, and subscription-based access to premium digital content. 
                All products are delivered instantly online—no physical shipping.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/shop">
                  <Button variant="primary">Browse Digital PDFs</Button>
                </Link>
                <Link to="/subscriptions">
                  <Button variant="secondary">View Subscription Plans</Button>
                </Link>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-600 shadow-soft">
                <div className="font-bold text-slate-900">Compliance-ready store</div>
                <ul className="mt-2 list-disc pl-5">
                  <li>Clear product descriptions (Digital PDF / ZIP)</li>
                  <li>Prices displayed in USD & NPR</li>
                  <li>Visible refund & delivery policies</li>
                  <li>Contact and business identity shown site-wide</li>
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="text-sm font-bold text-slate-900">Featured Digital PDFs</div>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {featured.map(p => (
                  <Link key={p.slug} to={`/product/${p.slug}`} className="group rounded-2xl border border-slate-200 bg-white p-4 hover:shadow-soft">
                    <img src={p.previewImage} alt={`${p.title} preview`} className="h-28 w-full rounded-xl object-cover" />
                    <div className="mt-3 text-sm font-bold text-slate-900 group-hover:underline">{p.title}</div>
                    <div className="mt-1 text-xs text-slate-600">Digital {p.fileType} • {p.language}</div>
                    <div className="mt-3">
                      <Price usd={p.priceUSD} npr={p.priceNPR} />
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-5 flex justify-end">
                <Link to="/shop" className="text-sm font-semibold text-slate-900 hover:underline">
                  View all products →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-black text-slate-900">Subscription plans</h2>
          <p className="mt-2 text-slate-600">Get ongoing access to premium content. Cancel anytime—no future charges.</p>

          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {SUBSCRIPTIONS.map(plan => (
              <div key={plan.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="text-sm font-bold text-slate-900">{plan.name}</div>
                <div className="mt-3 flex items-end justify-between">
                  <div>
                    <div className="text-xs text-slate-500">Monthly</div>
                    <div className="text-lg font-extrabold text-slate-900">
                      ${plan.monthlyPriceUSD.toFixed(2)} <span className="text-xs text-slate-500">(Rs {plan.monthlyPriceNPR})</span>
                    </div>
                  </div>
                  <Badge>{plan.accessLevel}</Badge>
                </div>

                <ul className="mt-4 list-disc pl-5 text-sm text-slate-600">
                  {plan.features.slice(0, 4).map(f => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link to="/subscriptions">
                    <Button variant="secondary" className="w-full">View details</Button>
                  </Link>
                </div>

                <div className="mt-3 text-xs text-slate-500">
                  Yearly: ${plan.yearlyPriceUSD.toFixed(2)} (Rs {plan.yearlyPriceNPR}) • Cancel anytime.
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <DeliveryExplainer />
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="text-2xl font-black text-slate-900">Trust & security</h2>
          <p className="mt-2 text-slate-600">
            We keep our business identity, policies, and digital delivery process clear—helping customers and payment providers understand exactly what we sell.
          </p>
          <div className="mt-6">
            <TrustBar />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/refund-policy"><Button variant="ghost">Refund Policy</Button></Link>
            <Link to="/delivery-policy"><Button variant="ghost">Delivery Policy</Button></Link>
            <Link to="/terms"><Button variant="ghost">Terms</Button></Link>
            <Link to="/privacy"><Button variant="ghost">Privacy</Button></Link>
          </div>
        </Container>
      </section>
    </div>
  )
}
