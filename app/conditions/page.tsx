import type { Metadata } from "next"
import { BookOpenIcon } from "lucide-react"

import { ConditionCard } from "@/components/clinic/condition-card"
import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { conditions } from "@/lib/clinic-content"
import { getConditionImage } from "@/lib/condition-images"
import { galleryPhotos } from "@/lib/remote-images"
import { getWhatsAppHref } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Conditions",
  description: "Condition guides for patients of Physiodoctor Physiotherapy Clinic.",
}

export default function ConditionsPage() {
  const photo = galleryPhotos.hands

  return (
    <>
      <PageHero
        icon={BookOpenIcon}
        kicker="Conditions"
        title="Guides before your visit"
        description="Not a diagnosis. Sudden severe symptoms need emergency care."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Conditions" }]}
        image={{ src: photo.src, alt: photo.alt, objectPosition: photo.objectPosition }}
        variant="compact"
      />
      <SectionShell tint>
        <p className="text-body mx-auto max-w-2xl text-center text-pretty">
          Each card links to a short topic and a matching photo from clinic care — pick what sounds closest and message us
          on WhatsApp with your questions.
        </p>
        <div className="mt-10 grid gap-5 lg:grid-cols-2 lg:gap-6">
          {conditions.map((item) => (
            <ConditionCard
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              image={getConditionImage(item.id)}
            />
          ))}
        </div>
        <p className="text-body mt-10 text-center">
          <a
            href={getWhatsAppHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-primary hover:underline"
          >
            Book on WhatsApp
          </a>
        </p>
      </SectionShell>
    </>
  )
}
