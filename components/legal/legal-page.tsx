import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { getWhatsAppHref, hasWhatsApp } from "@/lib/contact";

export function PrivacyContact() {
  const email = siteConfig.business.privacyEmail || siteConfig.contact.email;
  if (email) return <a className="underline underline-offset-4" href={`mailto:${email}`}>{email}</a>;
  if (hasWhatsApp) return <a className="underline underline-offset-4" href={getWhatsAppHref("Olá! Gostaria de tratar de uma solicitação sobre meus dados pessoais.")} target="_blank" rel="noopener noreferrer">WhatsApp comercial da Inovetech</a>;
  return <span>consulte os canais comerciais disponíveis na <Link href="/#contato" className="underline">página de contato</Link></span>;
}

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main id="conteudo" className="min-h-screen bg-[#07182f] px-5 py-12 text-white sm:py-20">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="inline-block rounded py-3 text-brand-orange underline underline-offset-4">← Voltar para a Inovetech</Link>
        <p className="mt-8 text-sm text-white/60">{siteConfig.name} · Atualizado em 18 de novembro de 2026</p>
        <h1 className="mt-3 text-3xl font-bold sm:text-5xl">{title}</h1>
        <div className="mt-10 space-y-8 text-base leading-relaxed text-white/85 [&_h2]:mb-3 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-white [&_p+p]:mt-3 [&_a]:underline [&_a]:underline-offset-4">
          {children}
        </div>
        <nav aria-label="Informações legais" className="mt-12 flex flex-wrap gap-6 border-t border-white/15 pt-6 text-sm">
          <Link href="/privacidade" className="underline">Privacidade e cookies</Link>
          <Link href="/termos" className="underline">Condições de uso</Link>
          <Link href="/#contato" className="underline">Contato</Link>
        </nav>
      </article>
    </main>
  );
}
