    import Container from '../../ui/components/Container'
    import Badge from '../../ui/components/Badge'
    import { SITE } from '../../config/site'

    export default function Privacy() {
      return (
        <div className="bg-slate-50">
          <Container className="py-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge>Legal</Badge>
                <Badge className="bg-slate-50">Privacy Policy</Badge>
              </div>

              <h1 className="mt-3 text-3xl font-black text-slate-900">Privacy Policy</h1>
              <p className="mt-2 text-sm text-slate-500">Last updated: 2026-01-22</p>

              <div className="prose prose-slate mt-6 max-w-none">

<>
  <p>
    This Privacy Policy explains how <strong>{SITE.name}</strong> collects, uses, and protects personal information.
  </p>

  <h2>1. Information we collect</h2>
  <ul>
    <li><strong>Contact details</strong> (e.g., email) when you make a purchase or contact support.</li>
    <li><strong>Order details</strong> such as items purchased and transaction metadata (in a live system).</li>
    <li><strong>Usage data</strong> (basic analytics) to improve performance and usability (if enabled).</li>
  </ul>

  <h2>2. How we use information</h2>
  <ul>
    <li>To deliver digital products and provide subscription access.</li>
    <li>To provide customer support and respond to requests.</li>
    <li>To comply with legal obligations and prevent fraud.</li>
  </ul>

  <h2>3. Payments</h2>
  <p>
    On a live site, payments may be processed by third-party providers such as Stripe and PayPal.
    We do not store full card numbers. Payment providers handle sensitive payment information according to their standards.
  </p>

  <h2>4. Data retention</h2>
  <p>
    We retain personal data only as long as necessary to provide services and meet legal requirements.
  </p>

  <h2>5. Your rights</h2>
  <p>
    Depending on your location, you may have rights to access, correct, or delete personal information. Contact us to request help.
  </p>

  <h2>6. Security</h2>
  <p>
    We implement reasonable technical and organizational measures to protect information. No method of transmission is 100% secure.
  </p>

  <h2>7. International users</h2>
  <p>
    We serve customers globally, including the United States and Nepal. Your data may be processed in locations where we or our providers operate.
  </p>

  <h2>8. Contact</h2>
  <p>
    Privacy questions: <a href={"mailto:" + SITE.supportEmail}>{SITE.supportEmail}</a>.
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
