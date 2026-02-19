export default function Footer({ copyrightText }) {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 mt-20 border-t border-gray-200 dark:border-gray-800">
      <div className="px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {year} {copyrightText}. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6 text-sm text-gray-500 dark:text-gray-400">
          <a href="https://github.com/danieleksantos" target="blank" className="hover:text-blue-500 transition">GitHub</a>
          <a href="https://www.linkedin.com/in/danieleksantos/" target="blank" className="hover:text-blue-500 transition">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}