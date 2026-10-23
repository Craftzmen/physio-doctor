import Image from "next/image"
import { CalendarPlusIcon, CheckIcon } from "lucide-react"

import { BookViaWhatsApp } from "@/components/clinic/book-via-whatsapp"
import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import { visitNotes } from "@/lib/home-content"
import { galleryPhotos } from "@/lib/remote-images"

export function HomeAppointment() {
  const visitPhoto = galleryPhotos.sign

  return (
    <SectionShell id="appointment" tint>
      <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeader
            icon={CalendarPlusIcon}
            kicker="Booking"
            title="Arrange a visit on WhatsApp"
            description="Message the clinic with your details. No forms or online payment on this site."
          />
          <ul className="mt-8 space-y-3">
            {visitNotes.map((note) => (
              <li key={note} className="flex gap-3 text-body-sm">
                <CheckIcon className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                <span>{note}</span>
              </li>
            ))}
          </ul>
          <div className="relative mt-8 hidden aspect-[16/10] overflow-hidden rounded-xl ring-1 ring-black/[0.05] lg:block">
            <Image
              src={visitPhoto.src}
              alt={visitPhoto.alt}
              fill
              className="object-cover"
              style={visitPhoto.objectPosition ? { objectPosition: visitPhoto.objectPosition } : undefined}
              sizes="(min-width: 1024px) 40vw, 0px"
            />
          </div>
        </div>
        <BookViaWhatsApp />
      </div>
    </SectionShell>
  )
}
