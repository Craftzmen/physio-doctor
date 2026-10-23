import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, LayoutGridIcon } from "lucide-react"

import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { services } from "@/lib/clinic-content"
import { galleryPhotos, serviceCardPhoto } from "@/lib/remote-images"
import { getWhatsAppHref } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Treatments",
  description: "Treatment departments at Physiodoctor Physiotherapy Clinic.",
}

export default function TreatmentsPage() {
  const heroImage = galleryPhotos.hero

  return (
    <>
      <PageHero
        icon={LayoutGridIcon}
        kicker="Treatments"
        title="Departments"
        description="Open a department for visit details, who it suits, and what to bring."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Treatments" }]}
        primaryAction={{ label: "Book on WhatsApp", href: getWhatsAppHref() }}
        image={{ src: heroImage.src, alt: heroImage.alt }}
      />
      <SectionShell tint>
        <ul className="divide-y divide-border rounded-lg border border-border bg-white">
          {services.map((service) => {
            const key = serviceCardPhoto[service.slug] ?? "hero"
            const photo = galleryPhotos[key]
            return (
              <li key={service.slug}>
                <Link
                  href={`/${service.slug}`}
                  className="group flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:gap-6"
                >
                  <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-md border border-border bg-muted/20">
                    <Image src={photo.src} alt={photo.alt} fill className="object-cover" sizes="112px" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold group-hover:text-primary">{service.title}</h2>
                    <p className="text-body-sm mt-1">{service.summary}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Read
                    <ArrowUpRightIcon className="size-4" aria-hidden />
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </SectionShell>
    </>
  )
}
