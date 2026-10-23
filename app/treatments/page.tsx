import type { Metadata } from "next"
import { LayoutGridIcon } from "lucide-react"

import { ServiceDepartmentCard } from "@/components/clinic/service-department-card"
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
        image={{
          src: heroImage.src,
          alt: heroImage.alt,
          objectPosition: heroImage.objectPosition,
        }}
      />
      <SectionShell tint>
        <ul className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const key = serviceCardPhoto[service.slug] ?? "hero"
            const photo = galleryPhotos[key]
            return (
              <li key={service.slug}>
                <ServiceDepartmentCard
                  service={service}
                  photo={photo}
                  sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
              </li>
            )
          })}
        </ul>
      </SectionShell>
    </>
  )
}
