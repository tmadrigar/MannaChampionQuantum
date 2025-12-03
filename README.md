# Manna Quantum - Plataforma Educacional

Este é o repositório do site institucional do projeto Manna Quantum, uma iniciativa focada em metodologias de aprendizagem e avaliação para Educação 5.0.

## 🚀 Sobre o Projeto

O site serve como a principal landing page para o projeto Manna, apresentando sua missão, a equipe envolvida, destaques de mídia e uma galeria de vídeos. O projeto é desenvolvido com as tecnologias mais modernas de frontend e backend.

---

## 💻 Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (com App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Componentes UI:** [shadcn/ui](https://ui.shadcn.com/)
* **ORM:** [Prisma](https://www.prisma.io/)
* **Banco de Dados:** SQLite (para desenvolvimento)

---

## ⚙️ Como Executar Localmente

Siga os passos abaixo para configurar e rodar o projeto em sua máquina local.

### Pré-requisitos

* [Node.js](https://nodejs.org/en/) (v18 ou superior)
* [Yarn](https://classic.yarnpkg.com/en/docs/install) (gerenciador de pacotes)

### Passos de Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    cd seu-repositorio
    ```

2.  **Instale as dependências:**
    ```bash
    yarn install
    ```

3.  **Configure as Variáveis de Ambiente:**
    * Crie um arquivo `.env` na raiz do projeto, copiando o `.env.example` (se houver) ou adicionando a seguinte linha para o banco de dados Prisma:
    ```.env
    DATABASE_URL="file:./prisma/dev.db"
    ```

4.  **Configure o Banco de Dados Prisma:**
    * Gere o cliente Prisma:
    ```bash
    yarn prisma generate
    ```
    * (Se for a primeira vez) Empurre o schema para criar o banco de dados SQLite:
    ```bash
    yarn prisma db push
    ```

5.  **(Opcional) Popule o banco de dados:**
    * Se houver um script de seed, execute-o (verifique o `package.json` para o comando correto):
    ```bash
    yarn prisma db seed
    ```

6.  **Rode o servidor de desenvolvimento:**
    ```bash
    yarn dev
    ```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o projeto funcionando.

---

## 📂 Estrutura de Pastas

* **/app:** Contém todas as rotas e páginas do Next.js (App Router).
    * **/api:** Rotas de API (backend) do Next.js.
* **/components:** Componentes React reutilizáveis.
    * **/ui:** Componentes de baixo nível do `shadcn/ui`.
* **/lib:** Funções utilitárias, configuração do Prisma (`db.ts`).
* **/prisma:** Schema do banco de dados (`schema.prisma`) e o arquivo do banco (`dev.db`).
* **/public:** Arquivos estáticos (imagens, logos, fontes).
* **/scripts:** Scripts de automação (ex: `seed.ts`).

---

## 🤝 Apoiadores

Este projeto é apoiado por diversas instituições:
* UEM
* Fundação Araucária
* Governo do Estado do Paraná
* CNPQ
* Softex
* MCTI
* Governo Federal