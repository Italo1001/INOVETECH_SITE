import { MonitorSmartphone, Workflow, Wrench, Network, Cctv } from "lucide-react";
import { about } from "@/config/content";

const layerIcons = [Cctv, Network, Wrench, Workflow, MonitorSmartphone];

/** Sobre: texto + pilha isométrica 3D que "abre" conforme a rolagem (--p). */
export function About() {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="container-site grid items-center gap-16 lg:grid-cols-2">
        <div data-progress className="iso relative order-2 mx-auto aspect-square w-full max-w-[30rem] lg:order-1" aria-hidden="true">
          <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(closest-side,rgb(255_121_0/0.16),transparent)]" />
          <div className="iso-stack absolute inset-[22%]">
            {about.layers.map((label, i) => {
              const Icon = layerIcons[i];
              const top = i === about.layers.length - 1;
              return (
                <div key={label} className="iso-plate" style={{ "--i": i } as React.CSSProperties}>
                  <div
                    className={`relative h-full w-full rounded-[1.75rem] border ${
                      top
                        ? "border-brand-orange/60 bg-gradient-to-br from-brand-blue to-brand-deep"
                        : "border-white/25 bg-gradient-to-br from-[#1a3c6b]/95 to-[#0b2242]/95"
                    } shadow-[0_30px_40px_-20px_rgba(7,24,47,0.55)]`}
                  >
                    <div className="absolute inset-0 rounded-[1.75rem] bg-[linear-gradient(rgb(255_255_255/0.06)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255/0.06)_1px,transparent_1px)] bg-[size:24px_24px]" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-2">
                      <span className={`flex size-8 items-center justify-center rounded-lg ${top ? "bg-brand-orange text-brand-deep" : "bg-white/10 text-white"}`}>
                        <Icon className="size-4" />
                      </span>
                      <span className="text-[0.7rem] font-semibold text-white/90">{label}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p data-reveal className="eyebrow text-brand-orange-dark">
            Sobre a Inovetech
          </p>
          <h2 id="sobre-title" data-reveal style={{ "--delay": "80ms" } as React.CSSProperties} className="text-h2 mt-5 text-brand-deep">
            {about.title}
          </h2>
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              data-reveal
              style={{ "--delay": `${160 + i * 80}ms` } as React.CSSProperties}
              className="text-lead mt-5 text-muted"
            >
              {p}
            </p>
          ))}
          <ul data-reveal style={{ "--delay": "320ms" } as React.CSSProperties} className="mt-8 flex flex-wrap gap-2">
            {[...about.layers].reverse().map((l) => (
              <li key={l} className="rounded-full border border-slate-200 bg-brand-gray px-3.5 py-1.5 text-sm font-medium text-brand-blue">
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
