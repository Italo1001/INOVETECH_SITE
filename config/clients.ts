/**
 * Clientes exibidos na seção "Clientes".
 *
 * - `color`: cor característica usada no rótulo, no fundo ao passar o mouse e na janela do vídeo.
 * - `video`: quando houver gravação real do cliente, coloque o arquivo em
 *   public/videos/clientes/ (MP4/H.264, até ~15 s, sem áudio) e informe o caminho aqui.
 *   Sem `video`, o site exibe a animação ilustrativa feita em código.
 */

export type ClientScene = "balneario" | "acai" | "espetinho" | "sunset" | "pizzaria";

export type Client = {
  slug: string;
  name: string;
  segment: string;
  location?: string;
  color: string;
  headline: string;
  status: string;
  scene: ClientScene;
  /** Posição do rótulo sobre a palavra gigante (desktop), em % */
  position: { top: string; left: string; rotate: number };
  video?: { src: string; poster?: string };
};

export const clients: Client[] = [
  {
    slug: "balneario-sao-francisco",
    name: "Balneário São Francisco",
    segment: "Restaurante",
    location: "À beira do Rio São Francisco",
    color: "#22D3EE",
    headline: "O sabor do Velho Chico, com a operação na palma da mão",
    status: "Comanda enviada à cozinha",
    scene: "balneario",
    position: { top: "54%", left: "4%", rotate: -7 },
  },
  {
    slug: "chefe-do-acai",
    name: "Chefe do Açaí",
    segment: "Açaiteria",
    color: "#B26BFF",
    headline: "Açaí no ponto, atendimento no ritmo",
    status: "Pedido pronto para retirada",
    scene: "acai",
    position: { top: "18%", left: "24%", rotate: 5 },
  },
  {
    slug: "espetinho-paulista",
    name: "Espetinho Paulista",
    segment: "Espetos e baião cremoso",
    color: "#FF4D2E",
    headline: "Brasa acesa, pedido na hora certa",
    status: "Espeto misto na brasa",
    scene: "espetinho",
    position: { top: "64%", left: "36%", rotate: -4 },
  },
  {
    slug: "sunset-cactus-resort",
    name: "Sunset Cactus Resort",
    segment: "Resort",
    location: "Crateús – CE",
    color: "#4ADE80",
    headline: "Descanso no sertão, operação sem pausa",
    status: "Check-in confirmado",
    scene: "sunset",
    position: { top: "30%", left: "58%", rotate: 6 },
  },
  {
    slug: "sbarra-aki",
    name: "Sbarra Aki",
    segment: "Pizzaria",
    color: "#FACC15",
    headline: "Pizza quente, caixa organizado",
    status: "Pizza saiu para entrega",
    scene: "pizzaria",
    position: { top: "62%", left: "74%", rotate: -6 },
  },
];
