import { cn } from "@/lib/utils"

type LogoMarkProps = {
  size?: number
  className?: string
}

export function LogoMark({ size = 32, className }: LogoMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("shrink-0", className)}
      aria-hidden
    >
      <rect width="40" height="40" rx="11" fill="url(#pd-mark-gradient)" />
      <path
        d="M20 10v20M14 16h12"
        stroke="white"
        strokeWidth="2.75"
        strokeLinecap="round"
      />
      <path
        d="M11 28c2.8-4.2 6.2-6 9-6s6.2 1.8 9 6"
        stroke="white"
        strokeWidth="2.25"
        strokeLinecap="round"
        opacity="0.92"
      />
      <defs>
        <linearGradient id="pd-mark-gradient" x1="6" y1="4" x2="36" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
