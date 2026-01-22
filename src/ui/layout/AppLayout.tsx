import React from 'react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function AppLayout() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="min-h-[70vh]">
        <Outlet />
      </main>
      <SiteFooter />
      <ScrollRestoration />
    </div>
  )
}
