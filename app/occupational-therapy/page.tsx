import type { Metadata } from "next"
import { ServiceView } from "@/components/clinic/service-view"
import { getService } from "@/lib/clinic-content"

const service = getService("occupational-therapy")

export const metadata: Metadata = {
  title: service.title,
  description: service.summary,
}

export default function Page() {
  return <ServiceView service={service} />
}
