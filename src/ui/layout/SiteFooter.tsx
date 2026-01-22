import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../components/Container'
import { SITE } from '../../config/site'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-extrabold text-slate-900">{SITE.name}</div>
            <div className="mt-2 text-sm text-slate-600">
              Digital publishing for practical learning. We deliver PDF books, guides, and subscription access to premium digital content.
            </div>
            <div className="mt-4 text-sm text-slate-600">
              Support: <a className="font-semibold text-slate-900 hover:underline" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>
            </div>
            <div className="mt-2 text-xs text-slate-500">Domain: {SITE.domain}</div>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-bold text-slate-900">Store</div>
              <div className="mt-2 flex flex-col gap-2 text-slate-600">
                <Link to="/shop" className="hover:text-slate-900 hover:underline">Shop PDFs</Link>
                <Link to="/subscriptions" className="hover:text-slate-900 hover:underline">Subscriptions</Link>
                <Link to="/delivery-policy" className="hover:text-slate-900 hover:underline">Delivery Policy</Link>
                <Link to="/refund-policy" className="hover:text-slate-900 hover:underline">Refund Policy</Link>
              </div>
            </div>
            <div>
              <div className="font-bold text-slate-900">Company</div>
              <div className="mt-2 flex flex-col gap-2 text-slate-600">
                <Link to="/about" className="hover:text-slate-900 hover:underline">About Us</Link>
                <Link to="/contact" className="hover:text-slate-900 hover:underline">Contact</Link>
                <Link to="/terms" className="hover:text-slate-900 hover:underline">Terms</Link>
                <Link to="/privacy" className="hover:text-slate-900 hover:underline">Privacy</Link>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="text-sm font-bold text-slate-900">Digital Products Disclaimer</div>
            <p className="mt-2 text-sm text-slate-600">
              All items sold on this website are <span className="font-semibold">digital goods</span> (PDF/ZIP) or subscription-based digital access. We do not ship physical products.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Payments shown as <span className="font-semibold">Stripe / PayPal UI simulations</span> for demonstration (no real API keys).
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Daju Bhai Digital. All rights reserved.</div>
          <div className="flex flex-wrap gap-3">
            <Link to="/subscription-terms" className="hover:text-slate-700 hover:underline">Subscription Terms</Link>
            <Link to="/cookies" className="hover:text-slate-700 hover:underline">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
