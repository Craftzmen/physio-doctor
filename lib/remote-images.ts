import type { StaticImageData } from "next/image"

import clinicEntrance from "@/app/assets/images/photos/clinic-entrance.jpg"
import clinicReception from "@/app/assets/images/photos/clinic-reception.jpg"
import clinicSignBoard from "@/app/assets/images/photos/clinic-sign-board.jpg"
import clinicSignVertical from "@/app/assets/images/photos/clinic-sign-vertical.jpg"
import clinicStorefront from "@/app/assets/images/photos/clinic-storefront.jpg"
import clinicStorefrontWide from "@/app/assets/images/photos/clinic-storefront-wide.jpg"
import treatmentCupping from "@/app/assets/images/photos/treatment-cupping.jpg"
import treatmentElderlyCare from "@/app/assets/images/photos/treatment-elderly-care.jpg"
import treatmentEms from "@/app/assets/images/photos/treatment-ems.jpg"
import treatmentMobility from "@/app/assets/images/photos/treatment-mobility.jpg"
import treatmentPaediatric from "@/app/assets/images/photos/treatment-paediatric.jpg"
import treatmentTraction from "@/app/assets/images/photos/treatment-traction.jpg"
import treatmentTherasonic from "@/app/assets/images/photos/treatment-therasonic.jpg"

import type { PhotoKey } from "@/lib/clinic-content"

export type ClinicPhoto = {
  src: StaticImageData
  alt: string
  objectPosition?: string
}

export const clinicPhotos: Record<PhotoKey, ClinicPhoto> = {
  cupping: {
    src: treatmentCupping,
    alt: "Dry and wet cupping cups, silicone sets, and suction tools ready in the treatment room",
    objectPosition: "50% 45%",
  },
  ems: {
    src: treatmentEms,
    alt: "Electrical muscle stimulation unit with electrode pads and sterile acupuncture needles",
    objectPosition: "50% 42%",
  },
  paediatric: {
    src: treatmentPaediatric,
    alt: "Paediatric physiotherapy room with toys, assessment tools, and a child-friendly desk",
    objectPosition: "50% 48%",
  },
  traction: {
    src: treatmentTraction,
    alt: "Mechanical traction unit with treatment table and cervical harness in the clinic",
    objectPosition: "50% 50%",
  },
  therasonic: {
    src: treatmentTherasonic,
    alt: "Therasonic ultrasound therapy devices on a clinic trolley with coupling gel",
    objectPosition: "50% 44%",
  },
  mobility: {
    src: treatmentMobility,
    alt: "Wall-mounted shoulder wheel used for guided mobility exercises",
    objectPosition: "50% 40%",
  },
  elderlyCare: {
    src: treatmentElderlyCare,
    alt: "Wheelchair in the clinic corridor for older patients and mobility support",
    objectPosition: "50% 55%",
  },
}

export const galleryPhotos = {
  ...clinicPhotos,
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
  sign: {
    src: clinicSignVertical,
    alt: "Vertical clinic sign with physiotherapy branding and anatomy graphic",
    objectPosition: "50% 32%",
  },
} as const satisfies Record<string, ClinicPhoto>

export type GalleryPhotoKey = keyof typeof galleryPhotos

export const clinicGalleryStrip: ClinicPhoto[] = [
  galleryPhotos.hero,
  galleryPhotos.stretch,
  galleryPhotos.studio,
  galleryPhotos.therapy,
  galleryPhotos.sign,
  galleryPhotos.running,
]

export const treatmentCapabilityPhotos: { title: string; photo: ClinicPhoto }[] = [
  { title: "Dry and wet cupping", photo: clinicPhotos.cupping },
  { title: "Electrical muscle stimulation", photo: clinicPhotos.ems },
  { title: "Paediatric physiotherapy", photo: clinicPhotos.paediatric },
  { title: "Mechanical traction unit", photo: clinicPhotos.traction },
  { title: "Therasonic therapy", photo: clinicPhotos.therasonic },
  { title: "Mobility exercises", photo: clinicPhotos.mobility },
  { title: "Old age care", photo: clinicPhotos.elderlyCare },
]

export const serviceCardPhoto: Record<string, GalleryPhotoKey> = {
  physiotherapy: "mobility",
  chiropractic: "traction",
  osteopathy: "cupping",
  acupuncture: "ems",
  pediatric: "paediatric",
  "speech-therapy": "paediatric",
  neurological: "elderlyCare",
  "occupational-therapy": "mobility",
  "behavioral-therapy": "paediatric",
  nutrition: "therasonic",
  "home-visits": "elderlyCare",
}
