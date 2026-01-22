import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { PRODUCTS } from '../data/products'
import type { DigitalProduct } from '../types/catalog'
import { readLS, writeLS } from '../lib/storage'

export type CartLine = {
  slug: string
  qty: number
}

type CartCtx = {
  lines: CartLine[]
  items: Array<{ product: DigitalProduct; qty: number }>
  add: (slug: string, qty?: number) => void
  remove: (slug: string) => void
  setQty: (slug: string, qty: number) => void
  clear: () => void
}

const CartContext = createContext<CartCtx | null>(null)

const LS_KEY = 'dbd_cart'

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>(() => readLS<CartLine[]>(LS_KEY, []))

  useEffect(() => {
    writeLS(LS_KEY, lines)
  }, [lines])

  const items = useMemo(() => {
    const map = new Map(PRODUCTS.map(p => [p.slug, p]))
    return lines
      .map(l => ({ product: map.get(l.slug), qty: l.qty }))
      .filter((x): x is { product: DigitalProduct; qty: number } => Boolean(x.product))
  }, [lines])

  const add = (slug: string, qty = 1) => {
    setLines(prev => {
      const found = prev.find(l => l.slug === slug)
      if (found) return prev.map(l => (l.slug === slug ? { ...l, qty: l.qty + qty } : l))
      return [...prev, { slug, qty }]
    })
  }

  const remove = (slug: string) => setLines(prev => prev.filter(l => l.slug !== slug))

  const setQty = (slug: string, qty: number) => {
    const safeQty = Math.max(1, Math.min(99, Math.floor(qty)))
    setLines(prev => prev.map(l => (l.slug === slug ? { ...l, qty: safeQty } : l)))
  }

  const clear = () => setLines([])

  const value = useMemo(() => ({ lines, items, add, remove, setQty, clear }), [lines, items])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx
}
