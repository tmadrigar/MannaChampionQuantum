# Guia Completo de Deploy - Manna Champion Quantum 2025

Este guia contém as instruções para instalar e atualizar a aplicação no servidor de produção.

## 🛠️ Tecnologias Utilizadas
- **Framework:** Next.js 14
- **Banco de Dados:** SQLite (Prisma ORM)
- **Gerenciador de Processos:** PM2

---

## 📂 Repositório Central (GitHub)
URL: `https://github.com/tmadrigar/MannaChampionQuantum.git`

---

## 🚀 Passo a Passo: Primeira Instalação (Servidor Linux/VPS)

1. **Acessar o servidor e clonar o projeto:**
   ```bash
   cd ~
   git clone https://github.com/tmadrigar/MannaChampionQuantum.git mannachampionquantum
   cd mannachampionquantum
   ```

2. **Instalar Dependências:**
   ```bash
   npm install
   ```

3. **Gerar o Build de Produção:**
   ```bash
   npm run build
   ```

4. **Iniciar com PM2:**
   ```bash
   pm2 start npm --name "MannaChampionQuantum" -- start
   ```

---

## 🔄 Passo a Passo: Atualização (Deploy Contínuo)

Sempre que houver mudanças no código (como alteração de textos ou novas funcionalidades), siga estes passos no terminal do servidor:

1. **Entrar na pasta e baixar mudanças:**
   ```bash
   cd ~/mannachampionquantum
   git pull origin main
   ```

2. **Instalar novas dependências (Opcional, mas recomendado):**
   ```bash
   npm install
   ```

3. **Gerar o novo Build:**
   ```bash
   npm run build
   ```

4. **Reiniciar o Processo no PM2:**
   ```bash
   pm2 restart MannaChampionQuantum
   ```

---

## 📋 Comandos Úteis do PM2

| Comando | Descrição |
| :--- | :--- |
| `pm2 list` | Lista todos os aplicativos rodando e seus IDs. |
| `pm2 restart [ID/Nome]` | Reinicia um aplicativo específico. |
| `pm2 logs [ID/Nome]` | Exibe os logs em tempo real (útil para debugar erros). |
| `pm2 stop [ID/Nome]` | Para o aplicativo sem removê-lo da lista. |

---

## 💡 Dicas e Soluções de Problemas

- **Erro `fatal: not a git repository`:** Caso a pasta não esteja vinculada ao Git, rode:
  `git init && git remote add origin https://github.com/tmadrigar/MannaChampionQuantum.git`
- **Erro de Conflito no `npm install`:** Use `npm install --legacy-peer-deps` se encontrar erros de dependências entre plugins.
- **Porta em uso:** O Next.js usa a porta `3000` por padrão. Verifique se não há outro app usando-a.