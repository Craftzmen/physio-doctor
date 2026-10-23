"use client"

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body className="bg-white font-sans text-slate-900 antialiased">
        <div className="mx-auto flex min-h-screen max-w-2xl flex-col items-start justify-center gap-6 px-6 py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#2563EB]">Application error</p>
          <h1 className="text-3xl font-bold tracking-tight">Physiodoctor Physiotherapy Clinic</h1>
          <p className="text-lg text-slate-600">
            The site hit an unexpected error. Refresh the page or restart the development server.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            className="rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}
