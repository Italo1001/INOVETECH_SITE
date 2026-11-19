"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, X, Play } from "lucide-react";
import { clients, type Client } from "@/config/clients";
import { ClientSceneView, ClientSticker } from "@/components/visuals/client-scenes";

/**
 * Seção "Clientes" inspirada em layouts editoriais: palavra gigante,
 * rótulos coloridos espalhados; ao passar o mouse a tela assume a cor do
 * cliente e, ao clicar, abre o vídeo/animação do cliente.
 */
export function Clients() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openClient = useCallback((i: number, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setHovered(null);
    setOpen(i);
  }, []);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open !== null && !dialog.open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (open === null && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const onClose = () => {
      document.documentElement.style.overflow = "";
      setOpen(null);
      triggerRef.current?.focus();
    };
    dialog.addEventListener("close", onClose);
    return () => dialog.removeEventListener("close", onClose);
  }, []);

  const step = (dir: 1 | -1) =>
    setOpen((cur) => (cur === null ? cur : (cur + dir + clients.length) % clients.length));

  const active = hovered !== null ? clients[hovered] : null;
  const current = open !== null ? clients[open] : null;

  return (
    <section
      id="clientes"
      aria-labelledby="clientes-title"//mudar cor de fund aqui
      className="relative isolate overflow-hidden bg-[#051224] text-white"
    >
      {/* Fundo colorido ao passar o mouse (desktop) */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-10 hidden items-center justify-center px-[6vw] transition-opacity duration-300 lg:flex ${
          active ? "opacity-100" : "opacity-0"
        }`}
        style={{ backgroundColor: active?.color ?? "transparent" }}
      >
        <p className="font-display-condensed max-w-[14ch] text-center text-[clamp(3.5rem,8.5vw,9rem)] leading-[0.92] text-[#050b16]">
          {active?.headline}
        </p>
      </div>

      <div className="relative mx-auto max-w-[110rem] px-4 pb-16 pt-24 sm:px-8 lg:flex lg:min-h-[100svh] lg:flex-col lg:justify-center lg:py-24">
        <p className="eyebrow relative z-0 flex justify-center text-brand-orange lg:absolute lg:left-8 lg:top-24">
          Quem confia na Inovetech
        </p>

        <div className="relative mt-6 lg:mt-0">
          <h2
            id="clientes-title"
            className="font-display-condensed select-none text-center text-[clamp(5.5rem,24.5vw,27rem)] leading-[0.82] text-white"
          >
            Clientes
          </h2>

          {/* Rótulos espalhados (desktop) */}
          <ul className="hidden lg:block" aria-label="Nossos clientes">
            {clients.map((c, i) => {
              const isActive = hovered === i;
              const dimmed = hovered !== null && !isActive;
              return (
                <li
                  key={c.slug}
                  className={`absolute transition-opacity duration-300 ${isActive ? "z-20" : "z-0"} ${dimmed ? "opacity-0" : "opacity-100"}`}
                  style={{ top: c.position.top, left: c.position.left }}
                >
                  <div className="client-tag-float" style={{ "--fd": `${-i * 1.3}s` } as React.CSSProperties}>
                    <TagButton
                      client={c}
                      index={i}
                      active={isActive}
                      onEnter={() => setHovered(i)}
                      onLeave={() => setHovered((h) => (h === i ? null : h))}
                      onOpen={openClient}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Rótulos em nuvem (celular e tablet) */}
        <ul className="mt-12 flex flex-wrap justify-center gap-x-4 gap-y-10 lg:hidden" aria-label="Nossos clientes">
          {clients.map((c, i) => (
            <li key={c.slug}>
              <TagButton client={c} index={i} active={false} onOpen={openClient} />
            </li>
          ))}
        </ul>

        <p className="mt-12 text-center text-sm font-semibold uppercase tracking-[0.18em] text-white/70 lg:absolute lg:inset-x-0 lg:bottom-12 lg:mt-0">
          Clique em um cliente para assistir ao vídeo
        </p>
      </div>

      {/* Janela do vídeo */}
      <dialog
        ref={dialogRef}
        aria-labelledby="cliente-nome"
        className="m-0 h-[100dvh] max-h-none w-screen max-w-none overflow-y-auto bg-transparent p-0 text-[#050b16] backdrop:bg-black/70"
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
      >
        {current ? (
          <div
            className="min-h-full px-4 pb-10 pt-4 sm:px-8 sm:pt-6"
            style={{ backgroundColor: current.color }}
          >
            <div className="mx-auto flex max-w-[110rem] items-center justify-between gap-4">
              <span className="font-display-condensed text-2xl sm:text-3xl">
                Clientes <span className="opacity-50">/ {String((open ?? 0) + 1).padStart(2, "0")}</span>
              </span>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => step(-1)} aria-label="Cliente anterior" className="flex size-11 items-center justify-center rounded-full border-2 border-current transition-colors hover:bg-[#050b16] hover:text-white">
                  <ArrowLeft aria-hidden="true" className="size-5" />
                </button>
                <button type="button" onClick={() => step(1)} aria-label="Próximo cliente" className="flex size-11 items-center justify-center rounded-full border-2 border-current transition-colors hover:bg-[#050b16] hover:text-white">
                  <ArrowRight aria-hidden="true" className="size-5" />
                </button>
                <button type="button" onClick={close} aria-label="Fechar" autoFocus className="flex size-11 items-center justify-center rounded-full bg-[#050b16] text-white transition-transform hover:scale-105">
                  <X aria-hidden="true" className="size-5" />
                </button>
              </div>
            </div>

            <div className="mx-auto mt-6 grid max-w-[110rem] gap-8 lg:mt-10 lg:grid-cols-[0.85fr_1.4fr] lg:items-center lg:gap-12">
              <div>
              <h3 id="cliente-nome" className="font-display-condensed text-[clamp(3.5rem,13vw,13rem)] leading-[0.85] lg:text-[clamp(4rem,7vw,8.5rem)]">
                {current.name}
              </h3>

              <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:flex sm:gap-12 sm:text-base lg:grid lg:grid-cols-2 lg:gap-x-8">
                <div>
                  <dt className="font-semibold">Segmento:</dt>
                  <dd className="mt-1">{current.segment}</dd>
                </div>
                {current.location ? (
                  <div>
                    <dt className="font-semibold">Local:</dt>
                    <dd className="mt-1">{current.location}</dd>
                  </div>
                ) : null}
                <div>
                  <dt className="font-semibold">Parceria:</dt>
                  <dd className="mt-1">Cliente Inovetech</dd>
                </div>
              </dl>
              <p className="mt-8 hidden max-w-md text-lg font-semibold leading-snug lg:block">{current.headline}.</p>
              </div>

              <div>
              <div
                className={current.video?.orientation === "portrait" ? "mx-auto w-full" : "w-full"}
                style={current.video?.orientation === "portrait" ? { maxWidth: "min(100%, calc(78dvh * 0.5625))" } : undefined}
              >
              <div
                className={`client-scene relative w-full overflow-hidden rounded-3xl bg-[#050b16] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] ring-4 ring-[#050b16] ${
                  current.video?.orientation === "portrait" ? "aspect-[9/16]" : "aspect-video"
                }`}
              >
                {current.video ? (
                  <video
                    key={current.video.src}
                    className="h-full w-full object-cover"
                    src={current.video.src}
                    poster={current.video.poster}
                    autoPlay
                   // muted
                    loop
                    playsInline
                    preload="auto"
                    aria-label={`Vídeo do cliente ${current.name}, gravado no estabelecimento`}
                  />
                ) : (
                  <>
                    <div key={current.slug} className="h-full w-full" role="img" aria-label={`Animação ilustrativa: ${current.name} — ${current.segment}`}>
                      <ClientSceneView scene={current.scene} />
                    </div>
                    <div className="pointer-events-none absolute left-4 top-4 flex items-center gap-2 rounded-full bg-black/55 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur sm:left-6 sm:top-6 sm:text-sm">
                      <span className="size-2 animate-pulse rounded-full bg-red-500" />
                      {current.name}
                    </div>
                    <div className="pointer-events-none absolute bottom-4 right-4 hidden items-center gap-2 rounded-2xl border border-white/15 bg-[#0d2343]/90 px-3 py-2 text-xs text-white shadow-lg sm:bottom-6 sm:right-6 sm:flex sm:text-sm">
                      <span className="flex size-6 items-center justify-center rounded-full bg-emerald-400 text-[#050b16]">
                        <Play aria-hidden="true" className="size-3 fill-current" />
                      </span>
                      <span>
                        <span className="block text-[0.65rem] uppercase tracking-wider text-white/60">Inovetech • Gestão</span>
                        {current.status}
                      </span>
                    </div>
                  </>
                )}
              </div>
              </div>
              <p className={`mt-3 text-xs opacity-70 ${current.video?.orientation === "portrait" ? "text-center" : ""}`}>
                {current.video ? "Vídeo gravado no estabelecimento." : "Animação ilustrativa. Em breve, vídeo gravado no local."}
              </p>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </section>
  );
}

type TagButtonProps = {
  client: Client;
  index: number;
  active: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onOpen: (i: number, el: HTMLButtonElement) => void;
};

function TagButton({ client, index, active, onEnter, onLeave, onOpen }: TagButtonProps) {
  return (
    <button
      type="button"
      onPointerEnter={(e) => e.pointerType === "mouse" && onEnter?.()}
      onPointerLeave={(e) => e.pointerType === "mouse" && onLeave?.()}
      onFocus={onEnter}
      onBlur={onLeave}
      onClick={(e) => onOpen(index, e.currentTarget)}
      aria-haspopup="dialog"
      aria-label={`${client.name} — ${client.segment}. Abrir vídeo`}
      className="group relative inline-flex items-center"
      style={{ rotate: `${client.position.rotate}deg` }}
    >
      <ClientSticker
        scene={client.scene}
        className="absolute -left-5 -top-7 size-10 sm:-left-7 sm:-top-9 sm:size-14 drop-shadow-[0_8px_12px_rgba(0,0,0,0.45)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 lg:-left-10 lg:-top-12 lg:size-20"
      />
      <span
        className="relative px-3 py-1.5 text-sm font-extrabold uppercase tracking-wide text-[#050b16] shadow-[0_10px_25px_-10px_rgba(0,0,0,0.6)] transition-[background-color,transform] duration-200 group-hover:scale-105 sm:text-base lg:px-4 lg:py-2 lg:text-lg"
        style={{ backgroundColor: active ? "#ffffff" : client.color }}
      >
        {client.name}
      </span>
    </button>
  );
}
