![Jornada Milhas](thumbnail.png)
# Jornada Milhas

O Jornada Milhas é uma aplicacao Angular utilizada no curso da Alura para evoluir funcionalidades com testes unitarios e e2e.

<img src="screenshot.png" alt="Imagem do Jornada Milhas" width="50%">

## Funcionalidades

- Busca e navegacao entre paginas da aplicacao
- Fluxo de reserva e pagamento
- Listagem e cancelamento de pedidos
- Testes unitarios com Jest
- Testes end-to-end com Cypress

## Tecnologias

- Angular 16
- Angular Material
- Jest
- Cypress
- ESLint
- GitHub Actions

## Pre-requisitos

- Node.js 18 LTS
- npm 9+
- Angular CLI 16 opcional

Instalacao opcional da CLI global:

```bash
npm install -g @angular/cli@16
```

## Instalacao

Entre na pasta do projeto Angular:

```bash
cd jornada-milhas
```

Instale as dependencias com o lockfile versionado:

```bash
npm ci
```

Se voce alterar dependencias no `package.json`, rode `npm install` para regenerar o `package-lock.json` antes de usar `npm ci` novamente.

## Dependencias importantes

Algumas dependencias de desenvolvimento relevantes no estado atual do projeto:

- `jest` `^29.7.0`
- `jest-preset-angular` `^14.6.2`
- `@cypress/schematic` `^2.5.2`
- `cypress` `13.17.0`

O Cypress foi fixado em versao especifica para evitar instabilidade no CI causada por `latest`.

## Executando o projeto localmente

O frontend Angular roda em `http://localhost:4200`.

```bash
npm start
```

## Backend local

Este frontend em ambiente de desenvolvimento consome a API em `http://localhost:8081`.

O arquivo de ambiente local esta em [src/environments/environment.development.ts](src/environments/environment.development.ts).

Para subir a API local, entre no projeto backend e execute:

```bash
cd ../jornada-milhas-api
npm install
npm run start
```

No estado atual, a API usa a porta `8081` por padrao e pode ser alterada pela variavel de ambiente `PORT`.

Exemplo:

```bash
PORT=8090 npm run start
```

Se voce alterar a porta da API, lembre-se de ajustar o `apiUrl` do ambiente de desenvolvimento no frontend.

## Testes unitarios

Executa toda a suite com Jest:

```bash
npx jest --ci --runInBand
```

Para rodar um arquivo especifico:

```bash
npx jest src/app/pedidos/pedidos.component.spec.ts --runInBand
```

## Testes end-to-end com Cypress

Configuracao atual do Cypress:

- Base URL: `http://localhost:4200`
- Arquivo de configuracao: [cypress.config.ts](cypress.config.ts)

Abrir o Cypress interativamente:

```bash
npm run cypress:open
```

Executar os testes em modo headless:

```bash
npm run cypress:run
```

Antes de rodar os testes e2e, garanta que:

1. O frontend esteja ativo em `http://localhost:4200`
2. A API esteja ativa em `http://localhost:8081`

## Build

Build padrao do Angular:

```bash
npm run build
```

Build de desenvolvimento:

```bash
npm run build -- --configuration development
```

## Lint

```bash
npm run lint
```

## Integracao continua

O workflow de CI esta em [.github/workflows/ci.yml](.github/workflows/ci.yml).

O pipeline possui dois jobs independentes:

### Job `build-and-test`

Valida a compilacao e os testes unitarios:

1. `npm ci`
2. `npm run build`
3. `npx jest --ci --runInBand`

### Job `e2e-cypress`

Executa apos o `build-and-test` (`needs: build-and-test`) e roda os testes e2e:

1. `npm ci`
2. Sobe o Angular com `npm start`
3. Aguarda `http://localhost:4200` estar disponivel (timeout 120s)
4. Executa `npm run cypress:run` via `cypress-io/github-action@v6`

As chamadas HTTP feitas pela aplicacao durante os testes e2e sao interceptadas via `cy.intercept` configurado em [cypress/support/e2e.ts](cypress/support/e2e.ts), o que torna os testes independentes da API backend.

Specs e2e executados:

- `cypress/e2e/pagamento.spec.cy.ts`: 4 testes
- `cypress/e2e/reserva.spec.cy.ts`: 3 testes

As actions do GitHub foram atualizadas para:

- `actions/checkout@v5`
- `actions/setup-node@v5`

Isso evita o warning de deprecacao do runtime Node 20 nas GitHub Actions.

## Solucao de problemas

### `npm ci` falha por lockfile fora de sincronia

Se aparecer erro dizendo que `package.json` e `package-lock.json` nao estao sincronizados:

```bash
npm install
npm ci
```

Depois, versiona tambem o `package-lock.json` atualizado.

### Porta `4200` ocupada

Se o Angular informar que a porta `4200` ja esta em uso, finalize o processo atual ou suba em outra porta:

```bash
npm start -- --port 4300
```

### Porta `8081` ocupada

Se a API falhar com `EADDRINUSE`, finalize o processo que esta usando a porta ou execute com outra porta via `PORT`.

## Observacoes

- O projeto usa `npm ci` no CI, entao mantenha o lockfile sempre atualizado.
- O backend desta workspace esta na pasta irma `../jornada-milhas-api`.
- A documentacao Swagger da API fica disponivel em `/api` quando o backend esta em execucao.

## Referencias

- Figma do projeto: https://www.figma.com/file/SI696t31Q9zlsXKttCoqKP/Angular%3A-Componentização-e-Design-com-Angular-Material-%7C-Jornada-Milhas?type=design&node-id=4-6408&mode=design&t=mmbAh5QEafSRIGqQ-0
- Projeto backend utilizado nesta workspace: [../jornada-milhas-api](../jornada-milhas-api)