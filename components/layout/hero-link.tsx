import type { ReactNode } from "react"
import Link from "next/link"

function isExternalHref(href: string) {
  return /^(https?:|tel:|mailto:)/.test(href)
}

export function HeroLink({ href, children }: { href: string; children: ReactNode }) {
  if (isExternalHref(href)) {
    const openInNewTab = href.startsWith("http")
    return (
      <a href={href} {...(openInNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {children}
      </a>
    )
  }
  return <Link href={href}>{children}</Link>
}
