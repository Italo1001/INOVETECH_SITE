# Inovetech Soluções Tecnológicas — Site institucional

Site One Page da Inovetech, feito em **Next.js 16 (App Router) + TypeScript + Tailwind CSS 4**, com efeitos **3D e parallax** feitos em CSS e um script próprio bem pequeno, sem bibliotecas pesadas nem WebGL.

> **Tecnologia que transforma negócios.**

## Destaques

- **3D e parallax**: painel do hero em 3D real (`preserve-3d`) que acompanha o mouse; cartões que se inclinam com reflexo de luz; pilha isométrica que se abre com a rolagem; fundos em camadas com parallax.
- **Velocidade**: página **estática**, servida direto da CDN. Um único motor de efeitos (~3 KB) com `requestAnimationFrame`, `IntersectionObserver` e eventos passivos. Fonte Geist auto-hospedada (`geist`), imagens via `next/image` (AVIF/WebP) e nenhum recurso de terceiros.
- **Segurança**: CSP restritiva, HSTS, anti-clickjacking, Permissions-Policy, links externos seguros, nenhuma credencial no código, Dependabot e CI. Detalhes em [SECURITY.md](SECURITY.md).
- **Acessibilidade**: HTML semântico, um único H1, link "Pular para o conteúdo", foco visível, menu mobile com `aria-expanded`/Esc/`inert`, respeito a `prefers-reduced-motion` e contraste AA.
- **SEO**: metadados, Open Graph, Twitter Card, canonical, `sitemap.xml`, `robots.txt`, manifest, ícones e JSON-LD `Organization` só com dados verificados.

## Estrutura

```
app/                  layout, página, sitemap, robots, manifest, ícones
components/sections/  Header, Hero, Soluções, Segmentos, Diferenciais, Sobre, CTA, Footer
components/visuals/   Composição 3D do hero
components/ui/        Logo, motor de efeitos, títulos, ícones
config/site.ts        Dados comerciais (lidos das variáveis de ambiente)
config/content.ts     Textos do site
lib/contact.ts        Link do WhatsApp e links externos seguros
public/brand/         Logomarca oficial (versão branca com arco laranja)
public/images/        Imagem de compartilhamento (Open Graph)
```

## Rodar localmente

Requisitos: Node.js 20.9 ou superior.

```bash
npm install
cp .env.example .env.local   # preencha os dados
npm run dev                  # http://localhost:3000
```

Verificações:

```bash
npm run lint
npm run typecheck
npm run build && npm start
```

## Dados comerciais (variáveis de ambiente)

| Variável | Exemplo | Uso |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://www.seudominio.com.br` | Canonical, sitemap, Open Graph |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `5521999999999` | Botões "Fale com um especialista" |
| `NEXT_PUBLIC_WHATSAPP_MESSAGE` | texto | Mensagem pré-preenchida (opcional) |
| `NEXT_PUBLIC_CONTACT_EMAIL` | `contato@...` | Rodapé |
| `NEXT_PUBLIC_INSTAGRAM_URL` / `LINKEDIN` / `FACEBOOK` | `https://...` | Ícones sociais |

Enquanto o WhatsApp não for configurado, os botões levam até a seção de contato (nenhum número é inventado).

## Publicar na Vercel

1. Acesse https://vercel.com/new e importe o repositório **Italo1001/INOVETECH_SITE**.
2. Framework: Next.js (detectado automaticamente). Não é preciso alterar os comandos.
3. Em **Settings → Environment Variables**, cadastre as variáveis acima para *Production* e *Preview*.
4. Clique em **Deploy**. A cada `git push` na `main` sai um novo deploy; cada branch ou PR ganha uma URL de pré-visualização.

### Domínio próprio

Em **Settings → Domains**, adicione o domínio, configure o DNS conforme indicado pela Vercel (registro `A` ou `CNAME`) e atualize `NEXT_PUBLIC_SITE_URL` para o novo endereço. O HTTPS é emitido automaticamente.

## Versões

As versões ficam registradas no [CHANGELOG.md](CHANGELOG.md) e marcadas com **tags** no GitHub (`v1.0.0`, `v1.1.0`...). Para criar uma nova versão:

```bash
npm version minor            # ou patch / major — atualiza package.json e cria a tag
git push origin main --follow-tags
```

Para voltar a uma versão anterior na Vercel: **Deployments → … → Promote to Production** no deploy desejado.

## Seção Clientes

Os clientes ficam em `config/clients.ts` (nome, segmento, cor, frase e posição do rótulo). Para trocar a animação por um **vídeo real**:

1. Salve o vídeo em `public/videos/clientes/` (MP4 H.264, 10–15 s, sem áudio, até ~3 MB; ex.: `balneario.mp4`).
2. No cliente correspondente, adicione `video: { src: "/videos/clientes/balneario.mp4" }`.

Para adicionar um cliente, copie um bloco existente e ajuste nome, cor e `position` (posição do rótulo sobre a palavra).

## Pendências de conteúdo

- [x] Número de WhatsApp comercial
- [] E-mail comercial
- [] Links das redes sociais
- [ ] Domínio definitivo
- [ ] Fotografias reais (opcional): os segmentos usam cenas ilustradas; fotos profissionais podem ser adicionadas em `public/images/segments/`
- [ ] Logomarca em versão para fundo claro, se houver (o site usa apenas fundos escuros para a logo)
- [ ] Vídeos reais dos clientes (seção Clientes)
- [ ] Logos/cores oficiais dos clientes, se quiser refletir a identidade de cada um
- [ ] Razão social, CNPJ, endereço e canal de privacidade reais; verificar as obrigações de identificação aplicáveis às ofertas comerciais

## Segurança e privacidade

As páginas `/privacidade` e `/termos` descrevem o site institucional atual. Antes de
publicar, a empresa precisa conferir dados, fornecedores, retenção, bases legais e
autorizações conforme [o plano de adequação](docs/compliance-plan.md). Não são uma
certificação jurídica. Preencha as novas variáveis empresariais de `.env.example`
na Vercel; nunca utilize `NEXT_PUBLIC_*` para segredos.

```bash
npm test
npm run security:check -- http://127.0.0.1:3000
# Verificação somente de leitura da publicação atual:
npm run security:check -- https://inovetech-site.vercel.app
```

O servidor precisa estar em execução (`npm run build` e `npm start`). O modo
`--baseline` verifica as proteções existentes sem exigir as novas páginas/cabeçalhos.
Veja [a avaliação inicial e suas limitações](docs/security-review.md).

Arquivos dentro de `public/` e arquivos de um repositório público são públicos.
Não coloque downloads restritos nesses locais. A área privada futura exige projeto
próprio de autenticação, autorização no servidor e armazenamento privado.
