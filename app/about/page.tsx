import type { Metadata } from "next"
import Link from "next/link"
import { HeartHandshakeIcon, InfoIcon, TargetIcon } from "lucide-react"

import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { galleryPhotos } from "@/lib/remote-images"
import { getWhatsAppHref } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "About",
  description: "How Physiodoctor Physiotherapy Clinic plans a visit: assessment first and a clear next step.",
}

const principles = [
  {
    icon: TargetIcon,
    title: "Assessment before packages",
    text: "The first visit is a movement check and conversation — not a pre-sold block of sessions.",
  },
  {
    icon: InfoIcon,
    title: "Honest scope",
    text: "You should know what we can help with and what needs another service or emergency care.",
  },
  {
    icon: HeartHandshakeIcon,
    title: "Home practice that sticks",
    text: "Plans are sized for your week and updated when symptoms or schedule change.",
  },
]

export default function AboutPage() {
  const photo = galleryPhotos.studio

  return (
    <>
      <PageHero
        kicker="About"
        title="Assessment first"
        description="Physiodoctor Physiotherapy Clinic focuses on movement, pain, pediatric care, neurological recovery, and speech."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
        image={{ src: photo.src, alt: photo.alt, objectPosition: photo.objectPosition }}
      />
      <SectionShell>
        <ul className="grid gap-6 md:grid-cols-3">
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-border bg-white p-5">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Icon className="size-5" aria-hidden />
              </div>
              <h2 className="mt-4 text-lg font-semibold">{title}</h2>
              <p className="text-body-sm mt-2">{text}</p>
            </li>
          ))}
        </ul>
        <div className="prose-clinic mx-auto mt-10 max-w-2xl space-y-4">
          <p>
            We do not promise recovery timelines. Progress depends on the problem, the plan, and practice at home.
          </p>
          <p>
            <a
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary hover:underline"
            >
              Book on WhatsApp
            </a>
            {" · "}
            <Link href="/treatments" className="font-medium text-primary hover:underline">
              Treatment departments
            </Link>
          </p>
        </div>
      </SectionShell>
    </>
  )
}
