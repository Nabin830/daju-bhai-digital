import { Link, NavLink } from 'react-router-dom'
import Container from '../components/Container'
import { SITE } from '../../config/site'
import { useCart } from '../../providers/CartProvider'
import { useCurrency } from '../../providers/CurrencyProvider'
import type { Currency } from '../../lib/currency'

function navClass({ isActive }: { isActive: boolean }) {
  return isActive
    ? 'text-slate-900 font-semibold'
    : 'text-slate-600 hover:text-slate-900'
}

export default function SiteHeader() {
  const { items } = useCart()
  const { currency, setCurrency } = useCurrency()

  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/90 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-slate-900 text-white text-xs font-black">
              DBD
            </div>
            <div className="leading-tight">
              <div className="text-sm font-extrabold tracking-wide text-slate-900">{SITE.name}</div>
              <div className="text-xs text-slate-500">Digital PDF Books & Subscriptions</div>
            </div>
          </Link>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <NavLink to="/shop" className={navClass}>
            Shop
          </NavLink>
          <NavLink to="/subscriptions" className={navClass}>
            Subscriptions
          </NavLink>
          <NavLink to="/about" className={navClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navClass}>
            Contact
          </NavLink>
        </nav>

        <div className="flex items-center gap-3">
          <label className="hidden sm:flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm">
            <span className="text-slate-500">Currency</span>
            <select
              className="bg-transparent outline-none"
              value={currency}
              onChange={e => setCurrency(e.target.value as Currency)}
              aria-label="Currency selector"
            >
              <option value="USD">USD ($)</option>
              <option value="NPR">NPR (Rs)</option>
            </select>
          </label>

          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50"
            aria-label="Cart"
          >
            <span>Cart</span>
            <span className="grid h-6 min-w-6 place-items-center rounded-lg bg-amber-400 px-2 text-xs font-black text-slate-900">
              {items.reduce((a, b) => a + b.qty, 0)}
            </span>
          </Link>
        </div>
      </Container>

      <div className="border-t border-slate-100 bg-slate-50">
        <Container className="flex flex-col gap-2 py-2 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <span className="font-semibold text-slate-800">{SITE.name}</span> sells <span className="font-semibold">digital PDFs</span> and{' '}
            <span className="font-semibold">digital subscriptions</span>. Instant online delivery. No physical shipping.
          </div>
          <div className="text-slate-500">{SITE.domain}</div>
        </Container>
      </div>
    </header>
  )
}
