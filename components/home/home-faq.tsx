"use client"

import { CircleHelpIcon } from "lucide-react"

import { WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"
import { SectionHeader } from "@/components/layout/section-header"
import { SectionShell } from "@/components/layout/section-shell"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { homeFaqs } from "@/lib/home-content"

export function HomeFaq() {
  return (
    <SectionShell>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div>
          <SectionHeader
            icon={CircleHelpIcon}
            kicker="FAQ"
            title="Before you write to us"
            description="Sudden or severe symptoms should go to emergency services, not a routine clinic visit."
          />
          <p className="text-body mt-6 hidden max-w-md lg:block">
            Not sure which department to pick? Mention physiotherapy in your WhatsApp message and describe your goal —
            intake can route you to the right clinician.
          </p>
          <WhatsAppButtonShadcn className="mt-6 hidden lg:inline-flex" label="Book on WhatsApp" />
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="rounded-lg border border-border bg-white px-1">
          {homeFaqs.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`} className="border-border px-3">
              <AccordionTrigger className="py-4 text-left text-base font-medium hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-body pb-4">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </SectionShell>
  )
}
