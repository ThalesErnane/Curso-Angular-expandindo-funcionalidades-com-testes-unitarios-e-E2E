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
- `cypress` `15.15.0`

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

Atualmente o pipeline executa:

1. `npm ci`
2. `npm run build`
3. `npx jest --ci --runInBand`

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

# Jornada Milhas

O Jornada Milhas é uma StartUP. 
Nesse momento, é um MVP que tá só começando e ainda tem muitas funcionalidades novas para serem desenvolvidas.

<img src="screenshot.png" alt="Imagem do Jornada Milhas" width="50%">


## 🔨 Funcionalidades do projeto

Nesse primeiro momento, nós temos a página que foi idealizada como a primeiro entrega do time de desenvolvimento.

Durante o curso, nós vamos desenvolver o controle do formulário de busca. 
O desafio é criar um componente que é controlado por um FormControl e centralizar o controle de estado do formulário de busca, onde temos parte dentro do formulário e parte dentro da modal.

O [Figma dessa aplicação você encontra aqui](https://www.figma.com/file/SI696t31Q9zlsXKttCoqKP/Angular%3A-Componentização-e-Design-com-Angular-Material-%7C-Jornada-Milhas?type=design&node-id=4-6408&mode=design&t=mmbAh5QEafSRIGqQ-0).

## ✔️ Técnicas e tecnologias utilizadas

Se liga nessa lista de tudo que usaremos nesse curso:

- `Angular`
- `Angular CLI`
- `Angular Material`
- `Figma`

E muito mais!

## 📦 Instalação de todas as dependências (passo a passo)

### 1) Pré-requisitos

- Node.js 18 LTS
- npm 9+
- Angular CLI 16 (opcional, para usar o comando `ng` globalmente)

```bash
npm install -g @angular/cli@16
```

### 2) Acesse a pasta do projeto

```bash
cd jornada-milhas
```

### 3) Instale todas as dependências do projeto (recomendado)

Como o projeto possui `package-lock.json`, o melhor caminho é instalar exatamente as versões já validadas:

```bash
npm ci
```

Esse comando instala tudo que está em `dependencies` e `devDependencies`.

### 4) Instalação manual completa (alternativa)

Use esta opção apenas se você precisar reconstruir o `package.json` manualmente.

Dependências de produção:

```bash
npm install @angular/animations@^16.0.0 @angular/cdk@^16.0.1 @angular/common@^16.0.0 @angular/compiler@^16.0.0 @angular/core@^16.0.0 @angular/forms@^16.0.0 @angular/material@^16.0.1 @angular/platform-browser@^16.0.0 @angular/platform-browser-dynamic@^16.0.0 @angular/router@^16.0.0 jwt-decode@^3.1.2 rxjs@~7.8.0 tslib@^2.3.0 zone.js@~0.13.0
```

Dependências de desenvolvimento:

```bash
npm install -D @angular-devkit/build-angular@^16.0.0 @angular/cli@~16.0.0 @angular/compiler-cli@^16.0.0 @types/jasmine@~4.3.0 @types/jest@^29.5.12 @typescript-eslint/eslint-plugin@5.62.0 @typescript-eslint/parser@5.62.0 eslint@^8.51.0 jasmine-core@~4.6.0 jest@^29.7.0 jest-preset-angular@^14.6.2 karma@~6.4.0 karma-chrome-launcher@~3.2.0 karma-coverage@~2.2.0 karma-jasmine@~5.1.0 karma-jasmine-html-reporter@~2.0.0 typescript@~5.0.2
```

## 🛠️ Abrir e rodar o projeto

Para abrir e rodar o projeto:

```bash
npm ci
npm run start
```

Depois, acesse <a href="http://localhost:4200/">http://localhost:4200/</a> no seu navegador.

## ✅ Validação pós-instalação

Após instalar as dependências, você pode validar rapidamente se o ambiente está pronto:

```bash
npm run build
npx jest --listTests src/app/detalhe/detalhe.component.spec.ts
```

- `npm run build`: valida a compilação do projeto Angular.
- `npx jest --listTests ...`: valida que o Jest está configurado e descobrindo os testes.

O backend utilizado você encontra [aqui](https://github.com/viniciosneves/jornada-milhas-api).

## 🤖 Integração Contínua (GitHub Actions)

Este projeto possui um pipeline de CI configurado em `.github/workflows/ci.yml`, que é executado automaticamente em todo push ou pull request para a branch `main`.

### Passos do pipeline

| Passo | Descrição |
|---|---|
| `checkout` | Clona o repositório |
| `setup-node` | Configura Node.js 18 com cache de npm |
| `npm ci` | Instala as dependências de forma reproduzível |
| `npm run build` | Compila o projeto Angular |
| `npx jest --ci --runInBand` | Executa todos os testes unitários em modo CI |

### Executar os testes localmente

```bash
npx jest --ci --runInBand
```

## 📚 Mais informações do curso

O Jornada Milhas é uma StartUP fictícia utilizada nesse curso da Alura.
A ideia principal desse curso é evoluir ainda mais os conhecimentos em Angular e estilização de componentes.