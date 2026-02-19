import Link from 'next/link';
import Image from 'next/image';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header({ name }) {
  return (
    <header className="py-6 border-b border-gray-200 dark:border-gray-800">
      <div className="mx-10 flex items-center justify-between">
        
        <Link href="/">
          <a className="flex items-center gap-3 group">
            <Image src="/logo.png" alt="Logo" width={60} height={60} className="rounded-lg" />
            <span className="text-xl font-bold dark:text-white">{name}</span>
          </a>
        </Link>

        <div className="flex items-center gap-6">
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}