import {
  MonitorSmartphone,
  Workflow,
  Wrench,
  Network,
  Cctv,
  Printer,
  type LucideIcon,
} from "lucide-react";
import { solutions, type SolutionIcon } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<SolutionIcon, LucideIcon> = {
  pdv: MonitorSmartphone,
  automation: Workflow,
  support: Wrench,
  network: Network,
  cctv: Cctv,
  equipment: Printer,
};

export function Solutions() {
  return (
    <section id="solucoes" aria-labelledby="solucoes-title" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div
        aria-hidden="true"
        data-parallax="0.12"
        className="pointer-events-none absolute -right-32 top-20 size-[28rem] rounded-full bg-brand-orange/[0.07] blur-3xl"
      />
      <div className="container-site relative">
        <SectionHeading
          id="solucoes-title"
          eyebrow="Soluções Inovetech"
          title="Soluções completas para a evolução da sua empresa."
          description="Do sistema de gestão ao cabeamento da rede, cuidamos da tecnologia para que você foque no que importa: o seu negócio."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {solutions.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <li key={s.title} data-reveal style={{ "--delay": `${(i % 3) * 90}ms` } as React.CSSProperties}>
                <article
                  data-tilt="7"
                  className="tilt group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-gradient-to-b from-white to-brand-gray/60 p-7 shadow-[0_1px_0_rgba(16,43,82,0.04),0_20px_40px_-28px_rgba(16,43,82,0.35)] hover:border-brand-orange/40 hover:shadow-[0_30px_60px_-30px_rgba(16,43,82,0.45)] sm:p-8"
                >
                  <div className="tilt-glare" aria-hidden="true" />
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 size-32 rounded-full bg-brand-orange/0 blur-2xl transition-colors duration-500 group-hover:bg-brand-orange/15"
                  />
                  <div className="tilt-pop relative flex size-14 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-[0_14px_28px_-12px_rgba(16,43,82,0.7)] transition-colors duration-300 group-hover:bg-brand-deep">
                    <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                    <span className="absolute -bottom-1 -right-1 size-3.5 rounded-full border-2 border-white bg-brand-orange" />
                  </div>
                  <h3 className="relative mt-7 text-xl font-semibold tracking-tight text-brand-deep">{s.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-muted">{s.description}</p>
                  <div
                    aria-hidden="true"
                    className="relative mt-7 h-px w-full bg-gradient-to-r from-brand-orange via-brand-orange/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
