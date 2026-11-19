import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Condições de uso",
  description: "Finalidade do site, informações comerciais, materiais e canais de atendimento da Inovetech.",
  alternates: { canonical: "/termos" },
  openGraph: { title: "Condições de uso", url: "/termos" },
};

export default function TermsPage() {
  return (
    <LegalPage title="Condições de uso">
      <section><h2>Finalidade do site</h2><p>Este site apresenta a Inovetech e suas soluções tecnológicas. Não há pagamento, contratação automática ou área privada nesta versão. A navegação não representa contratação de um serviço.</p></section>
      <section><h2>Propostas e contratação</h2><p>Escopo, compatibilidade, disponibilidade, valores, prazos, licenças, instalação e suporte devem ser esclarecidos na oferta e na proposta correspondente. Informações publicitárias e ofertas suficientemente precisas devem ser respeitadas nos termos da legislação aplicável.</p><p>Condições de cancelamento, garantias e eventual direito de arrependimento devem observar a relação contratada e os direitos assegurados por lei. Estas condições de uso não afastam os direitos do consumidor.</p></section>
      <section><h2>Conteúdo e demonstrações</h2><p>Animações identificadas como ilustrativas servem para apresentar situações de uso e não representam uma transmissão ao vivo, uma transação real ou uma garantia de resultado. Vídeos de estabelecimentos são materiais de apresentação.</p><p>Marcas de terceiros pertencem aos respectivos titulares. A exibição de uma marca não implica exclusividade, certificação ou endosso além da relação expressamente informada.</p></section>
      <section><h2>Uso responsável</h2><p>Não utilize o site para praticar fraudes, tentar acessar informações de outras pessoas, distribuir conteúdo malicioso ou prejudicar a disponibilidade do serviço. Materiais disponibilizados publicamente não conferem autorização para acessar sistemas ou arquivos privados.</p></section>
      <section><h2>Materiais e propriedade intelectual</h2><p>O uso de textos, imagens, vídeos, marcas, fontes e código está sujeito aos direitos dos titulares e às licenças aplicáveis. Solicite autorização quando necessária e respeite as exceções previstas em lei e as licenças de componentes de terceiros.</p></section>
      <section><h2>Serviços externos e disponibilidade</h2><p>Links de contato e redes sociais levam a serviços de terceiros, com condições próprias. O site pode passar por manutenção e não oferece garantia de disponibilidade ininterrupta. Essa informação não exclui responsabilidades que a legislação atribua à empresa.</p></section>
      <section><h2>Contato e privacidade</h2><p>Para dúvidas, propostas ou problemas com o conteúdo, utilize os <Link href="/#contato">canais comerciais</Link>. O tratamento de dados pessoais é descrito na <Link href="/privacidade">página de privacidade e cookies</Link>.</p></section>
    </LegalPage>
  );
}
