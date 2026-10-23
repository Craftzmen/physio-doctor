"use client"

import { useEffect } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-start justify-center gap-6 px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-widest text-primary">Something went wrong</p>
      <h1 className="heading-section text-ink">We could not load this page.</h1>
      <p className="text-lg text-muted-foreground">
        Try again. If the problem continues, stop the dev server, delete the{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-base">.next</code> folder, and run{" "}
        <code className="rounded bg-muted px-1.5 py-0.5 text-base">npm run dev</code> again.
      </p>
      <div className="flex flex-wrap gap-3">
        <Button type="button" onClick={() => reset()}>
          Try again
        </Button>
        <Button variant="outline" asChild>
          <Link href="/">Back to home</Link>
        </Button>
      </div>
    </div>
  )
}
