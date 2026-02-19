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
    <div className="flex bg-gray-200/50 dark:bg-gray-700/50 backdrop-blur-md rounded-full p-1 border border-gray-300/50 dark:border-gray-600/50 transition-all duration-300">
      <button
        type="button"
        aria-label="Ativar modo claro"
        onClick={() => toggleTheme('light')}
        className={`relative p-2 rounded-full transition-all duration-300 ${
          theme === 'light' 
            ? 'bg-white shadow-md scale-110' 
            : 'hover:bg-gray-300/50 opacity-50'
        }`}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <Image 
            src="/sun.png" 
            alt="Sol" 
            width={20} 
            height={20} 
            className="dark:invert transition-all"
          />
        </div>
      </button>

      <button
        type="button"
        aria-label="Ativar modo escuro"
        onClick={() => toggleTheme('dark')}
        className={`relative p-2 rounded-full transition-all duration-300 ${
          theme === 'dark' 
            ? 'bg-gray-800 shadow-md scale-110' 
            : 'hover:bg-gray-600/30 opacity-50'
        }`}
      >
        <div className="w-5 h-5 flex items-center justify-center">
          <Image 
            src="/moon.png" 
            alt="Lua" 
            width={18} 
            height={18} 
            className="dark:invert transition-all" // Faz o ícone preto ficar branco no modo dark
          />
        </div>
      </button>
    </div>
  );
}