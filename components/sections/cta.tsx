import { ArrowRight } from "lucide-react";
import { cta } from "@/config/content";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";

export function CallToAction({ whatsappHref, configured }: { whatsappHref: string; configured: boolean }) {
  return (
    <section aria-labelledby="cta-title" className="relative bg-white px-3 pb-24 sm:px-6 sm:pb-32">
      <div
        data-tilt="2"
        className="tilt relative isolate mx-auto max-w-[84rem] overflow-hidden rounded-[2rem] bg-brand-deep px-6 py-20 text-center text-white sm:rounded-[2.5rem] sm:px-12 sm:py-28"
      >
        <div className="tilt-glare" aria-hidden="true" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <div data-parallax="0.2" className="absolute -left-20 -top-24 size-96 rounded-full bg-brand-orange/25 blur-3xl" />
          <div data-parallax="-0.2" className="absolute -bottom-32 -right-10 size-[26rem] rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.04)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_70%)]" />
          <svg data-parallax="-0.1" className="absolute left-1/2 top-6 w-[60rem] max-w-none -translate-x-1/2 opacity-30" viewBox="0 0 1000 300" fill="none">
            <path d="M80 280 C 330 60, 700 10, 940 40" stroke="#ff7900" strokeWidth="4" strokeLinecap="round" />
          </svg>
        </div>

        <h2 id="cta-title" data-reveal className="text-h2 mx-auto max-w-3xl">
          {cta.title}
        </h2>
        <p data-reveal style={{ "--delay": "80ms" } as React.CSSProperties} className="text-lead mx-auto mt-6 max-w-2xl text-mist">
          {cta.text}
        </p>
        <div data-reveal style={{ "--delay": "160ms" } as React.CSSProperties} className="mt-10 flex justify-center">
          <a
            href={whatsappHref}
            {...(configured ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className="btn btn-primary !min-h-14 !px-8 !text-base"
          >
            <WhatsAppIcon className="size-5" />
            {cta.button}
            <ArrowRight aria-hidden="true" className="btn-icon size-4" />
          </a>
        </div>
        {configured ? (
          <p className="mt-4 text-sm text-white/55">Você será direcionado ao WhatsApp com uma mensagem pronta.</p>
        ) : null}
      </div>
    </section>
  );
}
