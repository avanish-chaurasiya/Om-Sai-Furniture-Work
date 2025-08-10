
import React from 'react';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

export interface ProjectType {
  id: string;
  title: string;
  category: string;
  featured: boolean;
  imageUrl: string;
  gallery: string[];
  description: string;
  details: {
    client: string;
    location: string;
    year: number;
    size: string;
    services: string[];
  };
}

interface ProjectGridProps {
  projects: ProjectType[];
  className?: string;
}

const ProjectGrid = ({ projects, className }: ProjectGridProps) => {
  return (
    <div className={cn(
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8',
      className
    )}>
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          id={project.id}
          title={project.title}
          category={project.category}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
