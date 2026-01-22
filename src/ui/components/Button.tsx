import React from 'react'
import { cn } from '../utils/cn'

type Variant = 'primary' | 'secondary' | 'ghost' | 'danger'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant
  href?: string
}

export default function Button({ variant = 'primary', className, ...props }: Props) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed'
  const styles: Record<Variant, string> = {
    primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-soft',
    secondary: 'bg-amber-400 text-slate-900 hover:bg-amber-300 shadow-soft',
    ghost: 'bg-transparent text-slate-900 hover:bg-slate-100',
    danger: 'bg-rose-600 text-white hover:bg-rose-500'
  }

  return <button className={cn(base, styles[variant], className)} {...props} />
}
