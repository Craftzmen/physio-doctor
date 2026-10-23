import { MessageSquareQuoteIcon } from "lucide-react"

import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { testimonials } from "@/lib/home-content"

export function HomeTestimonials() {
  return (
    <SectionShell tint>
      <SectionHeader
        icon={MessageSquareQuoteIcon}
        kicker="Notes from visits"
        title="What people often mention"
        description="Anonymous summaries from typical visit types — not promises of outcomes."
      />
      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <li key={item.role} className="rounded-lg border border-border bg-white p-5">
            <p className="text-body leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</p>
            <p className="mt-4 text-sm font-medium text-primary">{item.role}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
