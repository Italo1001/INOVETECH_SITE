# Plano de adequação da Inovetech

Preparado em 18/11/2026. Este é um plano de trabalho, não um parecer jurídico ou
certificação. As novas páginas são uma proposta baseada no site institucional
atual. A empresa deve validá-las antes de publicar, especialmente operações de
atendimento que não aparecem no código. Não há garantia de ausência de processos.

## Antes de publicar esta proposta

| Prioridade | Ação | Responsável | Critério para concluir |
| --- | --- | --- | --- |
| Alta | Confirmar razão social, CNPJ e endereço e cadastrar na Vercel | Empresa | Dados reais aparecem no rodapé e na página de privacidade |
| Alta | Configurar e-mail comercial ou WhatsApp e canal LGPD | Empresa | Contato funcional; solicitação de acesso/correção recebe resposta; não há só “em breve” |
| Alta | Validar os textos de privacidade e condições de uso | Empresa e assessoria jurídica | Texto corresponde às operações e ofertas reais; aprovação registrada |
| Alta | Conferir os cinco nomes de clientes em `config/clients.ts` | Empresa | Relação comercial e autorização de divulgação comprovadas; corrigir dados geográficos não confirmados |
| Alta | Conferir vídeo e imagem do Chef do Açaí em `public/videos/clientes/` | Empresa | Direitos do vídeo, música (se houver), marca e pessoas retratadas comprovados |
| Alta | Conferir ilustrações, logo, fotos e fontes | Empresa | Licenças comerciais e autorizações arquivadas; preservar avisos OFL/licenças de terceiros |
| Alta | Identificar controladora, fornecedores e operações de dados | Empresa | Inventário preenchido conforme tabela abaixo |
| Média | Testar páginas e contato no preview da Vercel | Desenvolvimento e empresa | Links, navegação móvel, canal LGPD e cabeçalhos conferidos |

A ausência de comprovação no repositório não prova que uma autorização inexista.
Se uma utilização não for autorizada, retirar o material da publicação e avaliar
cópias no histórico, CDN e outras divulgações. Apenas esconder uma seção não torna
um vídeo em `public/` privado.

## Inventário a preencher pela empresa

Para cada operação (acesso ao site, e-mail, WhatsApp, proposta e contrato), registrar:

- Categorias de dados e de titulares; finalidade e base legal aplicável.
- Quem decide o tratamento e quais operadores/fornecedores participam.
- Quem acessa; onde armazena; medidas de proteção e como revoga acesso.
- Prazo concreto de retenção e justificativa; descarte e tratamento de backups.
- Localidades de processamento e mecanismo aplicável a transferências internacionais.
- Como recebe, verifica e atende solicitações de titulares; prazos aplicáveis.

As configurações de logs, ferramentas de análise, integrações e fornecedores de
atendimento não podem ser confirmadas somente pelo repositório. Conferir também o
painel da Vercel. Não ativar rastreamento opcional sem rever o aviso e a base legal.
Se depender de consentimento, bloquear antes da escolha, oferecer recusa acessível
e permitir revogação. O código atual não justifica adicionar um banner decorativo.

## Contas, operação e incidentes

- [ ] Ativar MFA/passkeys no GitHub, Vercel, registrador e contas de recuperação.
- [ ] Revisar membros, aplicativos e tokens; remover acessos desnecessários.
- [ ] Configurar proteção da `main`, revisão e CI obrigatório; a disponibilidade pode depender do plano.
- [ ] Conferir variáveis nos ambientes Production/Preview; `NEXT_PUBLIC_*` é público.
- [ ] Ativar alertas de dependências e de segredos disponíveis na conta.
- [ ] Revisar regras de firewall/limitação de tráfego da hospedagem conforme plano e necessidade.
- [ ] Documentar restauração e rollback; testar backups de dados quando existirem.
- [ ] Designar quem coordena incidentes e quem contata fornecedores e titulares.
- [ ] Em incidente: conter, preservar evidências com acesso restrito, avaliar dados/impactos,
  corrigir, recuperar e avaliar comunicações obrigatórias nos prazos aplicáveis.
- [ ] Registrar testes e aprovações; rever quando adicionar integrações, formulários ou login.

## Ofertas comerciais

Conferir identificação e contato, características dos serviços, preços e despesas
quando houver oferta, disponibilidade, condições, prazos, restrições e atendimento.
Validar regras aplicáveis a contratação remota, arrependimento, garantias e
cancelamento com assessoria jurídica. Não prometer resultados ou certificações sem
comprovação. Termos genéricos não afastam direitos legais.

## Área de downloads futura — critérios antes de disponibilizar

O projeto atual não contém autenticação, banco ou downloads restritos. Não criar um
“login” apenas visual nem usar MAC, IP, link escondido ou `robots.txt` como autorização.

- [ ] Escolher provedor de identidade e armazenamento privado compatíveis com o orçamento.
- [ ] Criar contas individuais apenas para pessoas autorizadas, sem cadastro público aberto.
- [ ] Aplicar MFA, recuperação segura, expiração de sessão e revogação.
- [ ] Conferir identidade e permissão no servidor em toda requisição de arquivo.
- [ ] Se usar URLs assinadas, validade curta; reconhecer que são compartilháveis enquanto válidas.
- [ ] Impedir cache público de respostas privadas e impedir enumeração/path traversal.
- [ ] Guardar credenciais somente no servidor; menor privilégio; logs sem tokens.
- [ ] Testar sem login, conta sem permissão, sessão revogada, URL expirada, acesso direto
  ao armazenamento e tentativa de trocar o identificador do arquivo.
- [ ] Revisar LGPD, retenção e avisos conforme os novos dados tratados.

## Referências para validação

- LGPD: https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm
- Materiais da ANPD (cookies, segurança e bases legais): https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes
- Incidentes: https://www.gov.br/anpd/pt-br/canais_atendimento/agente-de-tratamento/comunicado-de-incidente-de-seguranca-cis
- Comércio eletrônico: https://www.planalto.gov.br/ccivil_03/_ato2011-2014/2013/decreto/d7962.htm
- Direitos autorais: https://www.planalto.gov.br/ccivil_03/leis/l9610.htm
- Controle de acesso: https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html
