
import React from 'react';
import { cn } from '@/lib/utils';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  children?: React.ReactNode;
}

const PageHeader = ({ title, subtitle, className, children }: PageHeaderProps) => {
  return (
    <div className={cn('bg-slate-50 dark:bg-slate-900 py-20 md:py-32', className)}>
      <div className="container mx-auto px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif max-w-4xl">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground text-lg md:text-xl mt-4 max-w-2xl">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
