import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../ui/components/Container'
import Button from '../ui/components/Button'

export default function NotFound() {
  return (
    <Container className="py-12">
      <h1 className="text-3xl font-black text-slate-900">Page not found</h1>
      <p className="mt-2 text-slate-600">The page you’re looking for doesn’t exist.</p>
      <div className="mt-5 flex gap-3">
        <Link to="/"><Button variant="primary">Go home</Button></Link>
        <Link to="/shop"><Button variant="secondary">Shop digital PDFs</Button></Link>
      </div>
    </Container>
  )
}
