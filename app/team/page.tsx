import type { Metadata } from "next"
import {
  BrainIcon,
  HandIcon,
  MessageCircleIcon,
  PersonStandingIcon,
  SparklesIcon,
  UsersIcon,
} from "lucide-react"

import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { teamRoles } from "@/lib/clinic-content"
import { galleryPhotos } from "@/lib/remote-images"
import { getWhatsAppHref } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Team",
  description: "Clinical roles at Physiodoctor Physiotherapy Clinic.",
}

const roleIcons = [PersonStandingIcon, HandIcon, SparklesIcon, MessageCircleIcon, HandIcon, BrainIcon]

export default function TeamPage() {
  const teamPhoto = galleryPhotos.therapy

  return (
    <>
      <PageHero
        icon={UsersIcon}
        kicker="Team"
        title="Roles on site"
        description="Names and schedules change. These descriptions explain who handles movement, speech, or daily tasks."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Team" }]}
        primaryAction={{ label: "Book on WhatsApp", href: getWhatsAppHref() }}
        image={{
          src: teamPhoto.src,
          alt: teamPhoto.alt,
          objectPosition: teamPhoto.objectPosition,
        }}
      />
      <SectionShell tint>
        <ul className="grid gap-4 md:grid-cols-2">
          {teamRoles.map((role, index) => {
            const Icon = roleIcons[index] ?? UsersIcon
            return (
              <li key={role.title} className="flex gap-4 rounded-lg border border-border bg-white p-5">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" aria-hidden />
                </div>
                <div>
                  <h2 className="text-lg font-semibold">{role.title}</h2>
                  <p className="text-body-sm mt-1">{role.text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </SectionShell>
    </>
  )
}
