import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon, LayoutGridIcon } from "lucide-react"

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
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((service) => {
          const key = serviceCardPhoto[service.slug] ?? "hero"
          const photo = galleryPhotos[key]
          return (
            <li key={service.slug}>
              <Link href={`/${service.slug}`} className="group flex h-full flex-col rounded-lg border border-border bg-white transition hover:border-primary/30 hover:shadow-sm">
                <div className="relative aspect-[3/2] overflow-hidden rounded-t-lg bg-muted/20">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-[1.02]"
                    style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                    sizes="(min-width: 1024px) 25vw, 50vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h3 className="heading-card group-hover:text-primary">{service.title}</h3>
                  <p className="text-body-sm mt-2 flex-1">{service.summary}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary">
                    Open page
                    <ArrowUpRightIcon className="size-3.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </SectionShell>
  )
}
