import Container from '../ui/components/Container'
import Badge from '../ui/components/Badge'
import { SITE } from '../config/site'

export default function About() {
  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex items-center gap-2">
            <Badge>About</Badge>
            <Badge className="bg-slate-50">Digital Publishing</Badge>
          </div>

          <h1 className="mt-3 text-3xl font-black text-slate-900">About {SITE.name}</h1>

          <p className="mt-4 text-slate-600">
            {SITE.name} is a digital content and subscription business focused on practical learning.
            We publish <span className="font-semibold">digital PDF books</span>, guides, and toolkits, and we offer subscription-based access to premium digital resources.
          </p>

          <h2 className="mt-6 text-xl font-black text-slate-900">Who we serve</h2>
          <p className="mt-2 text-slate-600">
            We serve global customers—especially learners and working professionals in the United States, Nepal, and international markets—who want clear, actionable learning material.
          </p>

          <h2 className="mt-6 text-xl font-black text-slate-900">Our mission</h2>
          <p className="mt-2 text-slate-600">
            Our mission is to make learning accessible with well-structured, affordable digital resources.
            Every product is designed for personal learning, delivered instantly online, and supported by transparent policies.
          </p>

          <h2 className="mt-6 text-xl font-black text-slate-900">Business details</h2>
          <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <div><span className="font-bold">Business name:</span> {SITE.name}</div>
            <div><span className="font-bold">Industry:</span> Digital publishing / Online education</div>
            <div><span className="font-bold">Website:</span> {SITE.url}</div>
            <div><span className="font-bold">Support:</span> {SITE.supportEmail}</div>
            <div className="mt-2 text-xs text-slate-500">{SITE.addressNote}</div>
          </div>
        </div>
      </Container>
    </div>
  )
}
