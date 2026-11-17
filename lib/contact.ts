import { siteConfig } from "@/config/site";

/**
 * Link do WhatsApp com mensagem comercial pré-preenchida.
 * Se o número ainda não foi configurado, leva para a seção de contato
 * (nunca um número inventado).
 */
export function getWhatsAppHref(message: string = siteConfig.contact.whatsappMessage): string {
  const number = siteConfig.contact.whatsapp;
  if (!number) return "#contato";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export const hasWhatsApp = siteConfig.contact.whatsapp.length >= 10;

/** Atributos seguros para links externos. */
export function externalLinkProps(href: string) {
  return href.startsWith("http")
    ? ({ target: "_blank", rel: "noopener noreferrer" } as const)
    : ({} as const);
}
