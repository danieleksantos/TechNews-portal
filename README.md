<div align="center">
  <img src="/public/logo.png" alt="TechNews Logo" width="100"/>

  # TechNews - Portal de Notícias do universo Tech

  <p>
    <strong>Portal de notícias tech focado em performance, SEO e acessibilidade, utilizando Next.js e MDX.</strong>
  </p>

<p>
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/React.js-blue?style=for-the-badge&logo=react" alt="React">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase">

</p>
</div>
</div>

---
## 🚀 Deploy 

O projeto está publicado e pode ser acessado no link abaixo:

- **Produção (Vercel):** [https://tech-news-portal.vercel.app](https://tech-news-portal.vercel.app)
- **Status do Build:** Full Stack (SSR + Dynamic Rendering).


---

## Sobre o Projeto

O TechNews é um portal de notícias desenvolvido para entregar conteúdo técnico com velocidade extrema. Originalmente baseado em arquivos locais, o projeto foi refatorado para uma arquitetura de Headless CMS, utilizando o Supabase para gestão dinâmica de dados.

- **Supabase Integration:** Armazenamento escalável de notícias, permitindo atualizações em tempo real sem necessidade de novos builds.
- **Renderização de Markdown:** Utilização de react-markdown para converter strings do banco de dados em HTML semântico e seguro (XSS Protection).
- **Paginação Dinâmica:** Sistema de navegação por páginas com scroll suave (UX) e persistência de estado.
- **Dark Mode Nativo:** Suporte total a temas claro e escuro, respeitando a preferência do sistema do usuário ou seleção manual.
- **Mobile-First & A11y:** Layout 100% responsivo com Tailwind CSS, garantindo acessibilidade e targets de clique otimizados.
- **SEO Ready:** Meta tags dinâmicas via componente SEO para indexação precisa em motores de busca.

## Tecnologias Utilizadas

- **Core:** Next.js (Page Router), React 18+.
- **Backend:** Supabase (PostgreSQL & API).
- **Estilização:** Tailwind CSS & Tailwind Typography (prose).
- **Processamento de Conteúdo:** react-markdown para renderização segura de conteúdo dinâmico.
- **Gestão de Imagens:** next/image com remotePatterns configurados para domínios externos seguros.

---

## Como rodar o projeto 

### Opção: Localmente (Node.js)

Siga os passos abaixo para clonar e rodar o portal na sua máquina:

#### 1. Clone o repositório
```bash
git clone [https://github.com/seu-usuario/tech-news-portal.git](https://github.com/seu-usuario/tech-news-portal.git)
cd tech-news-portal
```

### 2. Instale as dependências (Usando Yarn ou NPM)
```bash
yarn install
# ou
npm install --legacy-peer-deps
```

### 3. Execute em modo de desenvolvimento
```bash
yarn dev
# ou
npm run dev
```

Abra o navegador em: http://localhost:3000

## Arquitetura e Boas Práticas

Este projeto foi desenvolvido aplicando fundamentos sólidos de engenharia de software, foco constante do meu aprendizado:

- **Clean Code:** Refatoração de componentes legados para padrões modernos do Next.js (Link API) e eliminação de dead code.
- **SOLID:** Separação clara entre a camada de serviço (post-service.js) e a interface de usuário.
- **Segurança** Substituição de métodos de injeção de HTML perigosos por parsers seguros e sanitizados.
- **Otimização de Performance:** Implementação de priority loading em imagens críticas para melhorar o LCP (Largest Contentful Paint).

<br />

<hr />

## Preview

<p align="center">Desktop Experience</p>
<p align="center">
<img src="https://github.com/user-attachments/assets/3df0e796-7c88-4946-afd9-cf323c823bc4" alt="Desktop Preview" width="700" /></p>

<p align="center">Navegação e Responsividade</p>
<p align="center">
<img src="https://github.com/user-attachments/assets/8da5e941-425a-4c90-8f6f-ec15cbfaea06" alt="Mobile Dark" width="250" />
<img src="https://github.com/user-attachments/assets/38f4cc37-8707-4b95-9554-a533d42e0eba" alt="Mobile Preview" width="250" />
</p>

<div align="center">
<p>Desenvolvido por <strong>Daniele . Santos</strong></p>
</div>
