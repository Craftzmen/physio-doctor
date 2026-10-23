import type { StaticImageData } from "next/image"

import clinicEntrance from "@/app/assets/images/photos/clinic-entrance.jpg"
import clinicReception from "@/app/assets/images/photos/clinic-reception.jpg"
import clinicSignBoard from "@/app/assets/images/photos/clinic-sign-board.jpg"
import clinicSignVertical from "@/app/assets/images/photos/clinic-sign-vertical.jpg"
import clinicStorefront from "@/app/assets/images/photos/clinic-storefront.jpg"
import clinicStorefrontWide from "@/app/assets/images/photos/clinic-storefront-wide.jpg"

import type { PhotoKey } from "@/lib/clinic-content"

export type ClinicPhoto = {
  src: StaticImageData
  alt: string
  objectPosition?: string
}

export const clinicPhotos: Record<PhotoKey, ClinicPhoto> = {
  movement: {
    src: clinicStorefrontWide,
    alt: "Physiodoctor clinic storefront on the street in Valencia, Lahore",
    objectPosition: "50% 38%",
  },
  hands: {
    src: clinicSignBoard,
    alt: "Illuminated Physio Doctor sign listing sports rehab, pediatric, and neuro services",
    objectPosition: "50% 42%",
  },
  stairs: {
    src: clinicEntrance,
    alt: "Glass entrance and steps up to the Physiodoctor clinic reception",
    objectPosition: "50% 52%",
  },
  desk: {
    src: clinicReception,
    alt: "Reception desk with the Physiodoctor logo at Valencia Health Clinic",
    objectPosition: "50% 42%",
  },
}

export const galleryPhotos = {
  hero: {
    src: clinicStorefrontWide,
    alt: "Physiodoctor physiotherapy clinic at night with illuminated purple signage",
    objectPosition: "50% 36%",
  },
  stretch: {
    src: clinicEntrance,
    alt: "Entrance to the clinic with glass doors and reception visible inside",
    objectPosition: "50% 48%",
  },
  studio: {
    src: clinicReception,
    alt: "Welcoming reception area inside the clinic",
    objectPosition: "50% 44%",
  },
  therapy: {
    src: clinicSignBoard,
    alt: "Clinic sign showing Physio Doctor services and consulting doctors",
    objectPosition: "50% 40%",
  },
  running: {
    src: clinicStorefront,
    alt: "Street-level view of the physiotherapy clinic storefront",
    objectPosition: "50% 38%",
  },
  desk: clinicPhotos.desk,
  hands: clinicPhotos.hands,
  stairs: clinicPhotos.stairs,
  sign: {
    src: clinicSignVertical,
    alt: "Vertical clinic sign with physiotherapy branding and anatomy graphic",
    objectPosition: "50% 32%",
  },
} as const satisfies Record<string, ClinicPhoto>

export const clinicGalleryStrip: ClinicPhoto[] = [
  galleryPhotos.hero,
  galleryPhotos.stretch,
  galleryPhotos.studio,
  galleryPhotos.therapy,
  galleryPhotos.sign,
  galleryPhotos.running,
]

export const serviceCardPhoto: Record<string, keyof typeof galleryPhotos> = {
  physiotherapy: "hero",
  chiropractic: "stairs",
  osteopathy: "sign",
  acupuncture: "studio",
  pediatric: "stretch",
  "speech-therapy": "therapy",
  neurological: "hands",
  "occupational-therapy": "desk",
  "behavioral-therapy": "studio",
  nutrition: "desk",
  "home-visits": "running",
}
