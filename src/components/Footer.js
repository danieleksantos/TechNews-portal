export default function Footer({ copyrightText }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} {copyrightText}. Todos os direitos reservados.
        </p>
        
        <nav aria-label="Links sociais" className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a 
            href="https://github.com/danieleksantos" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            GitHub
          </a>
          <a 
            href="https://www.linkedin.com/in/danieleksantos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-blue-500 transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  );
}