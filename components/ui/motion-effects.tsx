"use client";

import { useEffect } from "react";

/**
 * Motor único e leve de efeitos (sem bibliotecas):
 * - [data-reveal]   → entrada suave ao entrar na tela
 * - [data-parallax] → deslocamento vertical proporcional à rolagem (valor = velocidade)
 * - [data-progress] → define --p (0 a 1) conforme o elemento atravessa a tela
 * - [data-tilt]     → inclinação 3D com reflexo seguindo o ponteiro
 * - [data-stage]    → palco 3D do hero reagindo ao ponteiro (--mx / --my)
 *
 * Respeita prefers-reduced-motion e usa listeners passivos + requestAnimationFrame.
 */
export function MotionEffects() {
  useEffect(() => {
    const root = document.documentElement;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      root.classList.add("reduced-motion");
      return;
    }

    const cleanups: Array<() => void> = [];

    /* Reveal */
    const revealEls = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const revealIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealIO.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    revealEls.forEach((el) => revealIO.observe(el));
    cleanups.push(() => revealIO.disconnect());

    /* Parallax + progresso: só calcula elementos visíveis */
    const scrollEls = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax], [data-progress]"),
    );
    const visible = new Set<HTMLElement>();
    const scrollIO = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) visible.add(el);
          else visible.delete(el);
        }
        schedule();
      },
      { rootMargin: "20% 0px 20% 0px" },
    );
    scrollEls.forEach((el) => scrollIO.observe(el));
    cleanups.push(() => scrollIO.disconnect());

    let ticking = false;
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      for (const el of visible) {
        const rect = el.getBoundingClientRect();
        if (el.dataset.parallax) {
          const speed = Number(el.dataset.parallax) || 0;
          const center = rect.top + rect.height / 2 - vh / 2;
          el.style.setProperty("--py", `${(-center * speed).toFixed(1)}px`);
        }
        if (el.hasAttribute("data-progress")) {
          const p = 1 - (rect.top + rect.height / 2) / vh;
          el.style.setProperty("--p", Math.min(1, Math.max(0, p * 1.4 - 0.2)).toFixed(3));
        }
      }
    };
    function schedule() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    cleanups.push(() => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    });
    schedule();

    /* Efeitos de ponteiro apenas em dispositivos com mouse */
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (finePointer) {
      /* Tilt 3D */
      document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
        const max = Number(el.dataset.tilt) || 8;
        let frame = 0;
        const onMove = (e: PointerEvent) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left) / r.width;
            const y = (e.clientY - r.top) / r.height;
            el.classList.add("is-tilting");
            el.style.setProperty("--ry", `${((x - 0.5) * max * 2).toFixed(2)}deg`);
            el.style.setProperty("--rx", `${((0.5 - y) * max * 2).toFixed(2)}deg`);
            el.style.setProperty("--gx", `${(x * 100).toFixed(1)}%`);
            el.style.setProperty("--gy", `${(y * 100).toFixed(1)}%`);
            el.style.setProperty("--ga", "1");
          });
        };
        const onLeave = () => {
          cancelAnimationFrame(frame);
          el.classList.remove("is-tilting");
          el.style.setProperty("--rx", "0deg");
          el.style.setProperty("--ry", "0deg");
          el.style.setProperty("--ga", "0");
        };
        el.addEventListener("pointermove", onMove, { passive: true });
        el.addEventListener("pointerleave", onLeave, { passive: true });
        cleanups.push(() => {
          el.removeEventListener("pointermove", onMove);
          el.removeEventListener("pointerleave", onLeave);
        });
      });

      /* Palco 3D do hero */
      const stages = document.querySelectorAll<HTMLElement>("[data-stage]");
      if (stages.length) {
        let frame = 0;
        const onMove = (e: PointerEvent) => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => {
            const mx = (e.clientX / window.innerWidth) * 2 - 1;
            const my = (e.clientY / window.innerHeight) * 2 - 1;
            stages.forEach((s) => {
              s.style.setProperty("--mx", mx.toFixed(3));
              s.style.setProperty("--my", my.toFixed(3));
            });
          });
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        cleanups.push(() => window.removeEventListener("pointermove", onMove));
      }
    }

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
