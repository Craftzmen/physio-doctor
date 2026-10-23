import Link from "next/link"

import { BrandLogo } from "@/components/layout/brand-logo"
import { conditionLinks, getWhatsAppHref, hasEmail, hasPhone, policyLinks, serviceLinks, siteConfig } from "@/lib/site-nav"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-[hsl(222_47%_11%)] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.2fr_2fr]">
        <div>
          <BrandLogo tone="dark" />
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">{siteConfig.tagline}</p>
          <ul className="mt-4 space-y-1 text-sm text-white/75">
            {siteConfig.addressLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
            {hasPhone ? (
              <li>
                <a href={siteConfig.phoneTel} className="hover:text-white">
                  {siteConfig.phone}
                </a>
              </li>
            ) : null}
            {hasEmail ? (
              <li>
                <a href={siteConfig.emailMailto} className="break-all hover:text-white">
                  {siteConfig.email}
                </a>
              </li>
            ) : null}
            {siteConfig.hours ? <li className="text-white/55">Hours: {siteConfig.hours}</li> : null}
            <li className="text-white/55">Consultation: {siteConfig.consultationFee}</li>
            <li>
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/75 hover:text-white"
              >
                WhatsApp {siteConfig.whatsapp}
              </a>
            </li>
          </ul>
        </div>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium text-white/45">Services</p>
            <ul className="mt-3 space-y-2">
              {serviceLinks.slice(0, 7).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-white/45">Conditions</p>
            <ul className="mt-3 space-y-2">
              {conditionLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium text-white/45">Site</p>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={getWhatsAppHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/65 hover:text-white"
                >
                  Book on WhatsApp
                </a>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/65 hover:text-white">
                  Contact
                </Link>
              </li>
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/65 hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 px-5 py-4 text-center text-xs text-white/40">
        © {new Date().getFullYear()} {siteConfig.name}. Assessment before treatment. No online payments.
      </p>
    </footer>
  )
}
