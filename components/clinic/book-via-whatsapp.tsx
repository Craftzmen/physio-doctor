import { MessageCircleIcon } from "lucide-react"

import { WhatsAppButtonShadcn } from "@/components/layout/whatsapp-button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { siteConfig } from "@/lib/site-nav"

const bookingTips = [
  "Your name and the body area or goal",
  "How long symptoms have been going on",
  "A day or time that usually works for you",
  "Which treatment you are interested in (or say you are unsure)",
]

export function BookViaWhatsApp() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircleIcon className="size-5 text-[#128C7E]" aria-hidden />
          Book on WhatsApp
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-body-sm text-muted-foreground">
          Visits are arranged in chat — there is no booking form on this site. Send a message and the clinic will reply
          to confirm a time.
        </p>
        <div>
          <p className="text-sm font-medium text-foreground">Include in your message:</p>
          <ul className="mt-2 space-y-2">
            {bookingTips.map((tip) => (
              <li key={tip} className="text-body-sm text-muted-foreground">
                · {tip}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex-col items-stretch gap-2 border-t border-border pt-4">
        <WhatsAppButtonShadcn size="lg" className="w-full" label="Message on WhatsApp" />
        <p className="text-center text-xs text-muted-foreground">
          {siteConfig.phone} · Consultation {siteConfig.consultationFee} · not confirmed until the clinic replies
        </p>
      </CardFooter>
    </Card>
  )
}
