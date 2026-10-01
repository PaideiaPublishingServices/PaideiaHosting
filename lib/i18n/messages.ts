import en from "@/messages/en.json"
import es from "@/messages/es.json"
import type { Locale } from "./config"

export type Messages = typeof en

// Typing each file as Messages makes tsc fail if a translation is missing a key.
const esMessages: Messages = es

const messages: Record<Locale, Messages> = {
  en,
  es: esMessages,
  // Portuguese has no pages yet; it falls back to English until messages/pt.json exists.
  pt: en,
}

export function getMessages(locale: Locale): Messages {
  return messages[locale]
}
