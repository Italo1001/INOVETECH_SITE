import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Solutions } from "@/components/sections/solutions";
import { Segments } from "@/components/sections/segments";
import { Differentials } from "@/components/sections/differentials";
import { About } from "@/components/sections/about";
import { CallToAction } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";
import { getWhatsAppHref, hasWhatsApp } from "@/lib/contact";

export default function Home() {
  const whatsappHref = getWhatsAppHref();

  return (
    <>
      <Header whatsappHref={whatsappHref} />
      <main id="conteudo">
        <Hero whatsappHref={whatsappHref} />
        <Solutions />
        <Segments />
        <Differentials />
        <About />
        <CallToAction whatsappHref={whatsappHref} configured={hasWhatsApp} />
      </main>
      <Footer whatsappHref={whatsappHref} hasWhatsApp={hasWhatsApp} />
    </>
  );
}
