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

## Pendências de conteúdo

- [ ] Número de WhatsApp comercial
- [ ] E-mail comercial
- [ ] Links das redes sociais
- [ ] Domínio definitivo
- [ ] Fotografias reais (opcional): os segmentos usam cenas ilustradas; fotos profissionais podem ser adicionadas em `public/images/segments/`
- [ ] Logomarca em versão para fundo claro, se houver (o site usa apenas fundos escuros para a logo)
- [ ] CNPJ e endereço, se quiser exibi-los no rodapé
