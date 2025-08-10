
import React from 'react';
import PageLayout from '@/components/Layout/PageLayout.tsx';
import PageHeader from '@/components/UI/PageHeader.tsx';
import SectionHeading from '@/components/UI/SectionHeading.tsx';

const About = () => {
  return (
    <PageLayout>
      <PageHeader
        title="Om Sai Furniture Works"
        subtitle="All Civil & Interior Contractor"
      />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="About Us"
                subtitle="Founded with a vision to create thoughtful, personalized interiors."
              />
              <div className="space-y-4 text-muted-foreground">
                <p>
                Welcome to <b><i>Om Sai Furniture Works</i></b>, where we turn your vision into reality. Since we began our journey in <b>1997</b>, we have been committed to providing the people of Mumbai with superior contracting services. Our foundation is built on an unwavering belief in <b>quality work</b> and <b>client satisfaction</b>.
                </p>
                <p>
                We understand that your space is important, which is why we offer a complete range of services. We expertly handle all types of <b>residential</b> and <b>commercial</b> projects, including foundational civil work, detailed interior projects, flawless painting, and everything in between. With decades of hands-on experience, we have the knowledge and skill to ensure your project is completed to the highest standard. Let us be the expert partner you trust to build your space.
                </p>
                
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                alt="Our design studio" 
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-sand-50 section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Our Building Philosophy"
            subtitle="We believe great construction balances structural integrity with precision craftsmanship to build spaces that are not only beautiful but are built to last."
            align="center"
            className="[&>h2]:!text-[rgba(23,23,23,1)] [&>p]:!text-[rgba(23,23,23,1)]"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <PhilosophyCard 
              title="Structural Integrity"
              description="We build with a focus on durability, ensuring every foundation is solid and every structure is sound. A space must be safe and reliable before it can be beautiful."
            />
            <PhilosophyCard 
              title="Quality Craftsmanship"
              description="Our work embraces enduring quality over shortcuts. From the civil work to the final polish, we ensure every detail is executed with skill and precision for a flawless finish."
            />
            <PhilosophyCard 
              title="Collaborative Partnership"
              description="Every project is a partnership. We listen carefully and work closely with clients and designers to ensure the final built space is a perfect reflection of the original vision."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <SectionHeading 
            title="Meet the Founder"
            subtitle=""
            align="center"
          />
          
          <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
            <TeamMemberCard 
              name="Govind Choursiya"
              role="Carpenter & Founder"
              imageUrl="pic\govind-photo.jpg"
            />
            <div className="max-w-xl text-muted-foreground text-lg">
              <p>
              With nearly <b>Three-decades </b> of hands-on experience, Govind Choursiya is the driving force behind our company's commitment to excellence.  </p>
             <p> His journey began in 1996 in the field of carpentry, where he mastered the art of precision and developed a deep respect for quality materials. This foundational expertise has been instrumental in shaping the company's ethos.</p>
              <p>
              Under his leadership, we have successfully delivered over <b>50 major residential and commercial projects</b>, alongside more than <b>150 smaller projects</b>, including renovations and high-quality paint work. Govind is guided by a powerful philosophy: <b>Quality work is ultimately cheaper than poor work</b>.  </p>
              <p>
              This belief in doing things right the first time is embedded in every project we undertake, ensuring our clients receive lasting value and unparalleled craftsmanship. His vision continues to build a legacy of trust, durability, and client satisfaction on every job site.
              </p>
            </div>
          </div>
        </div>
      </section>

    
      
    </PageLayout>
  );
};

// Philosophy Card Component
const PhilosophyCard = ({ 
  title, 
  description 
}: { 
  title: string; 
  description: string;
}) => {
  return (
    <div
      className="p-6 rounded-lg border border-sand-200 shadow-sm hover-lift"
      style={{ backgroundColor: 'rgba(23, 23, 23, 1)' }}
    >
      <h3 className="text-xl font-medium mb-4 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ 
  name, 
  role, 
  imageUrl 
}: { 
  name: string; 
  role: string;
  imageUrl: string;
}) => {
  return (
    <div className="hover-lift group">
      <div className="aspect-square rounded-lg overflow-hidden mb-6">
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-lg font-medium">{name}</h3>
      <p className="text-sm text-muted-foreground">{role}</p>
    </div>
  );
};

// Process Card Component
const ProcessCard = ({ 
  number, 
  title, 
  description 
}: { 
  number: string; 
  title: string; 
  description: string;
}) => {
  return (
    <div className="hover-lift">
      <div className="text-3xl font-serif text-primary mb-4">{number}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default About;
