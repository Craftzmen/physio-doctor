import { WhatsAppButton } from "@/components/layout/whatsapp-button"

export function WhatsAppFloat() {
  return (
    <WhatsAppButton
      size="icon"
      hideLabel
      className="fixed bottom-5 right-5 z-50 shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/35"
    />
  )
}
