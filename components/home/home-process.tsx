import { ClipboardListIcon, MessageSquareTextIcon, RefreshCwIcon, UserCheckIcon } from "lucide-react"

import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { processSteps } from "@/lib/home-content"

const stepIcons = [MessageSquareTextIcon, UserCheckIcon, ClipboardListIcon, RefreshCwIcon]

export function HomeProcess() {
  return (
    <SectionShell tint>
      <SectionHeader kicker="Visits" title="How booking works" description="From first message to a plan you can follow at home." />
      <ol className="mt-10 grid gap-5 md:grid-cols-2">
        {processSteps.map((step, index) => {
          const Icon = stepIcons[index] ?? ClipboardListIcon
          return (
            <li key={step.step} className="flex gap-4 rounded-lg border border-border bg-white p-5">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold tabular-nums text-primary">Step {step.step}</p>
                <h3 className="mt-1 text-lg font-semibold text-foreground">{step.title}</h3>
                <p className="text-body-sm mt-2">{step.text}</p>
              </div>
            </li>
          )
        })}
      </ol>
    </SectionShell>
  )
}
