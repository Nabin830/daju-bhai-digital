import React from 'react'
import { CurrencyProvider } from './CurrencyProvider'
import { CartProvider } from './CartProvider'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <CartProvider>{children}</CartProvider>
    </CurrencyProvider>
  )
}
