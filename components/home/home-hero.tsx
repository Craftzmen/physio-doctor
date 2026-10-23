import Image from "next/image"
import { CalendarCheckIcon, ClockIcon, PhoneIcon, StethoscopeIcon, WalletIcon } from "lucide-react"

import { WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"
import { Button } from "@/components/ui/button"
import { clinicStats, heroContent } from "@/lib/home-content"
import { galleryPhotos } from "@/lib/remote-images"
import { siteConfig } from "@/lib/site-nav"

const highlights = [
  { icon: StethoscopeIcon, label: heroContent.pills[0] },
  { icon: ClockIcon, label: siteConfig.hours },
  { icon: WalletIcon, label: siteConfig.consultationFee },
  { icon: CalendarCheckIcon, label: heroContent.pills[1] },
]

const backgroundPhoto = galleryPhotos.hero

export function HomeHero() {
  return (
    <section className="relative isolate min-h-[min(100svh,52rem)] overflow-hidden border-b border-border">
      <Image
        src={backgroundPhoto.src}
        alt=""
        fill
        priority
        className="object-cover"
        style={{ objectPosition: "62% 42%" }}
        sizes="100vw"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/78 to-slate-950/35"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-slate-900/25"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_15%_50%,rgba(15,23,42,0.55),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto flex min-h-[min(100svh,52rem)] max-w-7xl flex-col justify-center px-5 py-16 md:py-20 lg:py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
            {heroContent.kicker}
          </p>
          <h1 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.1] tracking-tight text-white sm:text-[2.35rem] md:text-[2.75rem] lg:text-[3.1rem]">
            {heroContent.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">
            {heroContent.lead}
          </p>

          <ul className="mt-7 flex max-w-xl flex-wrap gap-2">
            {highlights.map(({ icon: Icon, label }) => (
              <li key={label}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-[0.8125rem] font-medium text-white/95 backdrop-blur-sm">
                  <Icon className="size-3.5 shrink-0 text-emerald-300" aria-hidden />
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <WhatsAppButtonShadcn size="lg" label="Book on WhatsApp" />
            <Button
              variant="outline"
              size="lg"
              className="gap-2 border-white/25 bg-white/10 text-white hover:bg-white/15 hover:text-white"
              asChild
            >
              <a href={siteConfig.phoneTel} aria-label={`Call ${siteConfig.phone}`}>
                <PhoneIcon className="size-4" aria-hidden />
                Call clinic
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/75">
            <a href={siteConfig.phoneTel} className="font-medium text-white hover:text-emerald-200">
              {siteConfig.phone}
            </a>
            <span> · same number on WhatsApp</span>
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-3 lg:mt-14 lg:max-w-3xl">
          <li className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <p className="text-2xl font-semibold tabular-nums leading-none text-white">{clinicStats[0].value}</p>
            <p className="mt-1.5 text-sm font-medium text-white/95">{clinicStats[0].label}</p>
            <p className="mt-1 text-xs text-white/70">{siteConfig.consultationFee} consultation</p>
          </li>
          <li className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Hours</p>
            <p className="mt-2 text-sm font-semibold leading-snug text-white">{siteConfig.hours}</p>
          </li>
          <li className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md sm:col-span-1">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300">Location</p>
            <p className="mt-2 text-sm font-medium leading-snug text-white/95">
              Valencia, Lahore — the clinic you see in the photo
            </p>
          </li>
        </ul>
      </div>
    </section>
  )
}
