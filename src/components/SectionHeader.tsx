import React from 'react';
import ScrollReveal from './ScrollReveal';
import { cn } from '../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  centered = true,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      centered ? 'text-center' : 'text-left',
      className
    )}>
      <ScrollReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-fazag-dark-blue dark:text-fazag-light-grey mb-4">
          {title}
        </h2>
      </ScrollReveal>
      {subtitle && (
        <ScrollReveal delay={100}>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
};

export default SectionHeader;