import type { Metadata } from "next"
import { ClockIcon, ContactIcon, MailIcon, PhoneIcon, WalletIcon } from "lucide-react"

import { WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"
import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { galleryPhotos } from "@/lib/remote-images"
import { getWhatsAppHref, siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} by phone, email, or WhatsApp.`,
}

export default function ContactPage() {
  const whatsappHref = getWhatsAppHref()
  const clinicPhoto = galleryPhotos.stretch

  return (
    <>
      <PageHero
        icon={ContactIcon}
        kicker="Contact"
        title="Clinic details"
        description={`Reach us during clinic hours. Consultation fee: ${siteConfig.consultationFee}.`}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
        image={{
          src: clinicPhoto.src,
          alt: clinicPhoto.alt,
          objectPosition: clinicPhoto.objectPosition,
        }}
      />
      <SectionShell>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <div className="flex gap-4 rounded-lg border border-border p-4">
              <PhoneIcon className="size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold">Phone / WhatsApp</p>
                <a href={siteConfig.phoneTel} className="text-body-sm mt-1 block text-primary hover:underline">
                  {siteConfig.phone}
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-body-sm mt-1 inline-block font-medium text-[#128C7E] hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border p-4">
              <MailIcon className="size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold">Email</p>
                <a href={siteConfig.emailMailto} className="text-body-sm mt-1 inline-block text-primary hover:underline">
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border p-4">
              <ClockIcon className="size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold">Clinic hours</p>
                <p className="text-body-sm mt-1">{siteConfig.hours}</p>
              </div>
            </div>
            <div className="flex gap-4 rounded-lg border border-border p-4">
              <WalletIcon className="size-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-semibold">Consultation charges</p>
                <p className="text-body-sm mt-1">{siteConfig.consultationFee} per visit (confirm when you book).</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg border border-primary/20 bg-primary/5 p-6">
            <p className="text-lg font-semibold">Book a visit</p>
            <p className="text-body mt-2">
              Send an appointment request or message on WhatsApp with your preferred day and what you need help with.
            </p>
            <div className="mt-5">
              <WhatsAppButtonShadcn size="default" label="Book on WhatsApp" />
            </div>
          </div>
        </div>
      </SectionShell>
    </>
  )
}
