import { Building2Icon, ClipboardCheckIcon, ShieldCheckIcon } from "lucide-react"

import { trustSignals } from "@/lib/home-content"

const icons = [ClipboardCheckIcon, Building2Icon, ShieldCheckIcon]

export function HomeHighlights() {
  return (
    <section className="border-b border-border bg-muted/35">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 md:py-12">
        {trustSignals.map((item, index) => {
          const Icon = icons[index] ?? ClipboardCheckIcon
          return (
            <div key={item.title} className="flex gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="text-body-sm mt-1">{item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
