import { cn } from '../utils/cn'

type Option = { value: string; label: string }

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label?: string
  options: Option[]
  hint?: string
}

export default function Select({ label, options, hint, className, ...props }: Props) {
  return (
    <label className="block">
      {label ? <div className="mb-1 text-sm font-semibold text-slate-900">{label}</div> : null}
      <select
        className={cn(
          'w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-200',
          className
        )}
        {...props}
      >
        {options.map(o => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
      {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
    </label>
  )
}
