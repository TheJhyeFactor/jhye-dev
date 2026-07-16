'use client'

import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

type TrackedEmailLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  location: string
  children: ReactNode
}

export default function TrackedEmailLink({ location, onClick, children, ...props }: TrackedEmailLinkProps) {
  return <a {...props} onClick={(event) => { trackEvent('contact_click', { location }); onClick?.(event) }}>{children}</a>
}
