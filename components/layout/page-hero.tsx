import Image, { type StaticImageData } from "next/image"
import type { LucideIcon } from "lucide-react"

import { Breadcrumbs, type BreadcrumbItem } from "@/components/layout/breadcrumbs"
import { HeroLink } from "@/components/layout/hero-link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PageHeroProps = {
  kicker?: string
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  primaryAction?: { label: string; href: string }
  secondaryAction?: { label: string; href: string }
  image?: { src: StaticImageData; alt: string }
  icon?: LucideIcon
  variant?: "default" | "compact"
  className?: string
}

export function PageHero({
  kicker,
  title,
  description,
  breadcrumbs,
  primaryAction,
  secondaryAction,
  image,
  icon: Icon,
  variant = "default",
  className,
}: PageHeroProps) {
  const compact = variant === "compact"

  return (
    <section
      className={cn(
        "border-b border-border bg-white",
        compact ? "py-10 md:py-12" : "py-12 md:py-16",
        className
      )}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-2 lg:gap-12">
        <div className={cn(!image && "lg:col-span-2 lg:max-w-3xl")}>
          {breadcrumbs?.length ? <Breadcrumbs items={breadcrumbs} className="mb-4" /> : null}
          <div className="flex gap-4">
            {Icon ? (
              <div className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
            ) : null}
            <div>
              {kicker ? <p className="text-sm font-medium text-primary">{kicker}</p> : null}
              <h1 className={cn("heading-display", kicker ? "mt-1" : "")}>{title}</h1>
            </div>
          </div>
          {description ? <p className="text-body mt-4 max-w-xl">{description}</p> : null}
          {primaryAction || secondaryAction ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {primaryAction ? (
                <Button asChild>
                  <HeroLink href={primaryAction.href}>{primaryAction.label}</HeroLink>
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button variant="outline" asChild>
                  <HeroLink href={secondaryAction.href}>{secondaryAction.label}</HeroLink>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border bg-muted/20">
            <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(min-width: 1024px) 45vw, 100vw" priority />
          </div>
        ) : null}
      </div>
    </section>
  )
}
