import type { SubscriptionPlan } from '../types/catalog'

export const SUBSCRIPTIONS: SubscriptionPlan[] = [
  {
    "id": "starter",
    "name": "Starter Access",
    "monthlyPriceUSD": 9.0,
    "monthlyPriceNPR": 1200,
    "yearlyPriceUSD": 90.0,
    "yearlyPriceNPR": 12000,
    "features": [
      "Access to selected premium articles & guides",
      "Monthly new PDF drop (subscriber-only)",
      "Email support (48-hour response)"
    ],
    "accessLevel": "Starter"
  },
  {
    "id": "pro",
    "name": "Pro Library",
    "monthlyPriceUSD": 19.0,
    "monthlyPriceNPR": 2500,
    "yearlyPriceUSD": 190.0,
    "yearlyPriceNPR": 25000,
    "features": [
      "Full premium library access",
      "All subscriber-only PDFs & toolkits",
      "Priority email support (24\u201348 hours)",
      "Early access to new releases"
    ],
    "accessLevel": "Pro"
  },
  {
    "id": "premium",
    "name": "Premium Plus",
    "monthlyPriceUSD": 29.0,
    "monthlyPriceNPR": 3800,
    "yearlyPriceUSD": 290.0,
    "yearlyPriceNPR": 38000,
    "features": [
      "Everything in Pro",
      "Quarterly live workshop replays (recordings)",
      "Member-only templates bundle",
      "Fast support (within 24 hours)"
    ],
    "accessLevel": "Premium"
  }
]
