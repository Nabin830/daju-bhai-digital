import React from 'react'
import { cn } from '../utils/cn'

export default function Badge({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-slate-200 bg-white px-2.5 py-1 text-xs font-semibold text-slate-700',
        className
      )}
    >
      {children}
    </span>
  )
}
