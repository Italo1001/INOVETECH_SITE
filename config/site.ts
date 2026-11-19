/**
 * Configurações comerciais da Inovetech.
 *
 * Dados empresariais NÃO são inventados: tudo que ainda não foi fornecido
 * fica vazio e é preenchido por variáveis de ambiente (veja .env.example).
 * Enquanto um dado estiver vazio, o site oculta o item ou usa um fallback seguro.
 */

import { clean, safeHttpsUrl, safeEmail, safePhone } from "@/lib/public-config.mjs";

const rawSiteUrl = safeHttpsUrl(process.env.NEXT_PUBLIC_SITE_URL, true);

export const siteConfig = {
  name: "Inovetech Soluções Tecnológicas",
  shortName: "Inovetech",
  tagline: "Tecnologia que transforma negócios",
  description:
    "Sistemas de gestão e PDV, automação comercial, suporte técnico, redes e infraestrutura de TI e segurança eletrônica (CFTV) para empresas que querem operar com mais eficiência, controle e produtividade.",
  /** URL pública definitiva (domínio próprio). Sem barra no final. */
  url: (rawSiteUrl || "https://inovetech-site.vercel.app").replace(/\/$/, ""),
  locale: "pt_BR",

  contact: {
    /** Número com DDI + DDD, apenas dígitos. Ex.: 5521999999999 */
    whatsapp: safePhone(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    whatsappMessage:
      clean(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE) ||
      "Olá, Inovetech! Vim pelo site e gostaria de falar com um especialista sobre soluções para a minha empresa.",
    email: safeEmail(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  },

  business: {
    legalName: clean(process.env.NEXT_PUBLIC_LEGAL_NAME),
    cnpj: clean(process.env.NEXT_PUBLIC_CNPJ),
    address: clean(process.env.NEXT_PUBLIC_BUSINESS_ADDRESS),
    privacyEmail: safeEmail(process.env.NEXT_PUBLIC_PRIVACY_EMAIL),
  },

  social: {
    instagram: safeHttpsUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: safeHttpsUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    facebook: safeHttpsUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL),
  },
} as const;

export const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Soluções", href: "#solucoes" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Clientes", href: "#clientes" },
  { label: "Contato", href: "#contato" },
] as const;
