"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { navItems } from "@/config/site";

type HeaderProps = { whatsappHref: string };

export function Header({ whatsappHref }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 24);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const raf = requestAnimationFrame(() => firstLinkRef.current?.focus());
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const mq = window.matchMedia("(min-width: 1024px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const external = whatsappHref.startsWith("http");

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-[env(safe-area-inset-top)]">
      <div
        className={`header-bar border-b border-transparent ${scrolled || open ? "is-scrolled" : ""}`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
          <a href="#inicio" className="shrink-0 rounded-md" aria-label="Inovetech — voltar ao início">
            <Logo priority className="h-9 w-auto sm:h-10" sizes="120px" />
          </a>

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="nav-link block rounded-full px-3 py-2.5 text-[0.95rem] font-medium text-white/80 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={whatsappHref}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="btn btn-primary hidden !min-h-11 !px-5 !text-sm sm:inline-flex"
            >
              Fale com um especialista
              <ArrowRight aria-hidden="true" className="btn-icon size-4" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex size-11 items-center justify-center rounded-full border border-white/15 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        id="menu-mobile"
        className={`lg:hidden fixed inset-x-0 bottom-0 top-[calc(4.5rem+env(safe-area-inset-top))] bg-brand-deep/97 backdrop-blur-xl duration-300 ${
          open ? "visible opacity-100 transition-opacity" : "invisible opacity-0 transition-[opacity,visibility]"
        }`}
        inert={!open}
      >
        <nav aria-label="Navegação mobile" className="container-site flex h-full flex-col pb-[max(2rem,env(safe-area-inset-bottom))] pt-6">
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-white/8">
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-5 text-2xl font-semibold tracking-tight text-white"
                >
                  {item.label}
                  <ArrowRight aria-hidden="true" className="size-5 text-brand-orange" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onClick={() => setOpen(false)}
            className="btn btn-primary mt-auto w-full"
          >
            Fale com um especialista
          </a>
        </nav>
      </div>
    </header>
  );
}
