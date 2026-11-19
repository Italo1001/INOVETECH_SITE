import type { Metadata } from "next";
import { LegalPage, PrivacyContact } from "@/components/legal/legal-page";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacidade e cookies",
  description: "Informações sobre dados pessoais, contatos e cookies do site institucional da Inovetech.",
  alternates: { canonical: "/privacidade" },
  openGraph: { title: "Privacidade e cookies", url: "/privacidade" },
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacidade e cookies">
      <section><h2>Quem responde por este site</h2>
        <p>Este é o site institucional da {siteConfig.name}. Para dúvidas sobre privacidade ou solicitações relativas aos seus dados, fale com a empresa por este canal: <PrivacyContact />.</p>
        {siteConfig.business.legalName ? <p>Responsável: {siteConfig.business.legalName}.</p> : null}
        {siteConfig.business.cnpj ? <p>CNPJ: {siteConfig.business.cnpj}.</p> : null}
        {siteConfig.business.address ? <p>Endereço: {siteConfig.business.address}.</p> : null}
      </section>
      <section><h2>Dados na navegação</h2>
        <p>O site apresenta informações comerciais e não oferece cadastro, área de login ou formulário próprio. A infraestrutura de hospedagem da Vercel pode tratar informações técnicas, como endereço IP, data e horário de acesso, endereço solicitado e informações do navegador, para entregar as páginas, manter a operação e prevenir abusos.</p>
        <p>Esses registros técnicos não são usados pelo código deste site para criar perfis publicitários. Informações sobre o tratamento realizado pela plataforma estão na <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">política de privacidade da Vercel</a>.</p>
      </section>
      <section><h2>Quando você entra em contato</h2>
        <p>Ao enviar uma mensagem por WhatsApp ou e-mail, você pode fornecer nome, telefone, e-mail e o conteúdo da solicitação. Essas informações são utilizadas para responder ao contato, preparar propostas e realizar os procedimentos necessários à eventual contratação. Obrigações legais e o exercício regular de direitos também podem justificar a conservação de informações.</p>
        <p>Envie somente os dados necessários ao atendimento. Evite enviar senhas, documentos sensíveis ou dados de terceiros em um primeiro contato.</p>
      </section>
      <section><h2>Cookies e armazenamento no navegador</h2>
        <p>O código desta versão do site não instala cookies de publicidade ou análise de audiência e não grava dados pessoais em localStorage ou sessionStorage. As fontes, imagens e vídeos são servidos pelo próprio site. Não há ferramentas de publicidade ou redes sociais incorporadas à página.</p>
        <p>Ao abrir um link externo, o serviço de destino passa a aplicar suas próprias regras e pode utilizar cookies. Se forem adicionadas tecnologias opcionais que dependam de consentimento, elas deverão aguardar sua escolha, com opção de recusa e de alteração posterior.</p>
      </section>
      <section><h2>Fornecedores e transferências internacionais</h2>
        <p>A hospedagem é fornecida pela Vercel. O atendimento utiliza os provedores de e-mail e de mensageria dos canais escolhidos. Esses serviços podem processar dados fora do Brasil. O uso desses fornecedores deve observar as garantias e os mecanismos de transferência internacional exigidos pela legislação aplicável.</p>
        <p>Os links para WhatsApp e redes sociais só abrem esses serviços quando você decide acessá-los. Consulte também as políticas de privacidade desses serviços.</p>
      </section>
      <section><h2>Conservação e proteção</h2>
        <p>Os dados devem ser mantidos pelo tempo necessário à finalidade do atendimento, à execução do contrato e ao cumprimento de obrigações legais ou ao exercício de direitos. O prazo concreto depende do tipo de informação e da relação com a empresa; você pode solicitar esclarecimentos pelo canal de privacidade.</p>
        <p>O site utiliza conexão HTTPS e restrições de recursos do navegador. Nenhum sistema elimina completamente o risco de incidentes. A empresa deve avaliar incidentes e realizar as comunicações exigidas pela legislação quando aplicáveis.</p>
      </section>
      <section><h2>Seus direitos</h2>
        <p>Nos termos da LGPD, você pode solicitar confirmação de tratamento, acesso, correção, informações sobre compartilhamento e, nas hipóteses legais, anonimização, bloqueio, eliminação ou portabilidade. Quando o tratamento depender de consentimento, você pode revogá-lo.</p>
        <p>Envie sua solicitação para <PrivacyContact />. Para proteger seus dados, poderá ser necessária uma verificação proporcional de identidade. A eliminação pode ser limitada por obrigações legais ou outras hipóteses legítimas de conservação.</p>
      </section>
      <section><h2>Atualizações</h2><p>Esta página deve acompanhar mudanças nas funcionalidades e nos serviços utilizados pelo site. A data da revisão aparece no início do documento.</p></section>
    </LegalPage>
  );
}
