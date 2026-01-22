    import Container from '../../ui/components/Container'
    import Badge from '../../ui/components/Badge'
    import { SITE } from '../../config/site'

    export default function DeliveryPolicy() {
      return (
        <div className="bg-slate-50">
          <Container className="py-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge>Legal</Badge>
                <Badge className="bg-slate-50">Delivery Policy</Badge>
              </div>

              <h1 className="mt-3 text-3xl font-black text-slate-900">Delivery Policy</h1>
              <p className="mt-2 text-sm text-slate-500">Last updated: 2026-01-22</p>

              <div className="prose prose-slate mt-6 max-w-none">

<>
  <p>
    <strong>{SITE.name}</strong> sells only digital products (PDF/ZIP) and digital subscriptions. We do not ship physical goods.
  </p>

  <h2>1. Instant delivery</h2>
  <p>
    Digital products are made available immediately after successful checkout. On a live site, this may occur via an on-screen download button and/or email.
  </p>

  <h2>2. Download availability</h2>
  <ul>
    <li>Downloads are for personal use only.</li>
    <li>For security, download links may expire or be limited in a live implementation.</li>
  </ul>

  <h2>3. Troubleshooting</h2>
  <p>
    If you cannot access a file, contact us at <a href={"mailto:" + SITE.supportEmail}>{SITE.supportEmail}</a>.
    We will help you access the correct file or provide a replacement.
  </p>

  <h2>4. No shipping</h2>
  <p>
    This is a digital product. <strong>No physical shipping</strong> is provided.
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
