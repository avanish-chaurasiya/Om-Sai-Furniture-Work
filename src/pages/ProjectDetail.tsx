import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout.tsx';
import projectsData from '@/data/projects';
import { Button } from '@/components/UI/button.tsx';
import { ProjectType } from '@/components/Projects/ProjectGrid.tsx';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectType | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Find the project with the matching id
    const foundProject = projectsData.find((p) => p.id === id);
    
    if (foundProject) {
      setProject(foundProject);
      // Reset image index when project changes
      setCurrentImageIndex(0);
    }
    
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <PageLayout>
        <div className="container mx-auto px-6 pt-20 pb-16 text-center">
          <h1 className="text-2xl md:text-3xl font-medium mb-4">Project not found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild variant="outline">
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </PageLayout>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === project.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? project.gallery.length - 1 : prevIndex - 1
    );
  };

  return (
    <PageLayout>
      <div className="container mx-auto px-6 md:px-12 pt-20 pb-16">
        {/* Back button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="pl-0">
            <Link to="/projects" className="flex items-center text-muted-foreground hover:text-foreground">
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4">{project.title}</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">{project.intro}</p>
        </div>

        {/* Image gallery */}
        <div className="mb-16">
          <div className="relative overflow-hidden bg-muted rounded-lg">
            <img
              src={project.gallery[currentImageIndex]}
              alt={`${project.title} - image ${currentImageIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
            
            {/* Navigation arrows */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-2 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Thumbnail navigation */}
          <div className="grid grid-cols-4 gap-2 mt-4">
            {project.gallery.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`relative overflow-hidden rounded-md aspect-video ${
                  index === currentImageIndex
                    ? 'ring-2 ring-primary'
                    : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Project details */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-serif mb-4">About This Project</h2>
            <p className="text-muted-foreground">{project.description}</p>
          </div>

          <div className="bg-sand-50 p-6 rounded-lg">
            <h3 className="text-xl font-medium mb-4" style={{ color: 'rgba(23, 23, 23, 1)' }}>Project Details</h3>
            <dl className="space-y-3" style={{ color: 'rgba(23, 23, 23, 1)' }}>
              <div>
                <dt className="text-sm" style={{ color: 'rgba(23, 23, 23, 1)' }}></dt>
                <dd className="font-medium" style={{ color: 'rgba(23, 23, 23, 1)' }}>{project.details.client}</dd>
              </div>
              <div>
                <dt className="text-sm" style={{ color: 'rgba(23, 23, 23, 1)' }}>Location</dt>
                <dd className="font-medium" style={{ color: 'rgba(23, 23, 23, 1)' }}>{project.details.location}</dd>
              </div>
              <div>
                <dt className="text-sm" style={{ color: 'rgba(23, 23, 23, 1)' }}>Year</dt>
                <dd className="font-medium" style={{ color: 'rgba(23, 23, 23, 1)' }}>{project.details.year}</dd>
              </div>
              <div>
                <dt className="text-sm" style={{ color: 'rgba(23, 23, 23, 1)' }}>Size</dt>
                <dd className="font-medium" style={{ color: 'rgba(23, 23, 23, 1)' }}>{project.details.size}</dd>
              </div>
              <div>
                <dt className="text-sm" style={{ color: 'rgba(23, 23, 23, 1)' }}>Services</dt>
                <dd>
                  <ul className="mt-1 list-disc list-inside">
                    {project.details.services.map((service, index) => (
                      <li key={index} className="text-sm" style={{ color: 'rgba(23, 23, 23, 1)' }}>{service}</li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProjectDetail;
