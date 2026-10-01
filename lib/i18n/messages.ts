import en from "@/messages/en.json"
import es from "@/messages/es.json"
import pt from "@/messages/pt.json"
import type { Locale } from "./config"

export type Messages = typeof en

// Typing each file as Messages makes tsc fail if a translation is missing a key.
const esMessages: Messages = es
const ptMessages: Messages = pt

const messages: Record<Locale, Messages> = {
  en,
  es: esMessages,
  pt: ptMessages,
}

export function getMessages(locale: Locale): Messages {
  return messages[locale]
}
