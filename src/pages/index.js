import Link from 'next/link';
import { getPosts } from '../mdx-utils';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout, { GradientBackground } from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts, globalData }) {
  return (
    <Layout>
      <SEO title={globalData.name} description={globalData.blogTitle} />
      <Header name={globalData.name} />
      
      <main className="max-w-5xl mx-auto px-6 w-full">
        {/* Título Principal com espaçamento moderno */}
        <section className="py-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-center mb-4 dark:text-white">
            {globalData.blogTitle}
          </h1>
          <p className="text-center text-xl opacity-70 dark:text-gray-300 max-w-2xl mx-auto">
            Confira as últimas atualizações do meu blog de desenvolvimento.
          </p>
        </section>

        {/* Grid de Posts - 2 colunas em telas médias/grandes */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mb-20">
          {posts.map((post) => (
            <li
              key={post.id}
              className="group flex flex-col bg-white dark:bg-gray-800 dark:bg-opacity-30 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <Link href={`/posts/${post.id}`}>
                <a className="p-8 h-full flex flex-col justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-2xl">
                  <div>
                    {post.created_at && (
                      <time className="text-xs uppercase font-bold tracking-widest opacity-50 dark:text-gray-400 block mb-4">
                        {new Date(post.created_at).toLocaleDateString('pt-BR')}
                      </time>
                    )}
                    <h2 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-blue-500 transition-colors">
                      {post.title}
                    </h2>
                    {post.description && (
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed line-clamp-3">
                        {post.description}
                      </p>
                    )}
                  </div>
                  
                  <div className="mt-8 flex items-center text-blue-500 font-semibold text-sm">
                    Ler artigo
                    <ArrowIcon className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <Footer copyrightText={globalData.footerText} />
      
      {/* Backgrounds ajustados para não atrapalhar a leitura */}
      <GradientBackground
        variant="large"
        className="fixed top-0 left-0 w-full h-full opacity-20 dark:opacity-40 -z-10"
      />
    </Layout>
  );
}

export async function getServerSideProps() {
  const posts = await getPosts();
  const globalData = getGlobalData();

  return {
    props: {
      posts: posts || [],
      globalData,
    },
  };
}