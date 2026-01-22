    import Container from '../../ui/components/Container'
    import Badge from '../../ui/components/Badge'
    import { SITE } from '../../config/site'

    export default function SubscriptionTerms() {
      return (
        <div className="bg-slate-50">
          <Container className="py-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge>Legal</Badge>
                <Badge className="bg-slate-50">Subscription Terms</Badge>
              </div>

              <h1 className="mt-3 text-3xl font-black text-slate-900">Subscription Terms</h1>
              <p className="mt-2 text-sm text-slate-500">Last updated: 2026-01-22</p>

              <div className="prose prose-slate mt-6 max-w-none">

<>
  <p>
    These Subscription Terms apply to subscription plans offered by <strong>{SITE.name}</strong>.
  </p>

  <h2>1. Access</h2>
  <p>
    A subscription provides access to premium digital content for the duration of your active billing period.
  </p>

  <h2>2. Billing</h2>
  <ul>
    <li>Plans may be billed monthly or yearly.</li>
    <li>Prices are displayed in USD and NPR for clarity; actual billing currency depends on the checkout selection.</li>
  </ul>

  <h2>3. Cancellation</h2>
  <p>
    You can cancel anytime. After cancellation, you will not be charged for future periods.
    Access remains active until the end of the paid billing period.
  </p>

  <h2>4. Refunds</h2>
  <p>
    Subscription fees already paid are generally non-refundable unless required by law. Please see the <a href="/refund-policy">Refund Policy</a>.
  </p>

  <h2>5. Acceptable use</h2>
  <p>
    Subscription content is for personal use. Sharing accounts or redistributing member-only files is not allowed.
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
