// src/components/ThemeToggle.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-[var(--bg-hover)] rounded-lg border border-gray-200 dark:border-gray-700">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-[var(--text-main)]">Theme</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Switch between dark and light mode
        </p>
      </div>
      
      <button
        onClick={toggleTheme}
        className={`
          relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
          transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 
          focus:ring-offset-2 ${isDark ? 'bg-blue-600' : 'bg-gray-200'}
        `}
        role="switch"
        aria-checked={isDark}
      >
        <span
          className={`
            pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow 
            ring-0 transition duration-200 ease-in-out
            ${isDark ? 'translate-x-5' : 'translate-x-0'}
          `}
        />
      </button>
    </div>
  );
};

export default ThemeToggle;