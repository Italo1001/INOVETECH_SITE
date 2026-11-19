# Política de segurança

## Medidas aplicadas

- Páginas institucionais geradas estaticamente e compatíveis com CDN da Vercel; sem API própria de dados, login ou formulários. A hospedagem ainda utiliza infraestrutura de servidor.
- HTTPS obrigatório com HSTS (`max-age` de 2 anos, `includeSubDomains`, `preload`).
- Content Security Policy com restrições de origem (scripts inline ainda permitidos): nenhum script, fonte, imagem ou iframe de terceiros; `object-src 'none'`, `frame-ancestors 'none'`, `base-uri 'self'`, `form-action 'self'`.
- `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Cross-Origin-Opener-Policy: same-origin` e `Permissions-Policy` bloqueando câmera, microfone, geolocalização etc.
- Cabeçalho `X-Powered-By` removido.
- Links externos com `rel="noopener noreferrer"`; URLs de redes sociais aceitas somente com `https://`.
- Nenhuma credencial no código. Variáveis em `.env*` são ignoradas pelo Git.
- Dependências monitoradas pelo Dependabot e `npm audit` no CI.

## Avaliação e limitações

Consulte [a avaliação inicial](docs/security-review.md) e [o plano de adequação](docs/compliance-plan.md).
Não há garantia de segurança total ou de conformidade apenas pela presença destes
cabeçalhos. `script-src-attr 'none'` bloqueia handlers inline, mas a CSP ainda aceita
elementos script inline necessários ao build estático atual.

## Recomendações na conta

- Ativar autenticação em dois fatores no GitHub e na Vercel.
- Proteger a branch `main` (exigir CI aprovado antes do merge).
- Após apontar o domínio próprio, enviar em https://hstspreload.org (opcional).

## Relatar uma vulnerabilidade

Utilize os canais comerciais configurados no site. Não publique credenciais ou
dados pessoais em issues abertas. A empresa precisa manter um canal funcional
para receber relatos e solicitações de privacidade.
