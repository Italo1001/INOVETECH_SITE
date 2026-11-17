import { UtensilsCrossed, ShoppingCart, Store, Building2, type LucideIcon } from "lucide-react";
import { segments, type SegmentIcon } from "@/config/content";
import { SectionHeading } from "@/components/ui/section-heading";

const icons: Record<SegmentIcon, LucideIcon> = {
  restaurant: UtensilsCrossed,
  market: ShoppingCart,
  retail: Store,
  office: Building2,
};

const gradients: Record<SegmentIcon, string> = {
  restaurant: "from-[#2a1608] via-[#4a2408] to-[#102b52]",
  market: "from-[#0b2a3d] via-[#0f3b52] to-[#07182f]",
  retail: "from-[#1a1f4a] via-[#23306b] to-[#07182f]",
  office: "from-[#0d2343] via-[#14365f] to-[#07182f]",
};

/**
 * Cartões ilustrados com profundidade 3D (camadas em translateZ).
 * Para usar fotografias reais, adicione as imagens em public/images/segments
 * e troque o fundo gradiente por next/image (veja README).
 */
export function Segments() {
  return (
    <section
      aria-labelledby="segmentos-title"
      className="relative overflow-hidden bg-brand-deep py-24 text-white sm:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50rem_30rem_at_10%_0%,rgb(40_110_210/0.18),transparent_60%),radial-gradient(40rem_30rem_at_90%_100%,rgb(255_121_0/0.12),transparent_60%)]"
      />
      <div className="container-site relative">
        <SectionHeading
          id="segmentos-title"
          tone="dark"
          eyebrow="Segmentos atendidos"
          title="Tecnologia para diferentes tipos de negócios."
          description="Soluções dimensionadas para a realidade de cada operação, do pequeno comércio à empresa estruturada."
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg, i) => {
            const Icon = icons[seg.icon];
            return (
              <li key={seg.title} data-reveal style={{ "--delay": `${i * 90}ms` } as React.CSSProperties}>
                <article
                  data-tilt="9"
                  className={`tilt group relative flex aspect-[4/5] min-h-[22rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${gradients[seg.icon]} p-6 sm:min-h-0`}
                >
                  <div className="tilt-glare" aria-hidden="true" />
                  {/* Cena em camadas */}
                  <div aria-hidden="true" className="absolute inset-0 [transform-style:preserve-3d]">
                    <div className="absolute inset-0 bg-[linear-gradient(rgb(255_255_255/0.05)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.05)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:linear-gradient(to_bottom,#000,transparent_70%)]" />
                    <div className="absolute right-[-12%] top-[-8%] size-56 rounded-full bg-brand-orange/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                    <div className="absolute left-1/2 top-[30%] -translate-x-1/2 -translate-y-1/2 [transform:translateZ(60px)]">
                      <div className="relative flex size-28 items-center justify-center rounded-[2rem] border border-white/15 bg-white/[0.06] backdrop-blur-md transition-transform duration-500 group-hover:scale-105">
                        <Icon className="size-12 text-white" strokeWidth={1.4} />
                        <span className="absolute -right-2 -top-2 size-5 rounded-full bg-brand-orange shadow-[0_0_24px_rgba(255,121,0,0.8)]" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand-deep via-brand-deep/70 to-transparent" aria-hidden="true" />

                  <div className="relative [transform:translateZ(30px)]">
                    <h3 className="text-xl font-semibold tracking-tight">{seg.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{seg.description}</p>
                    <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`Soluções para ${seg.title.toLowerCase()}`}>
                      {seg.tags.map((t) => (
                        <li key={t} className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-xs font-medium text-white/85">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
