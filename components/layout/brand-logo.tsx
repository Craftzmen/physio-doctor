import Link from "next/link"
import { cn } from "@/lib/utils"
import { siteConfig } from "@/lib/site-nav"
import { LogoMark } from "@/components/layout/logo-mark"

type BrandLogoProps = {
  className?: string
  tone?: "light" | "dark"
  size?: "sm" | "md"
}

export function BrandLogo({ className, tone = "light", size = "md" }: BrandLogoProps) {
  const muted = tone === "dark" ? "text-white/65" : "text-muted-foreground"

  return (
    <Link
      href="/"
      aria-label={`${siteConfig.name} home`}
      className={cn("inline-flex min-w-0 items-center gap-2.5", tone === "dark" ? "text-white" : "text-ink", className)}
    >
      <LogoMark size={size === "sm" ? 34 : 42} />
      <span className="flex min-w-0 flex-col leading-tight">
        <span className={cn("font-semibold tracking-tight", size === "sm" ? "text-sm" : "text-lg")}>
          Physiodoctor
        </span>
        <span className={cn("text-xs font-medium leading-snug", muted)}>Physiotherapy Clinic</span>
      </span>
    </Link>
  )
}
