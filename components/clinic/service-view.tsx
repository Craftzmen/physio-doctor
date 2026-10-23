import Image from "next/image"
import Link from "next/link"
import { CheckIcon, StethoscopeIcon } from "lucide-react"

import { PageHero } from "@/components/layout/page-hero"
import { SectionShell } from "@/components/layout/section-shell"
import { services } from "@/lib/clinic-content"
import { clinicPhotos, galleryPhotos, serviceCardPhoto } from "@/lib/remote-images"
import { getWhatsAppHref } from "@/lib/site-nav"
import { WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"

export function ServiceView({ service }: { service: (typeof services)[number] }) {
  const key = serviceCardPhoto[service.slug] ?? "hero"
  const heroPhoto = galleryPhotos[key]
  const inlinePhoto = clinicPhotos[service.photo]
  const related = services.filter((s) => s.slug !== service.slug && s.featured).slice(0, 4)

  return (
    <article>
      <PageHero
        icon={StethoscopeIcon}
        kicker="Treatment"
        title={service.title}
        description={service.lead}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Treatments", href: "/treatments" },
          { label: service.title },
        ]}
        primaryAction={{
          label: "Book on WhatsApp",
          href: getWhatsAppHref({
            message: `Hello, I would like to book ${service.title} at Physiodoctor Physiotherapy Clinic.`,
          }),
        }}
        image={{
          src: heroPhoto.src,
          alt: heroPhoto.alt,
          objectPosition: heroPhoto.objectPosition,
        }}
      />

      <SectionShell tint>
        <div className="grid gap-12 lg:grid-cols-[1fr_17rem] lg:items-start">
          <div className="space-y-10">
            <section className="grid gap-6 md:grid-cols-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <Image
                  src={inlinePhoto.src}
                  alt={inlinePhoto.alt}
                  fill
                  className="object-cover"
                  style={inlinePhoto.objectPosition ? { objectPosition: inlinePhoto.objectPosition } : undefined}
                  sizes="400px"
                />
              </div>
              <div className="rounded-lg border border-border bg-white p-5">
                <h2 className="text-lg font-semibold">Who it is for</h2>
                <p className="text-body mt-3">{service.audience}</p>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-semibold">What the visit covers</h2>
              <ul className="mt-4 space-y-2">
                {service.covers.map((item) => (
                  <li key={item} className="flex gap-3 text-body-sm">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-semibold">What to bring</h2>
              <ul className="mt-4 space-y-2">
                {service.bring.map((item) => (
                  <li key={item} className="flex gap-3 text-body-sm">
                    <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-6 rounded-lg border border-border bg-white p-5 lg:sticky lg:top-24">
            <div>
              <p className="text-sm font-semibold text-foreground">Related departments</p>
              <ul className="mt-3 space-y-2">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link href={`/${item.slug}`} className="text-body-sm font-medium text-primary hover:underline">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-body-sm">
              Unsure which room fits?{" "}
              <Link href="/physiotherapy" className="font-medium text-primary hover:underline">
                Start with physiotherapy
              </Link>
              .
            </p>
            <WhatsAppButtonShadcn
              className="w-full"
              label="Book on WhatsApp"
              message={`Hello, I would like to book ${service.title} at Physiodoctor Physiotherapy Clinic.`}
            />
          </aside>
        </div>
      </SectionShell>
    </article>
  )
}
