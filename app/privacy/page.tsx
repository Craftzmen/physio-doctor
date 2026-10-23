import type { Metadata } from "next"

import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { privacySections } from "@/lib/clinic-content"

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy information for Physiodoctor Physiotherapy Clinic.",
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        kicker="Privacy"
        title="Your details on this site"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy" }]}
        variant="compact"
      />
      <SectionShell>
        <div className="mx-auto max-w-2xl divide-y divide-border">
          {privacySections.map((section) => (
            <section key={section.id} id={section.id} className="scroll-mt-24 py-6 first:pt-0">
              <h2 className="text-base font-semibold">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </section>
          ))}
        </div>
      </SectionShell>
    </>
  )
}
