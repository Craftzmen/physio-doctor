import Link from "next/link"
import { ArrowUpRightIcon, LayoutGridIcon } from "lucide-react"

import { ServiceDepartmentCard } from "@/components/clinic/service-department-card"
import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { services } from "@/lib/clinic-content"
import { galleryPhotos, serviceCardPhoto } from "@/lib/remote-images"

const featured = services.filter((s) => s.featured).slice(0, 8)

export function HomeServices() {
  return (
    <SectionShell id="treatments">
      <SectionHeader
        icon={LayoutGridIcon}
        kicker="Treatments"
        title="Departments"
        description="Each department has its own page: what happens in the room, who it suits, and what to bring."
        actions={
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View all
            <ArrowUpRightIcon className="size-4" aria-hidden />
          </Link>
        }
      />
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((service) => {
          const key = serviceCardPhoto[service.slug] ?? "hero"
          const photo = galleryPhotos[key]
          return (
            <li key={service.slug}>
              <ServiceDepartmentCard
                service={service}
                photo={photo}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
            </li>
          )
        })}
      </ul>
    </SectionShell>
  )
}
