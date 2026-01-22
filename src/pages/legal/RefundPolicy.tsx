    import React from 'react'
    import Container from '../../ui/components/Container'
    import Badge from '../../ui/components/Badge'
    import { SITE } from '../../config/site'

    export default function RefundPolicy() {
      return (
        <div className="bg-slate-50">
          <Container className="py-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge>Legal</Badge>
                <Badge className="bg-slate-50">Refund Policy</Badge>
              </div>

              <h1 className="mt-3 text-3xl font-black text-slate-900">Refund Policy</h1>
              <p className="mt-2 text-sm text-slate-500">Last updated: 2026-01-22</p>

              <div className="prose prose-slate mt-6 max-w-none">

<>
  <p>
    This Refund Policy applies to all digital products sold by <strong>{SITE.name}</strong>.
  </p>

  <h2>1. Digital products</h2>
  <p>
    Because our products are <strong>digital downloads</strong>, they are <strong>non-refundable once downloaded</strong>.
  </p>

  <h2>2. When a refund may be considered</h2>
  <ul>
    <li>The file is <strong>defective</strong>, corrupted, or incomplete.</li>
    <li>The file is <strong>inaccessible</strong> due to a verified technical issue on our side.</li>
    <li>You can provide a clear description of the issue and we cannot resolve it in a reasonable time.</li>
  </ul>

  <h2>3. How to request a refund</h2>
  <p>
    Email our support team at <a href={"mailto:" + SITE.supportEmail}>{SITE.supportEmail}</a> within 7 days of purchase.
    Include your order ID and a description of the problem.
  </p>

  <h2>4. Subscriptions</h2>
  <p>
    You can cancel subscriptions anytime to prevent <strong>future charges</strong>. Fees already paid for a billing period are typically non-refundable,
    unless required by law. Access continues until the end of the paid period.
  </p>

  <h2>5. Chargebacks</h2>
  <p>
    If you believe a transaction is unauthorized, contact us first so we can help resolve it. Unnecessary chargebacks may limit future access.
  </p>
</>

              </div>

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                <div className="font-bold">Contact</div>
                <div className="mt-1">
                  Questions about this policy? Email <a className="underline" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a>.
                </div>
              </div>
            </div>
          </Container>
        </div>
      )
    }
