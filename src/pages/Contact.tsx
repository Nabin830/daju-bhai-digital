import React, { useState } from 'react'
import Container from '../ui/components/Container'
import Input from '../ui/components/Input'
import Button from '../ui/components/Button'
import Badge from '../ui/components/Badge'
import { SITE } from '../config/site'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const canSend = name.trim().length >= 2 && email.includes('@') && message.trim().length >= 10

  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-soft">
          <div className="flex items-center gap-2">
            <Badge>Contact</Badge>
            <Badge className="bg-slate-50">Support</Badge>
          </div>

          <h1 className="mt-3 text-3xl font-black text-slate-900">Contact {SITE.name}</h1>
          <p className="mt-2 text-slate-600">
            For questions about digital downloads, subscriptions, billing, or policies, contact our support team.
          </p>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <div><span className="font-bold">Support email:</span> <a className="underline" href={`mailto:${SITE.supportEmail}`}>{SITE.supportEmail}</a></div>
            <div className="mt-1"><span className="font-bold">Business hours:</span> {SITE.businessHours}</div>
            <div className="mt-1"><span className="font-bold">Response time:</span> {SITE.responseTime}</div>
          </div>

          <h2 className="mt-6 text-xl font-black text-slate-900">Send a message  </h2>

          {sent ? (
            <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
              Your message has been sent  . We will respond to {email} within 24–48 hours.
            </div>
          ) : (
            <div className="mt-4 grid gap-4">
              <Input label="Your name" value={name} onChange={e => setName(e.target.value)} placeholder="Full name" />
              <Input label="Your email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@example.com" />
              <label className="block">
                <div className="mb-1 text-sm font-semibold text-slate-900">Message</div>
                <textarea
                  className="min-h-32 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Tell us how we can help..."
                />
                <div className="mt-1 text-xs text-slate-500">Do not include sensitive payment details.</div>
              </label>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  disabled={!canSend}
                  onClick={() => setSent(true)}
                >
                  Send message  
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => {
                    setName('')
                    setEmail('')
                    setMessage('')
                    setSent(false)
                  }}
                >
                  Reset
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}
