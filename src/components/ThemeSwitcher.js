import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = (newTheme) => {
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  if (!theme) return null;

  return (
    <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1 border border-gray-200 dark:border-gray-700">
      <button
        type="button"
        aria-label="Ativar modo claro"
        onClick={() => toggleTheme('light')}
        className={`p-2 rounded-full transition-all ${theme === 'light' ? 'bg-white shadow-sm' : 'opacity-40 hover:opacity-100'}`}
      >
        <Image src="/sun.png" alt="Sol" width={20} height={20} />
      </button>

      <button
        type="button"
        aria-label="Ativar modo escuro"
        onClick={() => toggleTheme('dark')}
        className={`p-2 rounded-full transition-all ${theme === 'dark' ? 'bg-gray-700 shadow-sm' : 'opacity-40 hover:opacity-100'}`}
      >
        <Image src="/moon.png" alt="Lua" width={20} height={20} />
      </button>
    </div>
  );
}