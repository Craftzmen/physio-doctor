import Link from "next/link"
import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CtaBandProps = {
  title: string
  description: string
  primary: { label: string; href: string }
  secondary?: { label: string; href: string }
  className?: string
}

export function CtaBand({ title, description, primary, secondary, className }: CtaBandProps) {
  return (
    <section className={cn("border-y border-primary/20 bg-primary text-primary-foreground", className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 py-10 md:flex-row md:items-center md:py-12">
        <div className="max-w-2xl">
          <h2 className="text-lg font-bold tracking-tight md:text-xl">{title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85 md:text-base">{description}</p>
        </div>
        <div className="flex w-full shrink-0 flex-col gap-2 sm:w-auto sm:flex-row">
          <Button
            variant="secondary"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link href={primary.href}>
              {primary.label}
              <ArrowRightIcon className="size-4" aria-hidden />
            </Link>
          </Button>
          {secondary ? (
            <Button
              variant="outline"
              className="border-white/40 bg-transparent text-white hover:bg-white/10 hover:text-white"
              asChild
            >
              <Link href={secondary.href}>{secondary.label}</Link>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  )
}
