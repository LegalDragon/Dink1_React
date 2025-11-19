// src/components/ThemeSelector.jsx
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-[var(--bg-hover)] rounded-lg border border-gray-200 dark:border-gray-700">
      <div>
        <h3 className="text-lg font-medium text-gray-900 dark:text-[var(--text-main)]">Theme</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Choose your preferred theme
        </p>
      </div>
      
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="block w-32 px-3 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-gray-900 dark:text-[var(--text-main)]"
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};

export default ThemeSelector;