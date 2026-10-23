import type { LucideIcon } from "lucide-react"

import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  kicker?: string
  title: string
  description?: string
  align?: "left" | "center"
  className?: string
  actions?: React.ReactNode
  icon?: LucideIcon
}

export function SectionHeader({
  kicker,
  title,
  description,
  align = "left",
  className,
  actions,
  icon: Icon,
}: SectionHeaderProps) {
  const centered = align === "center"

  return (
    <div
      className={cn(
        "flex flex-col gap-5 border-b border-border pb-7 md:flex-row md:items-end md:justify-between",
        centered && "md:flex-col md:items-center md:text-center",
        className
      )}
    >
      <div className={cn("flex gap-4", centered && "mx-auto max-w-2xl flex-col items-center")}>
        {Icon ? (
          <div
            className={cn(
              "flex size-11 shrink-0 items-center justify-center rounded-lg border border-primary/15 bg-primary/5 text-primary",
              centered && "mx-auto"
            )}
          >
            <Icon className="size-5" aria-hidden />
          </div>
        ) : null}
        <div className={cn(!centered && "min-w-0 flex-1", centered && "max-w-2xl")}>
          {kicker ? <p className="text-sm font-medium text-primary">{kicker}</p> : null}
          <h2 className={cn("heading-section", kicker ? "mt-1" : "")}>{title}</h2>
          {description ? <p className="text-body mt-2 max-w-2xl">{description}</p> : null}
        </div>
      </div>
      {actions ? <div className={cn("shrink-0", centered && "md:mx-auto")}>{actions}</div> : null}
    </div>
  )
}
