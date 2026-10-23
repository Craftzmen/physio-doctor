import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import type { ServicePage } from "@/lib/clinic-content"
import type { ClinicPhoto } from "@/lib/remote-images"
import { cn } from "@/lib/utils"

type ServiceDepartmentCardProps = {
  service: ServicePage
  photo: ClinicPhoto
  sizes: string
  className?: string
}

export function ServiceDepartmentCard({ service, photo, sizes, className }: ServiceDepartmentCardProps) {
  return (
    <Link
      href={`/${service.slug}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm shadow-black/[0.04] transition hover:border-primary/35 hover:shadow-lg hover:shadow-primary/[0.06]",
        className
      )}
    >
      <div className="relative aspect-[5/4] overflow-hidden bg-muted/25 sm:aspect-[4/3]">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
          style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
          sizes={sizes}
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent opacity-90 transition group-hover:from-black/55"
          aria-hidden
        />
        <div className="absolute inset-x-0 bottom-0 p-4 pt-12">
          <h2 className="text-lg font-semibold leading-snug text-white drop-shadow-sm">{service.title}</h2>
        </div>
        <span className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-sm transition group-hover:bg-primary group-hover:border-primary/40">
          <ArrowUpRightIcon className="size-4" aria-hidden />
        </span>
      </div>
      <div className="flex flex-1 flex-col p-4 pt-3.5">
        <p className="text-body-sm line-clamp-3 flex-1">{service.summary}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary">
          View department
          <ArrowUpRightIcon className="size-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  )
}
