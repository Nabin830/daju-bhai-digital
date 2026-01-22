import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/components/Container'
import Input from '../ui/components/Input'
import Select from '../ui/components/Select'
import Badge from '../ui/components/Badge'
import Price from '../ui/components/Price'
import { PRODUCTS } from '../data/products'
import type { ProductCategory, ProductLanguage } from '../types/catalog'

const categories = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.category)))] as const
const languages = ['All', ...Array.from(new Set(PRODUCTS.map(p => p.language)))] as const

type PriceFilter = 'All' | 'Under $10' | '$10–$20' | 'Over $20'

function priceMatch(priceUSD: number, filter: PriceFilter) {
  if (filter === 'All') return true
  if (filter === 'Under $10') return priceUSD < 10
  if (filter === '$10–$20') return priceUSD >= 10 && priceUSD <= 20
  return priceUSD > 20
}

export default function Shop() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState<(typeof categories)[number]>('All')
  const [lang, setLang] = useState<(typeof languages)[number]>('All')
  const [price, setPrice] = useState<PriceFilter>('All')

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase()
    return PRODUCTS.filter(p => {
      const matchesQuery =
        !query ||
        p.title.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      const matchesCat = cat === 'All' ? true : p.category === (cat as ProductCategory)
      const matchesLang = lang === 'All' ? true : p.language === (lang as ProductLanguage)
      const matchesPrice = priceMatch(p.priceUSD, price)
      return matchesQuery && matchesCat && matchesLang && matchesPrice
    })
  }, [q, cat, lang, price])

  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-black text-slate-900">Shop Digital PDFs</h1>
          <p className="text-slate-600">
            All products are digital downloads (PDF/ZIP) with instant delivery. Prices are shown in both USD and NPR.
          </p>
        </div>

        <div className="mt-6 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-soft md:grid-cols-4">
          <Input label="Search" value={q} onChange={e => setQ(e.target.value)} placeholder="Search books, categories..." />
          <Select
            label="Category"
            value={cat}
            onChange={e => setCat(e.target.value as any)}
            options={categories.map(c => ({ value: c, label: c }))}
          />
          <Select
            label="Language"
            value={lang}
            onChange={e => setLang(e.target.value as any)}
            options={languages.map(l => ({ value: l, label: l }))}
          />
          <Select
            label="Price"
            value={price}
            onChange={e => setPrice(e.target.value as PriceFilter)}
            options={[
              { value: 'All', label: 'All' },
              { value: 'Under $10', label: 'Under $10' },
              { value: '$10–$20', label: '$10–$20' },
              { value: 'Over $20', label: 'Over $20' }
            ]}
          />
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(p => (
            <Link key={p.slug} to={`/product/${p.slug}`} className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-soft hover:border-slate-300">
              <div className="flex items-center justify-between">
                <Badge>Digital {p.fileType}</Badge>
                <Badge className="bg-slate-50">{p.category}</Badge>
              </div>
              <img src={p.previewImage} alt={`${p.title} preview`} className="mt-4 h-40 w-full rounded-2xl object-cover" />
              <div className="mt-4 text-lg font-extrabold text-slate-900 group-hover:underline">{p.title}</div>
              <div className="mt-1 text-sm text-slate-600">{p.description}</div>
              <div className="mt-4 flex items-end justify-between">
                <div className="text-xs text-slate-500">{p.language} • Updated {p.lastUpdated}</div>
                <Price usd={p.priceUSD} npr={p.priceNPR} />
              </div>
            </Link>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-600">
            No products match your filters. Try clearing search or choosing “All”.
          </div>
        ) : null}
      </Container>
    </div>
  )
}
