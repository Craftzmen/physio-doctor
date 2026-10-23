import { cn } from "@/lib/utils"

type SectionShellProps = {
  children: React.ReactNode
  className?: string
  id?: string
  contained?: boolean
  tint?: boolean
}

export function SectionShell({ children, className, id, contained = true, tint = false }: SectionShellProps) {
  return (
    <section
      id={id}
      className={cn("border-b border-border bg-white", tint && "bg-muted/35", className)}
    >
      <div className={cn(contained && "mx-auto max-w-7xl px-5 py-14 md:py-20")}>{children}</div>
    </section>
  )
}
