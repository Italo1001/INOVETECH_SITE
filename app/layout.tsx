import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { siteConfig } from "@/config/site";
import { MotionEffects } from "@/components/ui/motion-effects";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Gestão, PDV, Redes e CFTV`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.shortName,
  keywords: [
    "sistema de gestão",
    "PDV",
    "automação comercial",
    "suporte técnico",
    "redes",
    "infraestrutura de TI",
    "CFTV",
    "segurança eletrônica",
    "Inovetech",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [{ url: "/images/og-image.png", width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: ["/images/og-image.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#07182f",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

/** Dados estruturados apenas com informações verificadas (nome, URL e logo). */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/brand/inovetech-logo-white.png`,
  slogan: siteConfig.tagline,
  ...(Object.values(siteConfig.social).some(Boolean)
    ? { sameAs: Object.values(siteConfig.social).filter(Boolean) }
    : {}),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className={`${GeistSans.variable} antialiased`}>
      <head>
        {/* Ativa as animações de entrada antes da primeira pintura (evita "piscar"). */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="min-h-full font-sans">
        <a
          href="#conteudo"
          className="sr-only z-[100] rounded-full bg-brand-orange px-5 py-3 font-semibold text-brand-deep focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Pular para o conteúdo
        </a>
        {children}
        <MotionEffects />
        <script
          type="application/ld+json"
          // JSON gerado no servidor a partir de dados estáticos; "<" é escapado.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
