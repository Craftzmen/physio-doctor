import type { Metadata } from "next"
import { CalendarPlusIcon, CheckIcon } from "lucide-react"

import { BookViaWhatsApp } from "@/components/clinic/book-via-whatsapp"
import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { visitNotes } from "@/lib/home-content"
import { getWhatsAppHref } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Book on WhatsApp",
  description:
    "Book a visit at Physiodoctor Physiotherapy Clinic by WhatsApp. There is no appointment form on this website.",
}

export default function AppointmentPage() {
  return (
    <>
      <PageHero
        icon={CalendarPlusIcon}
        kicker="Booking"
        title="Book on WhatsApp"
        description="Send your preferred day and what you need help with. The clinic replies to confirm — nothing is reserved until then."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Book" }]}
        variant="compact"
        primaryAction={{ label: "Message on WhatsApp", href: getWhatsAppHref() }}
      />
      <SectionShell tint>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <ul className="space-y-3">
            {visitNotes.map((note) => (
              <li key={note} className="flex gap-3 text-body-sm">
                <CheckIcon className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <BookViaWhatsApp />
        </div>
      </SectionShell>
    </>
  )
}
