import React from 'react';
import { Link } from 'react-router-dom';
import type { IconType } from 'react-icons';
import { cn } from '../lib/utils';

interface ServiceCardProps {
  icon: IconType;
  title: string;
  description: string;
  linkTo: string;
  className?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  linkTo,
  className,
}) => {
  return (
    <Link to={linkTo} className="block">
      <div className={cn(
        'bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out cursor-pointer border border-gray-100 dark:border-gray-700 hover:translate-y-[-5px] group',
        className
      )}>
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-fazag-green-100 dark:bg-fazag-green-400/20">
            <Icon className="w-8 h-8 text-fazag-green-500 dark:text-fazag-green-400 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 className="text-xl font-semibold text-fazag-dark-blue dark:text-fazag-light-grey mb-3 group-hover:text-fazag-green-500 dark:group-hover:text-fazag-green-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;