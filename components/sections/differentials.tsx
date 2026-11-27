import { Headset, Blocks, Settings2, LifeBuoy, PencilRuler, ShieldCheck, type LucideIcon } from "lucide-react";
import { differentials } from "@/config/content";

const icons: LucideIcon[] = [Headset, Blocks, Settings2, LifeBuoy, PencilRuler, ShieldCheck];

export function Differentials() {
  return (
    <section id="diferenciais" aria-labelledby="diferenciais-title" className="relative bg-brand-gray py-24 sm:py-32">
      <div className="container-site grid gap-14 lg:grid-cols-[0.9fr_1.4fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p data-reveal className="eyebrow text-brand-orange-dark">
            Diferenciais
          </p>
          <h2 id="diferenciais-title" data-reveal style={{ "--delay": "80ms" } as React.CSSProperties} className="text-h2 mt-5 text-brand-deep">
            Muito além da tecnologia. Uma parceria para o seu negócio.
          </h2>
          <p data-reveal style={{ "--delay": "160ms" } as React.CSSProperties} className="text-lead mt-5 text-muted">
            Acompanhamos cada etapa — do diagnóstico à operação — para que a tecnologia trabalhe a favor da sua empresa.
          </p>
          <ol
            data-reveal
            style={{ "--delay": "240ms" } as React.CSSProperties}
            aria-label="Como trabalhamos"
            className="relative mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2"
          >
            {["Diagnóstico", "Projeto", "Implantação", "Suporte"].map((step, i) => (
              <li
                key={step}
                className="flex items-center gap-3 rounded-2xl border border-brand-blue/10 bg-white/70 px-4 py-3 text-sm font-semibold text-brand-blue"
              >
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-blue text-xs text-white"
                >
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2">
          {differentials.map((d, i) => {
            const Icon = icons[i];
            return (
              <li
                key={d.title}
                data-reveal
                style={{ "--delay": `${(i % 2) * 100}ms` } as React.CSSProperties}
                className={i % 2 === 1 ? "sm:translate-y-10" : ""}
              >
                <article className="group relative h-full rounded-3xl border border-slate-200 bg-white p-7 transition-[transform,box-shadow,border-color] duration-500 hover:-translate-y-1 hover:border-brand-orange/40 hover:shadow-[0_25px_50px_-30px_rgba(16,43,82,0.5)]">
                  <div className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange-dark transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-brand-deep">
                      <Icon aria-hidden="true" className="size-6" strokeWidth={1.75} />
                    </span>
                    <span aria-hidden="true" className="font-mono text-sm text-slate-400">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight text-brand-deep">{d.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{d.description}</p>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
   } 
