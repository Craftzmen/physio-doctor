import type { Metadata } from "next"

import { HomeAppointment } from "@/components/home/home-appointment"
import { HomeHighlights } from "@/components/home/home-highlights"
import { HomeConditions } from "@/components/home/home-conditions"
import { HomeFaq } from "@/components/home/home-faq"
import { HomeHero } from "@/components/home/home-hero"
import { HomeProcess } from "@/components/home/home-process"
import { HomeServices } from "@/components/home/home-services"
import { HomeTestimonials } from "@/components/home/home-testimonials"
import { siteConfig } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: { absolute: "Physiodoctor Physiotherapy Clinic | Movement care and rehabilitation" },
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeHighlights />
      <HomeServices />
      <HomeProcess />
      <HomeConditions />
      <HomeTestimonials />
      <HomeFaq />
      <HomeAppointment />
    </>
  )
}
