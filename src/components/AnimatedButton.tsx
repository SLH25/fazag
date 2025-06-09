import React from 'react';
import { cn } from '../lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  className,
  ...props
}) => {
  const baseClasses = 'group transform transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] font-semibold rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-fazag-green-500 dark:focus:ring-fazag-green-400 [&_svg]:transition-transform [&_svg]:duration-300 [&_svg]:ease-in-out [&_svg]:group-hover:translate-x-1 [&_svg]:group-hover:scale-105';
  
  const variantClasses = {
    primary: 'btn-primary shadow-fazag-green-500/25 hover:shadow-lg hover:shadow-fazag-green-500/40',
    outline: 'btn-outline bg-transparent hover:shadow-md',
    ghost: 'bg-transparent text-fazag-green-500 dark:text-fazag-green-400 hover:bg-fazag-green-50 dark:hover:bg-fazag-green-400/10',
  };
  
  const sizeClasses = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      className={cn(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default AnimatedButton;