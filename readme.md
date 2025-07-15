# NLW Agents - Frontend

Este projeto foi desenvolvido durante a 20ª edição do NLW (Next Level Week) da [Rocketseat](https://rocketseat.com.br/), com o objetivo de aprofundar conhecimentos em **React** e tecnologias modernas de frontend.

## 🚀 Tecnologias e Bibliotecas Utilizadas

- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **Radix UI** (acessibilidade e componentes)
- **Lucide React** (ícones)
- **React Query** (gerenciamento de dados assíncronos)
- **Zod** (validações de schema)
- **Fastify Type Provider Zod** (integração tipada com backend)

## 💡 O que o projeto faz?

O sistema permite a criação de salas (rooms), envio de áudios, transcrição automática com IA, geração de embeddings, envio de perguntas e respostas baseadas nos trechos de áudio mais relevantes.

Usuários podem:

- Criar uma nova sala
- Enviar um áudio que será transcrito e analisado
- Fazer perguntas com base no conteúdo do áudio
- Visualizar as respostas geradas por IA

## 📂 Estrutura

- `src/pages`: estrutura das rotas do sistema
- `src/components`: componentes reutilizáveis da interface
- `src/http`: requisições e hooks integrados à API backend
- `src/lib`: configurações globais, schemas, etc.

---

## 📦 Backend do projeto

O backend completo está disponível no repositório:  
🔗 [nlwAgentsBackEnd](https://github.com/eliaberr/nlwAgentsBackEnd.git)
