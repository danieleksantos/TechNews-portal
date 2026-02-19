import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getPosts } from '../post-service';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Layout from '../components/Layout';
import ArrowIcon from '../components/ArrowIcon';
import { getGlobalData } from '../../utils/global-data';
import SEO from '../components/SEO';

export default function Index({ posts = [], globalData = {} }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const sortedPosts = [...posts].sort((a, b) =>
    new Date(b.created_at) - new Date(a.created_at)
  );

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(sortedPosts.length / postsPerPage);

  const name = globalData?.name || 'TechNews';
  const blogTitle = globalData?.blogTitle || 'Aqui você não perde as notícias mais quentes do mundo tech.';
  const footerText = globalData?.footerText || '';

  return (
    <Layout>
      <SEO title={name} description={blogTitle} />
      <Header name={name} />

      <main className="max-w-6xl mx-auto px-6 w-full">
        <section className="py-16">
          <h1 className="text-4xl lg:text-6xl font-black text-center mb-4 text-slate-900 dark:text-white tracking-tighter">
            {blogTitle}
          </h1>
          <p className="text-center text-xl text-slate-600 dark:text-gray-300 max-w-2xl mx-auto font-medium">
            Aqui você encontra as notícias mais quentes do universo tech.
          </p>
        </section>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-12">
          {currentPosts.map((post, index) => (
            <li
              key={post.id}
              className="group flex flex-col bg-white dark:bg-gray-800 dark:bg-opacity-30 rounded-3xl border border-slate-200 dark:border-gray-700 shadow-sm transition-all duration-300 overflow-hidden relative"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />

              <Link
                href={`/posts/${post.id}`}
                className="flex flex-col h-full focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-3xl"
              >
                <div className="relative w-full h-56 bg-slate-100 dark:bg-gray-900/50 flex items-center justify-center overflow-hidden">
                  {post.image_url ? (
                    <Image
                      src={post.image_url}
                      alt={`Capa do post: ${post.title}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      priority={currentPage === 1 && index < 3}
                    />
                  ) : (
                    <div className="relative w-20 h-20 opacity-30">
                      <Image
                        src="/logo.png"
                        alt="Placeholder"
                        fill
                        className="object-contain dark:invert"
                      />
                    </div>
                  )}
                </div>

                <div className="p-7 flex flex-col justify-between flex-grow">
                  <div>
                    {post.created_at && (
                      <time className="text-[11px] uppercase font-black tracking-[0.25em] text-blue-600 dark:text-blue-400 block mb-4">
                        {new Date(post.created_at).toLocaleDateString('pt-BR')}
                      </time>
                    )}
                    <h2 className="text-xl font-extrabold leading-tight text-slate-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-3">
                      {post.title}
                    </h2>
                  </div>

                  <div className="mt-8 flex items-center text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 font-bold text-xs uppercase tracking-widest transition-colors duration-300">
                    Ler artigo
                    <ArrowIcon className="ml-2 w-4 h-4" />
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-6 mb-2" aria-label="Navegação de páginas">
            <button
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-blue-500 transition-all active:scale-95 shadow-sm"
            >
              Anterior
            </button>

            <span className="text-sm font-black text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              {currentPage} <span className="mx-1 opacity-50">/</span> {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-full font-bold text-sm uppercase tracking-widest bg-white dark:bg-gray-800 border border-slate-200 dark:border-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:border-blue-500 transition-all active:scale-95 shadow-sm"
            >
              Próxima
            </button>
          </nav>
        )}
      </main>

      <Footer copyrightText={footerText} />
    </Layout>
  );
}

export async function getServerSideProps() {
  try {
    const posts = await getPosts();
    const globalData = getGlobalData();

    return {
      props: {
        posts: posts || [],
        globalData: globalData || null,
      },
    };
  } catch (error) {
    console.error("Erro ao buscar dados no servidor:", error);
    return {
      props: {
        posts: [],
        globalData: {},
      },
    };
  }
}