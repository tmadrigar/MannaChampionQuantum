# Manual de Deploy - Manna Champion Quantum

Este projeto utiliza **Next.js 14**, **Prisma ORM** e **SQLite**.

## Requisitos do Servidor
- Node.js 18.17 ou superior
- NPM ou Yarn

## Passo a Passo para Instalação (Servidor Linux/VPS)

1. **Upload dos Arquivos**
   - Suba todos os arquivos para o servidor (exceto a pasta `node_modules` e `.next`).
   - OU faça o clone do repositório:
     `git clone https://github.com/tmadrigar/MannaChampionQuantum.git`

2. **Instalar Dependências**
   Execute na raiz do projeto:
   ```bash
   npm install