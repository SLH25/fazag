import React, { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  className,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
            }, delay);
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            setIsVisible(false);
          }
        });
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [delay, threshold, triggerOnce]);

  return (
    <div
      ref={elementRef}
      className={cn(
        'transition-all duration-600 ease-out',
        isVisible ? 'animate-slide-up-fade' : 'opacity-0 translate-y-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;