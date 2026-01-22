export type ProductCategory =
  | 'Online Business'
  | 'Study & Career'
  | 'Finance & Money'
  | 'Productivity'
  | 'Digital Skills'
  | 'Language Learning'

export type ProductLanguage = 'English' | 'Nepali' | 'Bilingual'

export type DigitalProduct = {
  slug: string
  title: string
  description: string
  longDescription: string
  priceUSD: number
  priceNPR: number
  category: ProductCategory
  fileType: 'PDF' | 'ZIP'
  fileSize: string
  language: ProductLanguage
  lastUpdated: string // ISO date
  licenseType: 'Personal Use'
  previewImage: string
  whatsIncluded: string[]
}

export type SubscriptionPlan = {
  id: string
  name: string
  monthlyPriceUSD: number
  monthlyPriceNPR: number
  yearlyPriceUSD: number
  yearlyPriceNPR: number
  features: string[]
  accessLevel: 'Starter' | 'Pro' | 'Premium'
}
