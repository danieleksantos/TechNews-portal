import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ name }) {
  return (
    <header className="py-6 border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
        
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="rounded-lg" />
            <span className="text-xl font-bold dark:text-white">{name}</span>
          </a>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden md:block">
             <ul className="flex gap-4 dark:text-gray-300">
               <li><Link href="/"><a>Home</a></Link></li>
             </ul>
          </nav>
          {/* O Toggle agora no canto direito */}
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}