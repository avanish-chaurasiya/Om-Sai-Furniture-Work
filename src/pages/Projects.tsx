
import React, { useState, useEffect } from 'react';
import PageLayout from '@/components/Layout/PageLayout.tsx';
import PageHeader from '@/components/UI/PageHeader.tsx';
import ProjectGrid from '@/components/Projects/ProjectGrid.tsx';
import ProjectFilter from '@/components/Projects/ProjectFilter.tsx';
import projectsData from '@/data/projects';

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Extract unique categories from projects
  const categories = Array.from(
    new Set(projectsData.map((project) => project.category))
  );

  // Filter projects when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  return (
    <PageLayout>
      <PageHeader
        title="Our Projects"
        subtitle="Explore our portfolio of thoughtfully designed spaces, each reflecting our commitment to quality, functionality, and beauty."
      />

      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <ProjectFilter
            categories={categories}
            onFilterChange={setSelectedCategory}
          />

          <ProjectGrid projects={filteredProjects} />

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium">No projects found</h3>
              <p className="text-muted-foreground mt-2">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>
    </PageLayout>
  );
};

export default Projects;
