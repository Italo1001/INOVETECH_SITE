import { Check, Wifi, ShoppingBag, LayoutDashboard, Package, Wallet, Users } from "lucide-react";

/**
 * Composição 3D do hero, feita 100% em HTML/CSS (sem WebGL e sem imagens pesadas):
 * tela do sistema de gestão + PDV + câmera + rede em camadas com profundidade real
 * (preserve-3d). O ponteiro gira o palco (--mx/--my) e as camadas criam parallax.
 * Todo o conteúdo é ilustrativo e decorativo (aria-hidden).
 */
export function HeroStage() {
  return (
    <div
      data-stage
      aria-hidden="true"
      className="stage relative mx-auto aspect-[1.15/1] w-full max-w-[38rem] select-none"
    >
      <div className="stage-inner absolute inset-0">
        {/* Brilho de fundo */}
        <div
          className="layer inset-[8%] rounded-[2rem] bg-[radial-gradient(closest-side,rgb(255_121_0/0.35),transparent)] blur-2xl"
          style={{ "--z": "-120px" } as React.CSSProperties}
        />

        {/* Tela principal — sistema de gestão */}
        <div
          className="layer left-[4%] top-[8%] w-[80%] overflow-hidden rounded-2xl border border-white/15 bg-[#0d2343]/95 shadow-[0_50px_100px_-30px_rgba(0,0,0,0.75)]"
          style={{ "--z": "0px" } as React.CSSProperties}
        >
          <div className="flex items-center gap-1.5 border-b border-white/10 bg-white/[0.04] px-3 py-2">
            <span className="size-2 rounded-full bg-[#ff5f57]" />
            <span className="size-2 rounded-full bg-[#febc2e]" />
            <span className="size-2 rounded-full bg-[#28c840]" />
            <span className="ml-3 h-2 w-24 rounded-full bg-white/10" />
          </div>
          <div className="flex">
            <div className="flex w-[13%] flex-col items-center gap-3 border-r border-white/10 py-3">
              <LayoutDashboard className="size-3.5 text-brand-orange" />
              <ShoppingBag className="size-3.5 text-white/40" />
              <Package className="size-3.5 text-white/40" />
              <Wallet className="size-3.5 text-white/40" />
              <Users className="size-3.5 text-white/40" />
            </div>
            <div className="flex-1 p-3">
              <div className="mb-1 text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-white/45">
                Visão geral
              </div>
              <div className="grid grid-cols-3 gap-2">
                {["Vendas", "Pedidos", "Caixa"].map((label, i) => (
                  <div key={label} className="rounded-lg border border-white/10 bg-white/[0.05] p-2">
                    <div className="text-[0.5rem] text-white/55">{label}</div>
                    <div className="mt-1.5 h-1.5 rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-brand-orange to-[#ffb066]"
                        style={{ width: `${[72, 54, 86][i]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 rounded-lg border border-white/10 bg-white/[0.04] p-2">
                <svg viewBox="0 0 200 60" className="h-auto w-full">
                  <defs>
                    <linearGradient id="hero-area" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0" stopColor="#ff7900" stopOpacity="0.35" />
                      <stop offset="1" stopColor="#ff7900" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  {[15, 30, 45].map((y) => (
                    <line key={y} x1="0" x2="200" y1={y} y2={y} stroke="rgba(255,255,255,0.07)" />
                  ))}
                  <path
                    d="M0 48 C20 44 30 38 50 40 S80 26 100 28 S135 14 150 18 S185 8 200 6 L200 60 L0 60 Z"
                    fill="url(#hero-area)"
                  />
                  <path
                    className="chart-line"
                    d="M0 48 C20 44 30 38 50 40 S80 26 100 28 S135 14 150 18 S185 8 200 6"
                    fill="none"
                    stroke="#ff7900"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="mt-2 grid grid-cols-6 gap-1.5">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className={`flex aspect-square items-center justify-center rounded-md text-[0.45rem] font-semibold ${
                      [1, 4, 6, 9].includes(i)
                        ? "bg-brand-orange/85 text-brand-deep"
                        : [2, 10].includes(i)
                          ? "bg-sky-400/25 text-sky-100"
                          : "bg-white/[0.06] text-white/40"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cartão PDV — venda finalizada */}
        <div className="layer bottom-[4%] left-[-2%] w-[42%]" style={{ "--z": "110px" } as React.CSSProperties}>
          <div className="float glass rounded-2xl p-3" style={{ "--fd": "-1s" } as React.CSSProperties}>
            <div className="flex items-center gap-2">
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-400/90">
                <Check className="size-3.5 text-brand-deep" strokeWidth={3} />
              </span>
              <div>
                <div className="text-[0.62rem] font-semibold text-white">Venda finalizada</div>
                <div className="text-[0.5rem] text-white/60">PDV • Caixa 01</div>
              </div>
            </div>
            <div className="mt-2.5 space-y-1.5 rounded-lg bg-white/90 p-2">
              {[80, 64, 72].map((w, i) => (
                <div key={i} className="flex items-center justify-between gap-2">
                  <span className="h-1 rounded-full bg-brand-deep/30" style={{ width: `${w}%` }} />
                  <span className="h-1 w-3 rounded-full bg-brand-deep/40" />
                </div>
              ))}
              <div className="flex items-center justify-between border-t border-dashed border-brand-deep/25 pt-1.5">
                <span className="h-1.5 w-8 rounded-full bg-brand-deep/70" />
                <span className="h-1.5 w-5 rounded-full bg-brand-orange" />
              </div>
            </div>
          </div>
        </div>

        {/* Cartão CFTV — câmera ao vivo */}
        <div className="layer right-[-3%] top-[2%] w-[40%]" style={{ "--z": "150px" } as React.CSSProperties}>
          <div className="float glass overflow-hidden rounded-2xl p-2" style={{ "--fd": "-3s" } as React.CSSProperties}>
            <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-[#1b3558] to-[#0a1a30]">
              <div className="absolute inset-x-[10%] bottom-[18%] flex items-end gap-[6%]">
                {[60, 85, 50, 75].map((h, i) => (
                  <div key={i} className="flex-1 rounded-t-sm bg-white/15" style={{ height: `${h * 0.5}px` }} />
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[18%] bg-white/10" />
              <div className="scan absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-transparent via-sky-300/15 to-transparent" />
              <div className="absolute left-1.5 top-1.5 flex items-center gap-1 rounded bg-black/50 px-1.5 py-0.5 text-[0.45rem] font-semibold tracking-wider text-white">
                <span className="led size-1.5 rounded-full bg-red-500" />
                AO VIVO
              </div>
              <div className="absolute bottom-1 right-1.5 font-mono text-[0.42rem] text-white/70">CAM 03</div>
              <div className="absolute inset-[22%_30%_30%_30%] rounded border border-emerald-300/70" />
            </div>
          </div>
        </div>

        {/* Cartão Rede — switch */}
        <div className="layer bottom-[16%] right-[0%] w-[44%]" style={{ "--z": "70px" } as React.CSSProperties}>
          <div className="float glass rounded-2xl p-3" style={{ "--fd": "-5s" } as React.CSSProperties}>
            <div className="flex items-center justify-between">
              <div className="text-[0.6rem] font-semibold text-white">Rede corporativa</div>
              <Wifi className="size-3.5 text-brand-orange" />
            </div>
            <div className="mt-2 grid grid-cols-8 gap-1 rounded-md border border-white/10 bg-[#081a33] p-1.5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="flex flex-col items-center gap-0.5">
                  <span
                    className="led size-1 rounded-full bg-emerald-400"
                    style={{ "--d": `${(i * 0.37) % 2}s` } as React.CSSProperties}
                  />
                  <span className="h-2 w-full rounded-[2px] border border-white/20 bg-black/40" />
                </div>
              ))}
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-[0.5rem] text-white/65">
              <span className="size-1.5 rounded-full bg-emerald-400" />
              Conexão estável
            </div>
          </div>
        </div>

        {/* Selo flutuante */}
        <div className="layer left-[30%] top-[-4%]" style={{ "--z": "200px" } as React.CSSProperties}>
          <div
            className="float flex items-center gap-1.5 rounded-full bg-brand-orange px-3 py-1.5 text-[0.6rem] font-bold text-brand-deep shadow-[0_15px_35px_-10px_rgba(255,121,0,0.8)]"
            style={{ "--fd": "-2s" } as React.CSSProperties}
          >
            <span className="size-1.5 rounded-full bg-brand-deep" />
            Sistema online
          </div>
        </div>
      </div>
    </div>
  );
}
