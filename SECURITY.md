# Política de segurança

## Medidas aplicadas

- Página 100% estática servida pela CDN da Vercel (sem servidor, banco de dados ou formulários expostos).
- HTTPS obrigatório com HSTS (`max-age` de 2 anos, `includeSubDomains`, `preload`).
- Content Security Policy restritiva: nenhum script, fonte, imagem ou iframe de terceiros; `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`.
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Cross-Origin-Opener-Policy: same-origin` e `Permissions-Policy` bloqueando câmera, microfone, geolocalização etc.
- Cabeçalho `X-Powered-By` removido.
- Links externos com `rel="noopener noreferrer"`; URLs de redes sociais aceitas somente com `https://`.
- Nenhuma credencial no código. Variáveis em `.env*` são ignoradas pelo Git.
- Dependências monitoradas pelo Dependabot e `npm audit` no CI.

## Recomendações na conta

- Ativar autenticação em dois fatores no GitHub e na Vercel.
- Proteger a branch `main` (exigir CI aprovado antes do merge).
- Após apontar o domínio próprio, enviar em https://hstspreload.org (opcional).

## Relatar uma vulnerabilidade

Entre em contato pelo e-mail comercial da Inovetech informado no site.
