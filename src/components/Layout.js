import classNames from 'classnames';
import { useEffect } from 'react';
import styles from './Layout.module.css';

export function GradientBackground({ variant, className }) {
  const classes = classNames(
    {
      [styles.colorBackground]: variant === 'large',
      [styles.colorBackgroundBottom]: variant === 'small',
    },
    className,
    'absolute pointer-events-none' // Garante que o fundo não bloqueie cliques nos botões
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {
  
  useEffect(() => {
    // 1. Inicializa o tema baseado no LocalStorage ou Preferência do Sistema
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 2. Escuta mudanças no tema do sistema operacional em tempo real
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) { // Só muda se o usuário não tiver escolhido manualmente
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    darkQuery.addEventListener('change', handleChange);
    return () => darkQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    // Removido o overflow-hidden para permitir que o scroll funcione naturalmente com o Grid
    <div className="relative min-h-screen">
      {/* Ajustado de max-w-2xl para max-w-5xl para comportar o novo Grid e Header */}
      <div className="flex flex-col max-w-5xl w-full mx-auto min-h-screen">
        {children}
      </div>
    </div>
  );
}