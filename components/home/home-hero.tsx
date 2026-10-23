import Image from "next/image"
import { CalendarCheckIcon, ClockIcon, PhoneIcon, StethoscopeIcon, WalletIcon } from "lucide-react"

import { WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"
import { Button } from "@/components/ui/button"
import { clinicStats, heroContent } from "@/lib/home-content"
import { galleryPhotos } from "@/lib/remote-images"
import { siteConfig } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

const highlights = [
  { icon: StethoscopeIcon, label: heroContent.pills[0] },
  { icon: ClockIcon, label: siteConfig.hours },
  { icon: WalletIcon, label: siteConfig.consultationFee },
  { icon: CalendarCheckIcon, label: heroContent.pills[1] },
]

function HeroPhoto({
  src,
  alt,
  className,
  sizes,
  priority,
}: {
  src: (typeof galleryPhotos.hero)["src"]
  alt: string
  className?: string
  sizes: string
  priority?: boolean
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl bg-muted/40 shadow-[0_18px_50px_-12px_rgba(37,99,235,0.18)] ring-1 ring-black/[0.06]",
        className
      )}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes={sizes} priority={priority} />
    </div>
  )
}

export function HomeHero() {
  const leftPhoto = galleryPhotos.hero
  const rightTop = galleryPhotos.stretch
  const rightBottom = galleryPhotos.therapy

  return (
    <section className="relative overflow-hidden border-b border-border bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,hsl(var(--primary)/0.12),transparent_70%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-primary/[0.04] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-primary/[0.04] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-5 py-12 md:py-16 lg:py-[4.25rem]">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,36rem)_minmax(0,1fr)] lg:gap-8 xl:gap-10">
          <div className="relative order-2 hidden min-h-[28rem] lg:order-1 lg:block">
            <HeroPhoto
              src={leftPhoto.src}
              alt={leftPhoto.alt}
              priority
              sizes="(min-width: 1024px) 22vw, 0px"
              className="absolute right-0 top-6 aspect-[4/5] w-[min(100%,17.5rem)] xl:w-[19rem]"
            />
            <div className="absolute bottom-8 left-0 max-w-[10.5rem] rounded-2xl border border-border/60 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
              <p className="text-3xl font-semibold tabular-nums leading-none text-primary">{clinicStats[0].value}</p>
              <p className="mt-1.5 text-sm font-medium text-foreground">{clinicStats[0].label}</p>
              <p className="text-body-sm mt-2">{siteConfig.consultationFee} consultation</p>
            </div>
            <div
              className="pointer-events-none absolute right-8 top-0 size-24 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
          </div>

          <div className="order-1 flex flex-col items-center text-center lg:order-2 lg:px-2">
            <p className="inline-flex items-center rounded-full border border-primary/15 bg-primary/[0.07] px-3.5 py-1 text-xs font-semibold tracking-wide text-primary">
              {heroContent.kicker}
            </p>
            <h1 className="mt-5 text-balance text-[2rem] font-semibold leading-[1.12] tracking-tight text-foreground sm:text-[2.35rem] md:text-[2.65rem] lg:text-[2.75rem] xl:text-[3rem]">
              {heroContent.title}
            </h1>
            <p className="text-body mt-5 max-w-xl text-pretty">{heroContent.lead}</p>

            <ul className="mt-7 flex max-w-xl flex-wrap items-center justify-center gap-2">
              {highlights.map(({ icon: Icon, label }) => (
                <li key={label}>
                  <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/90 px-3 py-1.5 text-[0.8125rem] font-medium text-foreground shadow-sm shadow-black/[0.03]">
                    <Icon className="size-3.5 shrink-0 text-primary" aria-hidden />
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppButtonShadcn size="lg" label="Book on WhatsApp" />
              <Button variant="outline" size="lg" className="gap-2 bg-white/90" asChild>
                <a href={siteConfig.phoneTel} aria-label={`Call ${siteConfig.phone}`}>
                  <PhoneIcon className="size-4" aria-hidden />
                  Call clinic
                </a>
              </Button>
            </div>
            <p className="text-body-sm mt-4">
              <a href={siteConfig.phoneTel} className="font-medium text-foreground hover:text-primary">
                {siteConfig.phone}
              </a>
              <span className="text-muted-foreground"> · same number on WhatsApp</span>
            </p>
          </div>

          <div className="relative order-3 hidden min-h-[28rem] lg:block">
            <HeroPhoto
              src={rightTop.src}
              alt={rightTop.alt}
              sizes="(min-width: 1024px) 18vw, 0px"
              className="absolute left-6 top-0 aspect-square w-[min(100%,11.5rem)] xl:left-10 xl:w-[12.5rem]"
            />
            <HeroPhoto
              src={rightBottom.src}
              alt={rightBottom.alt}
              sizes="(min-width: 1024px) 20vw, 0px"
              className="absolute bottom-4 left-0 aspect-[4/5] w-[min(100%,15.5rem)] xl:w-[17rem]"
            />
            <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-2xl border border-border/70 bg-white px-4 py-3.5 text-left shadow-lg shadow-black/10">
              <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-primary">Hours</p>
              <p className="mt-1 min-w-[10.75rem] text-sm font-semibold leading-snug text-foreground sm:whitespace-nowrap">
                {siteConfig.hours}
              </p>
            </div>
            <div
              className="pointer-events-none absolute bottom-12 right-0 size-28 rounded-full bg-primary/10 blur-2xl"
              aria-hidden
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:hidden">
          <HeroPhoto
            src={leftPhoto.src}
            alt={leftPhoto.alt}
            priority
            sizes="50vw"
            className="aspect-[4/5]"
          />
          <div className="flex flex-col gap-3 sm:gap-4">
            <HeroPhoto src={rightTop.src} alt={rightTop.alt} sizes="50vw" className="aspect-square flex-1" />
            <HeroPhoto src={rightBottom.src} alt={rightBottom.alt} sizes="50vw" className="aspect-[5/4] flex-1" />
          </div>
        </div>
      </div>
    </section>
  )
}
