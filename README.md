<div align="center">
  <img src="/public/logo.png" alt="TechNews Logo" width="100"/>

  # TechNews - Portal de Notícias Moderno

  <p>
    <strong>Portal de notícias tech focado em performance, SEO e acessibilidade, utilizando Next.js e MDX.</strong>
  </p>

<p>
    <img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js" alt="Next.js">
    <img src="https://img.shields.io/badge/React.js-blue?style=for-the-badge&logo=react" alt="React">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind">
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel">
</p>
</div>

---
## 🚀 Deploy 

O projeto está publicado e pode ser acessado no link abaixo:

- **Produção (Vercel):** [https://tech-news-portal.vercel.app](https://tech-news-portal.vercel.app)
- **Status do Build:** Full Stack (Static Generation + SSR).


---

## Sobre o Projeto

O TechNews é um blog corporativo/pessoal desenvolvido para entregar conteúdo técnico com velocidade extrema. Ele utiliza o poder do **SSG (Static Site Generation)** do Next.js para garantir tempos de carregamento quase instantâneos.

- **MDX Integration:** Notícias escritas em Markdown com componentes React integrados, permitindo posts ricos e dinâmicos.
- **Paginação Dinâmica:** Sistema de navegação por páginas com scroll suave (UX) e persistência de estado.
- **Dark Mode Nativo:** Suporte total a temas claro e escuro, respeitando a preferência do sistema do usuário ou seleção manual.
- **Mobile-First & A11y:** Layout 100% responsivo construído com Tailwind CSS, garantindo acessibilidade (targets de clique otimizados e contraste).
- **SEO Ready:** Meta tags dinâmicas para compartilhamento em redes sociais e indexação em motores de busca.

## Tecnologias Utilizadas

- **Core:** Next.js (Page Router), React 18+.
- **Estilização:** Tailwind CSS (Arquitetura utilitária).
- **Processamento de Conteúdo:** `next-mdx-remote` para renderização de arquivos Markdown.
- **Gestão de Imagens:** `next/image` com otimização automática e configuração de domínios seguros (Unsplash).

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
npm install
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

- Clean Code: Componentização clara e separação de lógica de dados (getServerSideProps) da UI.
- SOLID: Princípios de responsabilidade única na organização de componentes (Headers, Footers, Layouts).
- Estruturas de Dados: Ordenação cronológica inversa de posts e lógica de paginação otimizada para performance.
- Otimização de Imagens: Configuração de remotePatterns para garantir segurança no carregamento de mídias externas.

<br />

<hr />

## Preview

<p align="center">Desktop Experience</p>
<p align="center">
<img src="https://github.com/user-attachments/assets/3df0e796-7c88-4946-afd9-cf323c823bc4" alt="Desktop Preview" width="700" /></p>

<p align="center">Navegação e Responsividade</p>
<p align="center">
<img src="https://github.com/user-attachments/assets/8da5e941-425a-4c90-8f6f-ec15cbfaea06" alt="Mobile Dark" width="250" />
<img src="https://github.com/user-attachments/assets/921e76b2-8a0a-48e0-89ab-1bedc03aa63f" alt="Mobile Preview" width="250" />
</p>

<div align="center">
<p>Desenvolvido por <strong>Daniele . Santos</strong></p>
</div>
