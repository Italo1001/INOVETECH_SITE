/**
 * Configurações comerciais da Inovetech.
 *
 * Dados empresariais NÃO são inventados: tudo que ainda não foi fornecido
 * fica vazio e é preenchido por variáveis de ambiente (veja .env.example).
 * Enquanto um dado estiver vazio, o site oculta o item ou usa um fallback seguro.
 */

function clean(value: string | undefined): string {
  return (value ?? "").trim();
}

/** Mantém apenas dígitos (formato exigido pelo wa.me, ex.: 5521999999999). */
function digits(value: string | undefined): string {
  return clean(value).replace(/\D/g, "");
}

/** Aceita apenas URLs https para evitar links inseguros ou javascript:. */
function safeUrl(value: string | undefined): string {
  const v = clean(value);
  if (!v) return "";
  try {
    const url = new URL(v);
    return url.protocol === "https:" ? url.toString() : "";
  } catch {
    return "";
  }
}

const rawSiteUrl = safeUrl(process.env.NEXT_PUBLIC_SITE_URL);

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
    whatsapp: digits(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER),
    whatsappMessage:
      clean(process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE) ||
      "Olá, Inovetech! Vim pelo site e gostaria de falar com um especialista sobre soluções para a minha empresa.",
    email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
  },

  social: {
    instagram: safeUrl(process.env.NEXT_PUBLIC_INSTAGRAM_URL),
    linkedin: safeUrl(process.env.NEXT_PUBLIC_LINKEDIN_URL),
    facebook: safeUrl(process.env.NEXT_PUBLIC_FACEBOOK_URL),
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
