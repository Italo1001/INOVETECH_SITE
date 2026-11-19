# Avaliação inicial de segurança — Inovetech

Data: 18/11/2026 (horário de Brasília).
Alvo autorizado: https://inovetech-site.vercel.app
Código inicial: `35939c2a9214d8553c5ab573ce559fca654ad790`.

## Escopo e limites

Testes de baixo volume e somente leitura, antes de alterar o código: GET/HEAD da
página pública, poucos caminhos comuns, inspeção de cabeçalhos/HTML, revisão do
código e auditoria de dependências. Sem tentativa de obter contas, força bruta,
carga, alteração de dados ou exploração de terceiros. Não é um pentest completo.
Ausência de achados nesses testes não demonstra ausência de vulnerabilidades.

## Resultados anteriores às alterações

| Verificação | Resultado observado |
| --- | --- |
| Página inicial HTTPS | 200; resposta HTML |
| CSP, HSTS, anti-clickjacking, nosniff e Permissions-Policy | Presentes na resposta pública |
| CSP de scripts | Permite `'unsafe-inline'`; não permite `'unsafe-eval'` em produção |
| `/.env`, `/.env.local`, `/.git/config`, `/package.json` | 404 nos caminhos testados |
| `/api`, `/admin`, `/downloads` | 404; não demonstram existência de área privada |
| `/privacidade`, `/termos` | 404 |
| `/robots.txt`, `/sitemap.xml` | 200 |
| Cookie de resposta da página inicial | Sem `Set-Cookie` observado; não é auditoria completa de cookies |
| Recursos HTML e código de navegação | Não foram identificados rastreadores ou uso de localStorage/sessionStorage no código revisado |
| Canais comerciais no HTML público | Não foram encontrados links `mailto:` ou `https://wa.me/` |
| Arquivos rastreados | Somente `.env.example` entre os nomes de configuração sensível pesquisados |
| Padrões comuns de chaves privadas/tokens no código atual | Nenhuma ocorrência nos padrões pesquisados; não substitui scanner completo do histórico |
| Histórico dos nomes `.env`, `.env.local`, `.env.production`, `*.pem`, `*.key` | Nenhum commit retornado na pesquisa por esses nomes |
| `npm audit --json` | 0 vulnerabilidades conhecidas reportadas, incluindo desenvolvimento |
| Lint, build e typecheck do código inicial | Aprovados |

## Correções desta proposta

- Páginas estáticas `/privacidade` e `/termos`, com navegação, canonical próprio e sitemap.
- Campos públicos opcionais para identificação empresarial e canal de privacidade,
  sem inventar dados. Precisam ser preenchidos na hospedagem.
- Validação de e-mail, telefone e URLs de configuração: rejeita esquemas inseguros,
  credenciais em URLs, caracteres de controle e parâmetros injetados no e-mail.
- `script-src-attr 'none'` para bloquear handlers inline em navegadores compatíveis;
  DNS prefetch desativado. Elementos script inline continuam sujeitos ao risco abaixo.
- Apresentações ilustrativas identificadas sem prometer vídeo futuro ou operação real.
- Testes de validação e smoke checks HTTP reproduzíveis no CI.
- Motor de animações montado na página inicial para reinstalar observadores ao voltar das páginas legais.
- Plano de adequação com responsáveis, evidências e critérios para downloads privados.

## Riscos e pendências

1. **CSP com scripts inline:** não foi observada exploração XSS nos testes limitados.
   `script-src-attr 'none'` reduz uma classe de injeção, mas não bloqueia um elemento
   `<script>` inline. Uma CSP com nonce por requisição requer renderização dinâmica,
   alteração de PPR/cache e testes de navegador; não basta remover `unsafe-inline`.
   Manter a revisão de entradas e escaping. Não declarar a CSP atual como estrita.
2. **Dados e autorizações:** confirmar canal funcional, identificação empresarial,
   bases legais, retenção, fornecedores e materiais de clientes conforme o plano.
3. **Configurações de conta:** MFA, membros, proteção de branch, logs, firewall e
   variáveis da Vercel não foram auditados pelo acesso ao código/site público.
4. **Arquivos públicos:** o vídeo em `public/videos/clientes/` é público. Não há
   mecanismo de downloads exclusivos nesta versão.
5. **Navegador:** a execução local do Chromium foi impedida pelo ambiente. Não foi
   concluída validação visual, de hidratação, de cookies após interação nem de CSP
   durante interações; conferir no preview antes do merge.

## Reproduzir

```bash
npm ci
npm audit
npm test
npm run lint
npm run build
npm run typecheck
npm start -- --hostname 127.0.0.1
# Em outro terminal:
npm run security:check -- http://127.0.0.1:3000
# Produção anterior a esta proposta (não exige novas páginas):
npm run security:check -- https://inovetech-site.vercel.app --baseline
```

O modo baseline passou nos 7 grupos de verificações HTTP da versão pública. Os
novos checks devem rodar sobre o build proposto/preview; o site público só muda
após merge e publicação. O resultado do npm audit depende dos avisos disponíveis
no registro no momento da execução, e não prova que um pacote é invulnerável.

## Validação da proposta

- `npm test`: 4 testes aprovados, incluindo configurações malformadas e tentativas
  de injetar parâmetros/cabeçalhos no e-mail.
- `npm run lint`, `npm run build`, `npm run typecheck`: aprovados.
- Smoke checks do build de produção local: 10 grupos aprovados (cabeçalhos,
  arquivos sensíveis, páginas legais, canonical e sitemap).
- `npm audit --omit=dev --audit-level=high`: 0 vulnerabilidades reportadas.
- Verificação visual/interativa: pendente pelas restrições do ambiente, sem alegar
  confirmação de hidratação ou de comportamento efetivo de CSP no navegador.
