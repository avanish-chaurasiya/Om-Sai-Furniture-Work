
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout';
import SectionHeading from '@/components/UI/SectionHeading';
import ProjectCard from '@/components/Projects/ProjectCard';
import projectsData from '@/data/projects';
import { Button } from '@/components/ui/button';

const Index = () => {
  // Get featured projects for homepage
  const featuredProjects = projectsData.filter(project => project.featured);

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 z-0">
          <img 
            src="pic\header.png"
            alt="Interior design showcase" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 md:px-12 h-full flex flex-col justify-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-serif">
            The hands that build the home
            </h1>
            <p className="text-white/90 text-lg md:text-xl mt-6 max-w-2xl">
            Since <b>1997</b>, we have been the master craftsmen and contractors who turn architectural and design concepts into reality. From structural work to bespoke furniture, we build the spaces you dream of.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/projects">View Our Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full bg-transparent text-white border-white hover:bg-white hover:text-foreground">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="pic\about.png" 
                alt="Interior designer at work"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
            <div>
              <SectionHeading 
                title="Our Approach to Building"
                subtitle="We believe quality building is the foundation of every great space. It’s how a vision becomes a real and lasting home."
              />
              <p className="text-muted-foreground mb-6">
              Our team works together in an organized way on every project. We turn design plans into perfectly built structures by using reliable building techniques with a strong focus on quality.  </p>
              <p className="text-muted-foreground mb-8">
              As your trusted partner, we handle every stage of the project with care, ensuring the structure is strong, the work is high-quality, and every detail is perfect, from start to finish.</p>
              <Button asChild variant="outline" className="rounded-full group">
                <Link to="/about" className="flex items-center">
                  Learn more about us
                  <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="bg-sand-50 dark:bg-neutral-900 section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Featured Projects"
            subtitle="Discover our carefully crafted spaces, each tailored to our clients' unique vision and lifestyle."
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                className="bg-white dark:bg-neutral-800 border border-sand-200 dark:border-neutral-700"
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="rounded-full group">
              <Link to="/projects" className="flex items-center">
                View all projects
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Our Services"
            subtitle="From Blueprint to Reality"
            align="center"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <ServiceCard 
              title="Civil & Structural Works"
              description="We lay the essential foundation for your project, ensuring structural integrity, safety, and longevity. Our expertise covers precision demolition, wall construction, and flooring installation. We manage every detail to perfectly prepare the canvas for a beautiful design, ensuring full alignment with architectural plans."
              imageUrl="/pic/service-Civil-Structural-work.png"
            />
            <ServiceCard 
              title="Interior Finishing & Painting"
              description="This is where design comes to life. We execute all interior finishing with meticulous detail, from flawless painting and tiling to expert electrical and plumbing installation. As the central contractor, we manage all trades to ensure a seamless workflow and a high-quality result true to your vision."
              imageUrl="/pic/service-Interior-Finishing.png"
            />
            <ServiceCard 
              title=" Custom Furniture & Millwork"
              description="Our skilled craftsmen create custom-made pieces that make any space special. From our own workshop, we build custom furniture, cabinets, and other wooden fixtures using high-quality materials. We turn your ideas into beautiful yet practical items, ensuring every piece is built exactly to your needs and fits perfectly into your home."
              imageUrl="/pic/Custom-Furniture.jpeg"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-sand-100 section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-10 space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-serif" style={{ color: 'rgba(23, 23, 23, 1)' }}>Client Testimonials</h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(23, 23, 23, 1)' }}>What our clients say about working with our design team.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            <TestimonialCard 
              quote="A pleasure to work with. They handled everything from structural changes to custom furniture with incredible professionalism, bringing our vision to life seamlessly."
              author="Sarah Johnson"
              role="Homeowner"
            />
            <TestimonialCard 
              quote="The best partner a designer could ask for. Their execution of my plans was flawless, and their collaborative spirit made the entire process smooth."
              author="Michael Chen"
              role="CEO, TechStart"
            />
            <TestimonialCard 
              quote="They built our new office with incredible efficiency. The quality of their work is outstanding, delivering a high-end space on time and budget."
              author="Emily Rodriguez"
              role="Residential Client"
            />
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-clay-800 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Ready to Transform Your Space?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Let's talk about your project. We specialize in turning plans into reality, managing the entire build from foundational work to custom installations, ensuring a high-quality result, on time and on budget.
          </p>
          <Button asChild size="lg" className="rounded-full bg-white text-clay-800 hover:bg-sand-200">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

// Service Card Component
const ServiceCard = ({ 
  title, 
  description, 
  imageUrl 
}: { 
  title: string; 
  description: string;
  imageUrl: string;
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm border border-sand-200 dark:border-neutral-700 hover-lift">
      <div className="aspect-video overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-2 text-foreground dark:text-white">{title}</h3>
        <p className="text-muted-foreground mb-4 dark:text-neutral-300">{description}</p>
        <Link 
          to="/projects" 
          className="text-sm font-medium inline-flex items-center link-underline text-primary dark:text-blue-300"
        >
          Learn more
          <ArrowRight size={14} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ 
  quote, 
  author, 
  role 
}: { 
  quote: string; 
  author: string; 
  role: string;
}) => {
  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg border border-sand-200 dark:border-neutral-700 shadow-sm">
      <p className="text-muted-foreground italic mb-6 dark:text-neutral-300">"{quote}"</p>
      <div>
        <p className="font-medium text-foreground dark:text-white">{author}</p>
        <p className="text-sm text-muted-foreground dark:text-neutral-400">{role}</p>
      </div>
    </div>
  );
};

export default Index;
