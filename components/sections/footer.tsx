import { Mail, ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { navItems, siteConfig } from "@/config/site";

function SocialIcon({ name }: { name: "instagram" | "linkedin" | "facebook" }) {
  const paths: Record<typeof name, string> = {
    instagram:
      "M12 2.2c3.2 0 3.6 0 4.8.1 3.3.1 4.8 1.7 4.9 4.9.1 1.3.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 3.2-1.7 4.8-4.9 4.9-1.3.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-3.3-.1-4.8-1.7-4.9-4.9C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8C2.4 3.9 3.9 2.4 7.2 2.3 8.4 2.2 8.8 2.2 12 2.2Zm0 4.7a5.1 5.1 0 1 0 0 10.2 5.1 5.1 0 0 0 0-10.2Zm0 8.4a3.3 3.3 0 1 1 0-6.6 3.3 3.3 0 0 1 0 6.6Zm5.3-9.8a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z",
    linkedin:
      "M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.6-1.8 3.4-1.8 3.6 0 4.3 2.4 4.3 5.5v6.2ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5Z",
    facebook:
      "M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7A10 10 0 0 0 22 12Z",
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5" fill="currentColor">
      <path d={paths[name]} />
    </svg>
  );
}

async function getYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer({ whatsappHref, hasWhatsApp }: { whatsappHref: string; hasWhatsApp: boolean }) {
  const year = await getYear();
  const { email } = siteConfig.contact;
  const socials = (Object.entries(siteConfig.social) as [keyof typeof siteConfig.social, string][]).filter(
    ([, url]) => url,
  );
  const labels = { instagram: "Instagram", linkedin: "LinkedIn", facebook: "Facebook" } as const;

  return (
    <footer id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-[#051224] text-white">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-orange/50 to-transparent" />
      <div className="container-site grid gap-12 pb-10 pt-20 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr]">
        <div>
          <Logo className="h-12 w-auto" sizes="160px" />
          <p className="mt-6 max-w-sm leading-relaxed text-mist">
            Sistemas de gestão, automação comercial, suporte técnico, redes e segurança eletrônica para empresas que
            querem operar com mais eficiência.
          </p>
          {socials.length > 0 ? (
            <ul className="mt-6 flex gap-2" aria-label="Redes sociais">
              {socials.map(([key, url]) => (
                <li key={key}>
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${labels[key]} da Inovetech (abre em nova aba)`}
                    className="flex size-11 items-center justify-center rounded-full border border-white/12 text-white/80 transition-colors hover:border-brand-orange hover:text-brand-orange"
                  >
                    <SocialIcon name={key} />
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <nav aria-label="Navegação rápida">
          <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">Navegação</h2>
          <ul className="mt-5 space-y-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-block py-1.5 text-white/85 transition-colors hover:text-brand-orange">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 id="contato-title" className="text-sm font-semibold uppercase tracking-[0.14em] text-white/55">
            Contato
          </h2>
          <ul className="mt-5 space-y-3">
            {hasWhatsApp ? (
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-emerald-400/50"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-400">
                    <WhatsAppIcon className="size-5" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm text-white/55">WhatsApp</span>
                    <span className="block font-medium">Fale com um especialista</span>
                  </span>
                  <ArrowUpRight aria-hidden="true" className="size-4 text-white/40 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ) : null}
            {email ? (
              <li>
                <a
                  href={`mailto:${email}`}
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-brand-orange/50"
                >
                  <span className="flex size-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange">
                    <Mail aria-hidden="true" className="size-5" />
                  </span>
                  <span className="flex-1 break-all">
                    <span className="block text-sm text-white/55">E-mail comercial</span>
                    <span className="block font-medium">{email}</span>
                  </span>
                </a>
              </li>
            ) : null}
            {!hasWhatsApp && !email ? (
              <li className="rounded-2xl border border-dashed border-white/15 p-4 text-sm text-white/60">
                Canais de contato em breve.
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <div className="container-site flex flex-col gap-3 border-t border-white/8 py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))] text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {siteConfig.name}. Todos os direitos reservados.
        </p>
        <p>{siteConfig.tagline}</p>
      </div>
    </footer>
  );
}
