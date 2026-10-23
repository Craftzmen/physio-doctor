export const siteConfig = {
  name: "Physiodoctor Physiotherapy Clinic",
  tagline: "Hands-on care for movement, pain, and recovery",
  description:
    "Physiodoctor Physiotherapy Clinic offers physiotherapy, manual therapy, pediatric care, neurological rehab, speech, and related support. A clinician decides what is appropriate after an assessment.",
  phone: "03059185089",
  phoneTel: "tel:+923059185089",
  email: "doctoraum123@gmail.com",
  emailMailto: "mailto:doctoraum123@gmail.com",
  whatsapp: "03059185089",
  whatsappTel: "923059185089",
  addressLines: [] as string[],
  hours: "12:00 PM – 10:30 PM",
  consultationFee: "PKR 1,000",
} as const

export const hasPhone = siteConfig.phoneTel.length > 0
export const hasEmail = siteConfig.emailMailto.length > 0
export const hasWhatsApp = siteConfig.whatsappTel.length > 0
export const hasVisitDetails =
  siteConfig.addressLines.length > 0 || siteConfig.hours.length > 0 || hasPhone || hasEmail

export function getWhatsAppHref(options?: { message?: string }) {
  const text = encodeURIComponent(
    options?.message ?? `Hello, I would like to book a consultation at ${siteConfig.name}.`
  )
  if (hasWhatsApp) {
    return `https://wa.me/${siteConfig.whatsappTel}?text=${text}`
  }
  return `/contact`
}

export type NavItem = { href: string; label: string }

export const mainNav: NavItem[] = [
  { href: "/treatments", label: "Treatments" },
  { href: "/conditions", label: "Conditions" },
  { href: "/team", label: "Team" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export const serviceLinks: NavItem[] = [
  { href: "/physiotherapy", label: "Physiotherapy" },
  { href: "/chiropractic", label: "Chiropractic" },
  { href: "/osteopathy", label: "Osteopathy" },
  { href: "/acupuncture", label: "Acupuncture" },
  { href: "/pediatric", label: "Pediatric physiotherapy" },
  { href: "/speech-therapy", label: "Speech therapy" },
  { href: "/neurological", label: "Neurological rehab" },
  { href: "/occupational-therapy", label: "Occupational therapy" },
  { href: "/behavioral-therapy", label: "Behavioral therapy" },
  { href: "/nutrition", label: "Nutrition" },
  { href: "/home-visits", label: "Home visits" },
]

export const conditionLinks: NavItem[] = [
  { href: "/conditions#frozen-shoulder", label: "Frozen shoulder" },
  { href: "/conditions#spine", label: "Spine" },
  { href: "/conditions#chest-pain", label: "Chest pain" },
  { href: "/conditions#facial-palsy", label: "Facial palsy" },
  { href: "/conditions#hip-pain", label: "Hip pain" },
  { href: "/conditions#arthritis", label: "Arthritis" },
  { href: "/conditions#posture", label: "Posture" },
  { href: "/conditions#wrist", label: "Wrist" },
  { href: "/conditions#sciatica", label: "Sciatica" },
  { href: "/conditions#slipped-disc", label: "Slipped disc" },
  { href: "/conditions#neck", label: "Neck" },
  { href: "/conditions#stroke", label: "Stroke" },
]

export const policyLinks: NavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
]
