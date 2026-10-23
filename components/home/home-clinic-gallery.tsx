import Image from "next/image"
import { MapPinIcon } from "lucide-react"

import { SectionHeader } from "@/components/layout/section-header"
import { clinicGalleryStrip } from "@/lib/remote-images"
import { cn } from "@/lib/utils"

export function HomeClinicGallery() {
  const [feature, ...rest] = clinicGalleryStrip

  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12 md:py-14">
        <SectionHeader
          icon={MapPinIcon}
          kicker="The clinic"
          title="A real place you can visit"
          description="Photos from our Valencia location — the same entrance, reception, and signage you will see when you arrive."
        />
        <div className="mt-8 grid gap-2 sm:gap-3 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2">
          <ClinicTile photo={feature} className="md:col-span-2 lg:row-span-2" aspect="aspect-[16/11] lg:aspect-auto lg:min-h-[22rem]" sizes="(min-width: 1024px) 40vw, 100vw" />
          {rest.map((photo) => (
            <ClinicTile key={photo.alt} photo={photo} aspect="aspect-[4/3]" sizes="(min-width: 1024px) 20vw, 50vw" />
          ))}
        </div>
      </div>
    </section>
  )
}

function ClinicTile({
  photo,
  className,
  aspect,
  sizes,
}: {
  photo: (typeof clinicGalleryStrip)[number]
  className?: string
  aspect: string
  sizes: string
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl bg-muted/25 ring-1 ring-black/[0.05]",
        aspect,
        className
      )}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        className="object-cover transition duration-500 hover:scale-[1.02]"
        style={photo.objectPosition ? { objectPosition: photo.objectPosition } : undefined}
        sizes={sizes}
      />
    </div>
  )
}
