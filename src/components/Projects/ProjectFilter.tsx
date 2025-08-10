
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface ProjectFilterProps {
  categories: string[];
  onFilterChange: (category: string) => void;
  className?: string;
}

const ProjectFilter = ({ categories, onFilterChange, className }: ProjectFilterProps) => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleClick = (category: string) => {
    setActiveCategory(category);
    onFilterChange(category);
  };

  return (
    <div className={cn('flex overflow-x-auto pb-4 mb-8 space-x-2', className)}>
      <button
        onClick={() => handleClick('all')}
        className={cn(
          'px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap',
          activeCategory === 'all'
            ? 'bg-primary text-primary-foreground'
            : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'
        )}
      >
        All Projects
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => handleClick(category)}
          className={cn(
            'px-4 py-2 rounded-full text-sm transition-colors whitespace-nowrap',
            activeCategory === category
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary hover:bg-secondary/80 text-muted-foreground'
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
