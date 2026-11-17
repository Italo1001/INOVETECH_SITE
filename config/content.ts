/** Textos institucionais separados dos componentes para facilitar manutenção. */

export const hero = {
  eyebrow: "Tecnologia que transforma negócios",
  title: "Tecnologia inteligente para impulsionar o seu negócio.",
  subtitle:
    "A Inovetech oferece soluções completas em sistemas de gestão, automação comercial, infraestrutura de TI e segurança eletrônica, ajudando empresas a operar com mais eficiência, controle e produtividade.",
  primaryCta: "Conheça nossas soluções",
  secondaryCta: "Fale com um especialista",
};

export type SolutionIcon =
  | "pdv"
  | "automation"
  | "support"
  | "network"
  | "cctv"
  | "equipment";

export const solutions: { icon: SolutionIcon; title: string; description: string }[] = [
  {
    icon: "pdv",
    title: "Sistemas de Gestão e PDV",
    description:
      "Soluções para organizar vendas, acompanhar operações e melhorar o controle de estabelecimentos comerciais.",
  },
  {
    icon: "automation",
    title: "Automação Comercial",
    description:
      "Implantação e integração de equipamentos e tecnologias para otimizar processos de venda e atendimento.",
  },
  {
    icon: "support",
    title: "Suporte Técnico Especializado",
    description:
      "Atendimento técnico, manutenção de computadores, servidores e suporte à infraestrutura tecnológica.",
  },
  {
    icon: "network",
    title: "Redes e Infraestrutura",
    description:
      "Projetos e implantação de redes cabeadas, Wi-Fi corporativo, roteadores, switches e organização de racks.",
  },
  {
    icon: "cctv",
    title: "Segurança Eletrônica e CFTV",
    description:
      "Projetos, instalação e manutenção de sistemas de videomonitoramento para ambientes comerciais.",
  },
  {
    icon: "equipment",
    title: "Equipamentos Comerciais",
    description:
      "Impressoras térmicas, leitores de código de barras e equipamentos para operações comerciais.",
  },
];

export type SegmentIcon = "restaurant" | "market" | "retail" | "office";

export const segments: {
  icon: SegmentIcon;
  title: string;
  description: string;
  tags: string[];
}[] = [
  {
    icon: "restaurant",
    title: "Restaurantes e bares",
    description: "Do salão à cozinha, com atendimento ágil e controle do caixa.",
    tags: ["PDV", "Comandas", "Impressoras"],
  },
  {
    icon: "market",
    title: "Supermercados e mercados",
    description: "Frente de caixa rápida, estoque organizado e operação monitorada.",
    tags: ["Automação", "Leitores", "CFTV"],
  },
  {
    icon: "retail",
    title: "Lojas e varejo",
    description: "Vendas, estoque e segurança integrados em uma operação única.",
    tags: ["Gestão", "Etiquetas", "Rede"],
  },
  {
    icon: "office",
    title: "Empresas e escritórios",
    description: "Infraestrutura estável, rede segura e suporte técnico especializado.",
    tags: ["Redes", "Wi-Fi", "Suporte"],
  },
];

export const differentials: { title: string; description: string }[] = [
  {
    title: "Atendimento especializado",
    description: "Profissionais que entendem a rotina do seu negócio e falam a sua língua.",
  },
  {
    title: "Soluções integradas",
    description: "Sistema, equipamentos, rede e segurança funcionando como um único ecossistema.",
  },
  {
    title: "Implantação e configuração",
    description: "Instalação completa, configuração e orientação para a sua equipe começar bem.",
  },
  {
    title: "Suporte técnico",
    description: "Acompanhamento próximo para manter a operação funcionando sem surpresas.",
  },
  {
    title: "Projetos personalizados",
    description: "Cada solução é dimensionada para o tamanho e as necessidades da sua empresa.",
  },
  {
    title: "Compromisso com a operação do cliente",
    description: "Nosso foco é a continuidade do seu atendimento, das vendas e do caixa.",
  },
];

export const about = {
  title: "Conectamos tecnologia, eficiência e resultados.",
  paragraphs: [
    "A Inovetech Soluções Tecnológicas atua oferecendo soluções para empresas que buscam modernizar suas operações, melhorar processos e contar com uma infraestrutura tecnológica confiável.",
    "Nosso trabalho integra sistemas de gestão, automação comercial, suporte técnico, redes e segurança eletrônica, proporcionando uma experiência completa de atendimento.",
  ],
  layers: [
    "Segurança eletrônica",
    "Redes e infraestrutura",
    "Suporte técnico",
    "Automação comercial",
    "Sistemas de gestão",
  ],
};

export const cta = {
  title: "Sua empresa está pronta para o próximo nível?",
  text: "Conte com a Inovetech para encontrar as soluções tecnológicas ideais para o seu negócio.",
  button: "Conversar com um especialista",
};
