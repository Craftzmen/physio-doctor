import Image from "next/image"
import { SparklesIcon } from "lucide-react"

import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { treatmentCapabilityPhotos } from "@/lib/remote-images"

export function HomeClinicTreatments() {
  return (
    <SectionShell tint id="equipment">
      <SectionHeader
        icon={SparklesIcon}
        kicker="On-site equipment"
        title="Treatments you can see in the room"
        description="Real tools at Physiodoctor — not stock photos. Your clinician picks what fits after assessment."
      />
      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {treatmentCapabilityPhotos.map(({ title, photo }) => (
          <li
            key={title}
            className="group overflow-hidden rounded-xl border border-border bg-white shadow-sm shadow-black/[0.03] transition hover:border-primary/25 hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-muted/20">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
                sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
              />
            </div>
            <p className="px-4 py-3.5 text-sm font-semibold leading-snug text-foreground">{title}</p>
          </li>
        ))}
      </ul>
    </SectionShell>
  )
}
