import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  variant?: 'icon' | 'segment' | 'compact-label';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = '', 
  variant = 'icon' 
}) => {
  const { theme, isDark, toggleTheme, setTheme } = useTheme();

  if (variant === 'segment') {
    return (
      <div 
        className={`inline-flex p-1 rounded-xl bg-slate-200/80 dark:bg-slate-800 border border-slate-300 dark:border-slate-700/80 transition-colors ${className}`}
        role="group"
        aria-label="Pilih tema tampilan"
      >
        <button
          type="button"
          onClick={() => setTheme('light')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            !isDark
              ? 'bg-white text-emerald-700 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-pressed={!isDark}
        >
          <Sun className="w-4 h-4 text-amber-500" />
          <span>Terang</span>
        </button>
        <button
          type="button"
          onClick={() => setTheme('dark')}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
            isDark
              ? 'bg-slate-900 text-emerald-400 shadow-sm border border-slate-700/60'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
          aria-pressed={isDark}
        >
          <Moon className="w-4 h-4 text-emerald-400" />
          <span>Gelap</span>
        </button>
      </div>
    );
  }

  if (variant === 'compact-label') {
    return (
      <button
        type="button"
        onClick={toggleTheme}
        className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-xs font-medium transition-colors bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 dark:text-slate-200 dark:border-slate-700 ${className}`}
        aria-label={`Ganti ke mode ${isDark ? 'terang' : 'gelap'}`}
      >
        <span className="flex items-center gap-2">
          {isDark ? (
            <Moon className="w-4 h-4 text-emerald-400" />
          ) : (
            <Sun className="w-4 h-4 text-amber-500" />
          )}
          <span>Tema: {isDark ? 'Mode Gelap' : 'Mode Terang'}</span>
        </span>
        <span className="text-[10px] uppercase font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-800">
          Ubah
        </span>
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`relative p-2.5 rounded-xl border transition-all duration-300 group focus:outline-none focus:ring-2 focus:ring-emerald-500/50 ${
        isDark
          ? 'bg-slate-800/90 hover:bg-slate-700 text-amber-400 border-slate-700 shadow-md shadow-slate-950/40'
          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200 shadow-sm hover:border-slate-300'
      } ${className}`}
      aria-label={`Beralih ke mode ${isDark ? 'terang' : 'gelap'}`}
      title={`Beralih ke mode ${isDark ? 'terang' : 'gelap'}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 group-hover:rotate-45" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600 transition-transform duration-300 -rotate-12 group-hover:rotate-0" />
        )}
      </div>
      <span className="sr-only">Toggle Dark/Light Mode</span>
    </button>
  );
};
