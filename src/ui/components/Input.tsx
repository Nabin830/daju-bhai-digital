import { cn } from '../utils/cn'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  hint?: string
}

export default function Input({ label, hint, className, ...props }: Props) {
  return (
    <label className="block">
      {label ? <div className="mb-1 text-sm font-semibold text-slate-900">{label}</div> : null}
      <input
        className={cn(
          'w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 shadow-sm outline-none placeholder:text-slate-400 focus:border-amber-400 focus:ring-2 focus:ring-amber-200',
          className
        )}
        {...props}
      />
      {hint ? <div className="mt-1 text-xs text-slate-500">{hint}</div> : null}
    </label>
  )
}
