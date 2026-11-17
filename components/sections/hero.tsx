import { ArrowRight, ChevronDown } from "lucide-react";
import { hero } from "@/config/content";
import { HeroStage } from "@/components/visuals/hero-stage";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function Hero({ whatsappHref }: { whatsappHref: string }) {
  const external = whatsappHref.startsWith("http");
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="hero-bg relative isolate overflow-hidden text-white"
    >
      {/* Camadas de fundo com parallax */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-floor" />
        <svg
          data-parallax="-0.15"
          className="absolute -right-40 top-10 w-[70rem] max-w-none opacity-60"
          viewBox="0 0 1000 400"
          fill="none"
        >
          <path d="M60 380 C 320 120, 700 20, 980 60" stroke="url(#arc)" strokeWidth="3" strokeLinecap="round" />
          <defs>
            <linearGradient id="arc" x1="0" x2="1">
              <stop offset="0" stopColor="#ff7900" stopOpacity="0" />
              <stop offset="1" stopColor="#ff7900" />
            </linearGradient>
          </defs>
        </svg>
        <div
          data-parallax="0.25"
          className="absolute left-[8%] top-[60%] size-72 rounded-full bg-sky-500/10 blur-3xl"
        />
      </div>

      <div className="container-site grid min-h-[100svh] items-center gap-12 pb-20 pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-28">
        <div className="max-w-2xl">
          <p className="hero-in eyebrow text-brand-orange">
            {hero.eyebrow}
          </p>
          <h1 id="hero-title" className="text-display mt-6">
            Tecnologia inteligente para{" "}
            <span className="bg-gradient-to-r from-brand-orange to-[#ffb066] bg-clip-text text-transparent">
              impulsionar
            </span>{" "}
            o seu negócio.
          </h1>
          <p className="text-lead mt-6 max-w-xl text-mist">
            {hero.subtitle}
          </p>
          <div
            style={{ "--delay": "200ms" } as React.CSSProperties}
            className="hero-in mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a href="#solucoes" className="btn btn-primary">
              {hero.primaryCta}
              <ArrowRight aria-hidden="true" className="btn-icon size-4" />
            </a>
            <a
              href={whatsappHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn btn-ghost"
            >
              <WhatsAppIcon className="size-4 text-emerald-400" />
              {hero.secondaryCta}
            </a>
          </div>
        </div>

        <div style={{ "--delay": "250ms" } as React.CSSProperties} className="hero-in relative mx-auto w-full max-w-[34rem] px-6 pt-10 sm:px-10 lg:max-w-none lg:px-0 lg:pt-0">
          <div data-parallax="0.06">
            <HeroStage />
          </div>
        </div>
      </div>

      <a
        href="#solucoes"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-white/50 transition-colors hover:text-white md:flex"
        aria-label="Rolar para as soluções"
      >
        <ChevronDown aria-hidden="true" className="float size-5" />
      </a>
    </section>
  );
}
