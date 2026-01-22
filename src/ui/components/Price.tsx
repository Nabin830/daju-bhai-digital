import type { Currency } from '../../lib/currency'
import { formatMoney } from '../../lib/currency'
import { useCurrency } from '../../providers/CurrencyProvider'

export default function Price({ usd, npr, emphasize = false }: { usd: number; npr: number; emphasize?: boolean }) {
  const { currency } = useCurrency()
  const cls = emphasize ? 'text-xl font-extrabold text-slate-900' : 'text-sm font-bold text-slate-900'
  const altCls = emphasize ? 'text-sm text-slate-500' : 'text-xs text-slate-500'
  const primary = currency === 'USD' ? formatMoney(usd, 'USD') : formatMoney(npr, 'NPR')
  const secondary = currency === 'USD' ? formatMoney(npr, 'NPR') : formatMoney(usd, 'USD')

  return (
    <div>
      <div className={cls}>{primary}</div>
      <div className={altCls}>({secondary})</div>
    </div>
  )
}

export function PriceInline({ currency, usd, npr }: { currency: Currency; usd: number; npr: number }) {
  return <span>{currency === 'USD' ? formatMoney(usd, 'USD') : formatMoney(npr, 'NPR')}</span>
}
