import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ name }) {
  return (
    <header className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="px-10 flex items-center justify-between">
        
        <Link 
          href="/" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
        >
          <Image 
            src="/logo.png" 
            alt={`Logo de ${name}`} 
            width={60} 
            height={60} 
            className="rounded-lg shadow-sm group-hover:scale-105 transition-transform" 
          />
          <span className="text-xl font-bold dark:text-white group-hover:text-blue-500 transition-colors">
            {name}
          </span>
        </Link>

        <nav aria-label="Menu principal" className="flex items-center gap-6">
          <ThemeSwitcher />
        </nav>
      </div>
    </header>
  );
}