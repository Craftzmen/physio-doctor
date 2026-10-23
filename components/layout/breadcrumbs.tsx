import Link from "next/link"
import { ChevronRightIcon } from "lucide-react"

import { cn } from "@/lib/utils"

export type BreadcrumbItem = { label: string; href?: string }

type BreadcrumbsProps = {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn("text-sm text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`} className="inline-flex items-center gap-1.5">
              {index > 0 ? <ChevronRightIcon className="size-3.5 shrink-0 opacity-50" aria-hidden /> : null}
              {item.href && !isLast ? (
                <Link href={item.href} className="font-medium transition hover:text-primary">
                  {item.label}
                </Link>
              ) : (
                <span className={cn(isLast && "font-semibold text-foreground")}>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
