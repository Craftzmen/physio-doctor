import Link from "next/link"
import { ArrowUpRightIcon, BookOpenIcon } from "lucide-react"

import { ConditionCard } from "@/components/clinic/condition-card"
import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { conditions } from "@/lib/clinic-content"
import { getConditionImage } from "@/lib/condition-images"

const preview = conditions.slice(0, 6)

export function HomeConditions() {
  return (
    <SectionShell>
      <SectionHeader
        icon={BookOpenIcon}
        kicker="Conditions"
        title="Common topics"
        description="Short guides — not a diagnosis. Emergency symptoms need urgent care."
        actions={
          <Link href="/conditions" className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline">
            All guides
            <ArrowUpRightIcon className="size-4" aria-hidden />
          </Link>
        }
      />
      <ul className="mt-8 grid gap-5 lg:grid-cols-2 lg:gap-6">
        {preview.map((item) => (
          <li key={item.id} className="h-full">
            <ConditionCard
              id={item.id}
              title={item.title}
              text={item.text}
              image={getConditionImage(item.id)}
              as="div"
              linkToAnchor
            />
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
