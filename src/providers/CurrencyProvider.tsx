import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Currency } from '../lib/currency'
import { DEFAULT_CURRENCY } from '../lib/currency'
import { readLS, writeLS } from '../lib/storage'

type CurrencyCtx = {
  currency: Currency
  setCurrency: (c: Currency) => void
}

const CurrencyContext = createContext<CurrencyCtx | null>(null)

const LS_KEY = 'dbd_currency'

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>(() => readLS<Currency>(LS_KEY, DEFAULT_CURRENCY))

  const setCurrency = (c: Currency) => setCurrencyState(c)

  useEffect(() => {
    writeLS(LS_KEY, currency)
  }, [currency])

  const value = useMemo(() => ({ currency, setCurrency }), [currency])

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext)
  if (!ctx) throw new Error('useCurrency must be used within CurrencyProvider')
  return ctx
}
