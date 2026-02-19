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
    'absolute pointer-events-none animate-gradient'
  );

  return <div className={classes} />;
}

export default function Layout({ children }) {

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => {
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    darkQuery.addEventListener('change', handleChange);
    return () => darkQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50 dark:bg-[#0a0a0a] transition-colors duration-500 overflow-x-hidden">

      <GradientBackground
        variant="large"
        className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-40 dark:opacity-20 z-0"
      />

      <div className="relative z-10 flex flex-col min-h-screen w-full">
        {children}
      </div>
    </div>
  );
}