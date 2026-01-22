import React, { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import Container from '../ui/components/Container'
import Badge from '../ui/components/Badge'
import Button from '../ui/components/Button'
import Price from '../ui/components/Price'
import { PRODUCTS } from '../data/products'
import { useCart } from '../providers/CartProvider'

export default function ProductDetails() {
  const { slug } = useParams()
  const { add } = useCart()

  const product = useMemo(() => PRODUCTS.find(p => p.slug === slug), [slug])

  if (!product) {
    return (
      <Container className="py-12">
        <h1 className="text-2xl font-black text-slate-900">Product not found</h1>
        <p className="mt-2 text-slate-600">The item you requested does not exist.</p>
        <div className="mt-4">
          <Link to="/shop">
            <Button variant="primary">Back to shop</Button>
          </Link>
        </div>
      </Container>
    )
  }

  return (
    <div className="bg-slate-50">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img src={product.previewImage} alt={`${product.title} preview`} className="h-auto w-full rounded-3xl border border-slate-200 bg-white shadow-soft" />
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-2">
              <Badge>Digital {product.fileType}</Badge>
              <Badge className="bg-slate-50">{product.category}</Badge>
              <Badge className="bg-slate-50">{product.language}</Badge>
            </div>

            <h1 className="mt-3 text-3xl font-black text-slate-900">{product.title}</h1>
            <p className="mt-3 text-slate-600">{product.longDescription}</p>

            <div className="mt-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-slate-900">Price</div>
                  <div className="mt-2">
                    <Price emphasize usd={product.priceUSD} npr={product.priceNPR} />
                  </div>
                </div>
                <div className="text-right text-xs text-slate-500">
                  Updated: {product.lastUpdated}
                  <div>License: {product.licenseType}</div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-900">File type</div>
                  <div className="mt-1 text-sm text-slate-700">{product.fileType}</div>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="text-xs font-bold text-slate-900">File size</div>
                  <div className="mt-1 text-sm text-slate-700">{product.fileSize}</div>
                </div>
              </div>

              <div className="mt-5">
                <div className="text-sm font-bold text-slate-900">What’s included</div>
                <ul className="mt-2 list-disc pl-5 text-sm text-slate-600">
                  {product.whatsIncluded.map(x => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-slate-700">
                <div className="font-bold">Refund eligibility</div>
                <div className="mt-1">
                  Digital products are typically <span className="font-semibold">non-refundable once downloaded</span>.
                  Refunds may be considered only if the file is defective or inaccessible. See the{' '}
                  <Link to="/refund-policy" className="font-semibold text-slate-900 underline">
                    Refund Policy
                  </Link>
                  .
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  variant="primary"
                  onClick={() => add(product.slug, 1)}
                >
                  Add to cart
                </Button>
                <Link to="/cart">
                  <Button variant="secondary">Go to cart</Button>
                </Link>
                <Link to="/shop">
                  <Button variant="ghost">Continue shopping</Button>
                </Link>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                Personal-use license. No redistribution or resale of the files.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
