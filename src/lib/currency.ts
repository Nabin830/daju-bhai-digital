export type Currency = 'USD' | 'NPR'

export const DEFAULT_CURRENCY: Currency = 'USD'

export function formatMoney(amount: number, currency: Currency) {
  const isUSD = currency === 'USD'
  const formatter = new Intl.NumberFormat(isUSD ? 'en-US' : 'en-NP', {
    style: 'currency',
    currency: isUSD ? 'USD' : 'NPR',
    maximumFractionDigits: 2
  })
  return formatter.format(amount)
}

export function dualPrice(priceUSD: number, priceNPR: number) {
  return { USD: priceUSD, NPR: priceNPR }
}
