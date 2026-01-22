    import Container from '../../ui/components/Container'
    import Badge from '../../ui/components/Badge'
    import { SITE } from '../../config/site'

    export default function Terms() {
      return (
        <div className="bg-slate-50">
          <Container className="py-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge>Legal</Badge>
                <Badge className="bg-slate-50">Terms of Service</Badge>
              </div>

              <h1 className="mt-3 text-3xl font-black text-slate-900">Terms of Service</h1>
              <p className="mt-2 text-sm text-slate-500">Last updated: 2026-01-22</p>

              <div className="prose prose-slate mt-6 max-w-none">

<>
  <p>
    These Terms of Service (“Terms”) govern your access to and use of the website operated as <strong>{SITE.name}</strong> (“we”, “us”, “our”).
    By accessing or purchasing from our website, you agree to these Terms.
  </p>

  <h2>1. What we sell</h2>
  <p>
    We sell <strong>digital goods</strong> including PDF books, digital guides, and downloadable toolkits (PDF/ZIP), and we offer
    <strong>subscription-based access</strong> to premium digital content. We do not ship physical products.
  </p>

  <h2>2. Eligibility</h2>
  <p>
    You must be able to form a legally binding contract in your jurisdiction to make a purchase.
  </p>

  <h2>3. Orders and delivery</h2>
  <p>
    Digital products are delivered electronically after checkout. For this demo site, checkout is simulated (no real payment processing).
    On a live site, downloads may be provided on-screen and/or via email.
  </p>

  <h2>4. License and permitted use</h2>
  <p>
    Unless otherwise stated, purchases include a <strong>personal-use</strong> license only. You may not redistribute, resell, or upload purchased files
    to public websites or file-sharing services.
  </p>

  <h2>5. Refunds</h2>
  <p>
    Digital products are generally <strong>non-refundable once downloaded</strong>. Refunds may be considered only if a file is defective or inaccessible.
    Please review our <a href="/refund-policy">Refund Policy</a>.
  </p>

  <h2>6. Subscriptions</h2>
  <p>
    Subscription plans provide access to premium digital content. You can cancel anytime to prevent future charges.
    Access remains until the end of your paid billing period. See <a href="/subscription-terms">Subscription Terms</a>.
  </p>

  <h2>7. Prohibited uses</h2>
  <p>
    You may not use the website for unlawful activities, attempt to reverse engineer our content, or interfere with site security.
  </p>

  <h2>8. Disclaimer</h2>
  <p>
    Our content is for educational purposes only and does not constitute legal, financial, or professional advice.
  </p>

  <h2>9. Limitation of liability</h2>
  <p>
    To the maximum extent permitted by law, we are not liable for indirect or consequential damages arising from your use of the site or content.
  </p>

  <h2>10. Contact</h2>
  <p>
    For support, contact us at <a href={"mailto:" + SITE.supportEmail}>{SITE.supportEmail}</a>.
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
