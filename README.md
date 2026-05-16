![Jornada Milhas](thumbnail.png)

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