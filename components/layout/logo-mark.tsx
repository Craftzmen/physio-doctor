import Image from "next/image"

import logoMark from "@/app/assets/images/photos/logo.png"
import { cn } from "@/lib/utils"

type LogoMarkProps = {
  size?: number
  className?: string
}

export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <Image
      src={logoMark}
      alt=""
      width={size}
      height={size}
      className={cn("shrink-0 rounded-full", className)}
      aria-hidden
      priority
    />
  )
}
