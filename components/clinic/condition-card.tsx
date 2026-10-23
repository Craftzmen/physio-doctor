import Image from "next/image"
import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import type { ConditionImage } from "@/lib/condition-images"
import { getWhatsAppHref } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

type ConditionCardProps = {
  id: string
  title: string
  text: string
  image: ConditionImage
  className?: string
  as?: "article" | "div"
  linkToAnchor?: boolean
}

export function ConditionCard({
  id,
  title,
  text,
  image,
  className,
  as: Tag = "article",
  linkToAnchor = false,
}: ConditionCardProps) {
  const whatsappHref = getWhatsAppHref({
    message: `Hello, I would like to ask about ${title} before booking at Physiodoctor Physiotherapy Clinic.`,
  })

  return (
    <Tag
      id={linkToAnchor ? undefined : id}
      className={cn(
        "group scroll-mt-24 overflow-hidden rounded-2xl border border-border/80 bg-white shadow-sm shadow-black/[0.04] transition hover:border-primary/25 hover:shadow-md",
        className
      )}
    >
      <div className="flex h-full flex-col md:min-h-[17.5rem] md:flex-row">
        <div className="relative aspect-[3/2] shrink-0 bg-muted/30 md:aspect-auto md:w-[min(100%,14.5rem)] md:min-h-[17.5rem] lg:w-[15.75rem]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            style={image.objectPosition ? { objectPosition: image.objectPosition } : undefined}
            sizes="(min-width: 768px) 240px, 100vw"
          />
        </div>
        <div className="flex flex-1 flex-col p-5 md:p-6">
          <p className="text-[0.6875rem] font-semibold uppercase tracking-wider text-primary">Condition guide</p>
          <h2 className="mt-2 text-lg font-semibold leading-snug text-foreground">{title}</h2>
          <p className="text-body mt-3 flex-1 text-pretty text-[0.9375rem] leading-relaxed">{text}</p>
          <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/80 pt-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#128C7E] hover:underline"
            >
              Ask on WhatsApp
              <ArrowUpRightIcon className="size-3.5" aria-hidden />
            </a>
            {linkToAnchor ? (
              <Link href={`/conditions#${id}`} className="text-sm font-medium text-primary hover:underline">
                Full guide
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </Tag>
  )
}
