
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  align = 'left',
  className 
}: SectionHeadingProps) => {
  return (
    <div 
      className={cn(
        'mb-10 space-y-2',
        align === 'center' && 'text-center',
        align === 'right' && 'text-right',
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl font-serif dark:text-white">{title}</h2>
      {subtitle && <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
