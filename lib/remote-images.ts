import type { StaticImageData } from "next/image"

import consultation from "@/app/assets/images/photos/consultation.jpg"
import handsCare from "@/app/assets/images/photos/hands-care.jpg"
import movement from "@/app/assets/images/photos/movement.jpg"
import outdoorWalk from "@/app/assets/images/photos/outdoor-walk.jpg"
import running from "@/app/assets/images/photos/running.jpg"
import stretch from "@/app/assets/images/photos/stretch.jpg"
import studio from "@/app/assets/images/photos/studio.jpg"
import therapySession from "@/app/assets/images/photos/therapy-session.jpg"

import type { PhotoKey } from "@/lib/clinic-content"

export const clinicPhotos: Record<PhotoKey, { src: StaticImageData; alt: string }> = {
  movement: { src: movement, alt: "A trainer guiding a person through a floor exercise" },
  hands: { src: handsCare, alt: "Hands on a person's upper back during treatment" },
  stairs: { src: outdoorWalk, alt: "A person climbing outdoor stairs in running shoes" },
  desk: { src: consultation, alt: "Hands at a laptop beside a stethoscope during planning" },
}

export const galleryPhotos = {
  hero: { src: movement, alt: "A clinician guiding exercise on a gym floor" },
  stretch: { src: stretch, alt: "A person stretching on a mat in a bright room" },
  studio: { src: studio, alt: "People training in a physiotherapy studio" },
  therapy: { src: therapySession, alt: "A clinician speaking with a patient in a treatment room" },
  running: { src: running, alt: "A runner on a trail during recovery training" },
  desk: { src: consultation, alt: "Planning notes at a desk with clinical tools" },
  hands: clinicPhotos.hands,
  stairs: clinicPhotos.stairs,
} as const

export const serviceCardPhoto: Record<string, keyof typeof galleryPhotos> = {
  physiotherapy: "hero",
  chiropractic: "stairs",
  osteopathy: "hands",
  acupuncture: "therapy",
  pediatric: "stretch",
  "speech-therapy": "therapy",
  neurological: "studio",
  "occupational-therapy": "hands",
  "behavioral-therapy": "therapy",
  nutrition: "desk",
  "home-visits": "running",
}
