import React from 'react';
import { BsMoonFill, BsSunFill } from 'react-icons/bs';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-fazag-dark-blue dark:text-fazag-light-grey hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <BsMoonFill className="w-5 h-5" />
      ) : (
        <BsSunFill className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;