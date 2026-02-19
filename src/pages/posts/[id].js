import { getGlobalData } from '../../../utils/global-data';
import { getPostById } from '../../mdx-utils.js';
import Image from 'next/image'; // Importante para a performance
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

      <main className="max-w-4xl mx-auto px-6 w-full mb-20">
        {/* Botão de Voltar Minimalista */}
        <div className="py-8">
          <Link href="/">
            <a className="flex items-center text-sm font-bold uppercase tracking-widest text-gray-500 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 transition-colors group">
              <ArrowIcon className="mr-2 rotate-180 group-hover:-translate-x-1 transition-transform w-4 h-4" />
              Voltar
            </a>
          </Link>
        </div>

        <article>
          <header className="mb-12">
            {/* Tag de Data */}
            {post.created_at && (
              <time className="text-xs uppercase tracking-[0.3em] font-black text-blue-500 mb-4 block">
                {new Date(post.created_at).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </time>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold dark:text-white mb-8 leading-tight tracking-tighter">
              {post.title}
            </h1>

            {/* Imagem de Capa Hero */}
            <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl mb-12">
              <Image
                src={post.image_url || '/logo.png'}
                alt={post.title}
                layout="fill"
                objectFit={post.image_url ? "cover" : "contain"}
                className={!post.image_url ? "opacity-20 dark:invert p-20" : ""}
                priority // Carrega esta imagem primeiro por ser o topo da página (LCP)
              />
            </div>

            {/* Subtítulo como um resumo destacado */}
            {post.description && (
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-10 pb-10 border-b border-gray-100 dark:border-gray-800">
                {post.description}
              </p>
            )}
          </header>

          {/* Conteúdo Principal */}
          <section className="prose prose-blue lg:prose-xl dark:prose-invert max-w-none">
            <div 
              className="drop-cap" // Opcional: Estilo clássico para a primeira letra
              dangerouslySetInnerHTML={{ __html: post.body }} 
            />
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