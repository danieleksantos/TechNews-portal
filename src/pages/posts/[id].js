import { getGlobalData } from '../../../utils/global-data';
import { getPostById } from '../../mdx-utils.js';

import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Layout, { GradientBackground } from '../../components/Layout';
import SEO from '../../components/SEO';
import Link from 'next/link';
import ArrowIcon from '../../components/ArrowIcon';

export default function PostPage({ post, globalData }) {
  if (!post) {
    return (
      <Layout>
        <Header name={globalData.name} />
        <div className="text-center py-20">
          <h1 className="text-2xl font-bold">Post não encontrado.</h1>
          <Link href="/"><a className="text-blue-500 underline mt-4 block">Voltar para a Home</a></Link>
        </div>
        <Footer copyrightText={globalData.footerText} />
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        title={`${post.title} - ${globalData.name}`}
        description={post.description}
      />
      <Header name={globalData.name} />

      <main className="max-w-5xl mx-auto px-6 w-full mb-20">
        {/* Botão de Voltar */}
        <div className="mb-10">
          <Link href="/">
            <a className="flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 group">
              <ArrowIcon className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Voltar para a lista
            </a>
          </Link>
        </div>

        {/* Cabeçalho do Post */}
        <article>
          <header className="mb-12 border-b border-gray-100 dark:border-gray-800 pb-12">
            {post.created_at && (
              <time className="text-sm uppercase tracking-widest font-bold opacity-50 mb-4 block">
                {new Date(post.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
            )}
            <h1 className="text-4xl md:text-6xl font-bold dark:text-white mb-6 leading-tight">
              {post.title}
            </h1>
            {post.description && (
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed italic border-l-4 border-blue-500 pl-6">
                {post.description}
              </p>
            )}
          </header>

          {/* Conteúdo do Post com Tailwind Typography */}
          <section className="prose prose-lg md:prose-xl dark:prose-dark max-w-none">
            {/* Se o seu post.body vier como String HTML do Supabase: */}
            <div dangerouslySetInnerHTML={{ __html: post.body }} />
          </section>
        </article>
      </main>

      <Footer copyrightText={globalData.footerText} />

      <GradientBackground
        variant="large"
        className="fixed top-0 left-0 w-full h-full opacity-10 dark:opacity-20 -z-10"
      />
    </Layout>
  );
}

export const getServerSideProps = async ({ params }) => {
  const globalData = getGlobalData();
  const post = await getPostById(params.id);

  return {
    props: {
      globalData,
      post: post || null,
    },
  };
};