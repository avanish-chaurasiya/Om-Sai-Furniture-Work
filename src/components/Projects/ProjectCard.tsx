
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  className?: string;
}

const ProjectCard = ({ id, title, category, imageUrl, className }: ProjectCardProps) => {
  return (
    <Link 
      to={`/projects/${id}`}
      className={cn(
        'group block overflow-hidden rounded-md hover-lift',
        className
      )}
    >
      <div className="aspect-[4/5] relative overflow-hidden rounded-md bg-muted">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute bottom-0 left-0 w-full p-6 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <p className="text-sm font-medium uppercase tracking-wider text-white/80">{category}</p>
          <h3 className="text-xl font-serif mt-1">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
