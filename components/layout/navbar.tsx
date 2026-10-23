"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  ClockIcon,
  MailIcon,
  MenuIcon,
  PhoneIcon,
  WalletIcon,
} from "lucide-react"

import { BrandLogo } from "@/components/layout/brand-logo"
import { WhatsAppButton, WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { getWhatsAppHref, mainNav, siteConfig } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`)
  const whatsappHref = getWhatsAppHref()

  return (
    <header className="sticky top-0 z-40 bg-white">
      <div className="hidden border-b border-border bg-muted/40 md:block">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-3.5 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <ClockIcon className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="font-medium text-foreground">Hours:</span> {siteConfig.hours}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <WalletIcon className="size-3.5 shrink-0 text-primary" aria-hidden />
              <span>
                <span className="font-medium text-foreground">Consultation:</span> {siteConfig.consultationFee}
              </span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={siteConfig.emailMailto}
              className="inline-flex items-center gap-1.5 hover:text-primary"
            >
              <MailIcon className="size-3.5 shrink-0" aria-hidden />
              {siteConfig.email}
            </a>
            <a href={siteConfig.phoneTel} className="inline-flex items-center gap-1.5 hover:text-primary">
              <PhoneIcon className="size-3.5 shrink-0" aria-hidden />
              {siteConfig.phone}
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-[#128C7E] hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <nav
        aria-label="Primary"
        className="mx-auto flex h-[3.75rem] max-w-7xl items-center gap-2 px-5 lg:h-16 lg:gap-4"
      >
        <BrandLogo size="md" className="shrink-0" />
        <ul className="hidden min-w-0 flex-1 items-center justify-center gap-3 md:flex lg:gap-5">
          {mainNav.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "whitespace-nowrap text-sm font-medium transition-colors",
                  isActive(item.href) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-auto flex shrink-0 items-center gap-2">
          <WhatsAppButtonShadcn size="sm" className="hidden md:inline-flex" label="Book on WhatsApp" />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden" aria-label="Open menu">
                <MenuIcon className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-[min(100vw,20rem)] flex-col gap-0 p-0 sm:max-w-xs">
              <SheetHeader className="border-b border-border bg-background px-5 py-4 pr-14 text-left">
                <SheetTitle className="text-base font-semibold">Menu</SheetTitle>
                <SheetDescription className="sr-only">Site navigation and clinic contact details</SheetDescription>
              </SheetHeader>
              <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 py-4">
                <ul className="space-y-0.5">
                  {mainNav.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-md px-3 py-3 text-base font-medium hover:bg-muted",
                            isActive(item.href) && "bg-primary/10 text-primary"
                          )}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 space-y-3 rounded-lg border border-border bg-muted/40 p-4 text-sm">
                  <p className="flex items-start gap-2">
                    <ClockIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="font-medium text-foreground">Hours:</span> {siteConfig.hours}
                    </span>
                  </p>
                  <p className="flex items-start gap-2">
                    <WalletIcon className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                    <span>
                      <span className="font-medium text-foreground">Consultation:</span> {siteConfig.consultationFee}
                    </span>
                  </p>
                  <a href={siteConfig.phoneTel} className="flex items-center gap-2 hover:text-primary">
                    <PhoneIcon className="size-4 shrink-0" aria-hidden />
                    {siteConfig.phone}
                  </a>
                  <a href={siteConfig.emailMailto} className="flex items-center gap-2 break-all hover:text-primary">
                    <MailIcon className="size-4 shrink-0" aria-hidden />
                    {siteConfig.email}
                  </a>
                </div>
                <div className="mt-5 pb-2">
                  <WhatsAppButton className="w-full" label="Book on WhatsApp" />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
