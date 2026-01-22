    import Container from '../../ui/components/Container'
    import Badge from '../../ui/components/Badge'
    import { SITE } from '../../config/site'

    export default function Cookies() {
      return (
        <div className="bg-slate-50">
          <Container className="py-10">
            <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
              <div className="flex items-center gap-2">
                <Badge>Legal</Badge>
                <Badge className="bg-slate-50">Cookies Policy</Badge>
              </div>

              <h1 className="mt-3 text-3xl font-black text-slate-900">Cookies Policy</h1>
              <p className="mt-2 text-sm text-slate-500">Last updated: 2026-01-22</p>

              <div className="prose prose-slate mt-6 max-w-none">

<>
  <p>
    This Cookies Policy explains how <strong>{SITE.name}</strong> uses cookies and similar technologies.
  </p>

  <h2>1. What are cookies?</h2>
  <p>
    Cookies are small text files stored on your device that help websites remember preferences and improve functionality.
  </p>

  <h2>2. How we use cookies</h2>
  <ul>
    <li><strong>Essential</strong>: to remember preferences like selected currency and cart items.</li>
    <li><strong>Analytics</strong>: to understand usage and improve the website (only if enabled).</li>
  </ul>

  <h2>3. Managing cookies</h2>
  <p>
    You can control cookies through your browser settings. Disabling essential cookies may affect site functionality.
  </p>

  <h2>4. Contact</h2>
  <p>
    Questions: <a href={"mailto:" + SITE.supportEmail}>{SITE.supportEmail}</a>.
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
