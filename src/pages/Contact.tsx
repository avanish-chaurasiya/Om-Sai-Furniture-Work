import React, { useState } from 'react'; // <<< UPDATED (add useState)
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import PageLayout from '@/components/Layout/PageLayout.tsx';
import PageHeader from '@/components/UI/PageHeader.tsx';
import { Button } from '@/components/UI/button.tsx';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false); // <<< NEW: State for submission status
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // <<< 1. ADD THIS LINE to store the form reference
    setIsSubmitting(true);
  
    const formData = new FormData(form);
  
    const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbysZh-uy2nKDE8WZTiMbP6bhNi01stCTVj7plDFY0GO2i-iGXtQHYnA98L1sTcoD3R2/exec'; // Make sure your URL is here
  
    try {
      const response = await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
  
      if (result.result === "success") {
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. We'll get back to you soon!",
        });
        form.reset(); // <<< 2. CHANGE THIS LINE to use the stored reference
      } else {
        throw new Error(result.error || 'An unknown error occurred in the script.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Have a project in mind? We'd love to hear about it. Let's create something beautiful together."
      />

      <section className="section-padding">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* All your input fields remain exactly the same... */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring dark:text-black"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring dark:text-black"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring dark:text-black"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring dark:text-black"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none dark:text-black"
                  ></textarea>
                </div>
                
                {/* <<< UPDATED: The Button is now aware of the submission state */}
                <Button type="submit" className="flex items-center rounded-full" disabled={isSubmitting}>
                  <Send size={16} className="mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>

              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-serif mb-6">Contact Information</h2>
              <div className="space-y-6">
                <ContactItem 
                  icon={<Mail />}
                  title="Email"
                  content={<a href="contact.osfw.in@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">contact.osfw.in@gmail.com</a>}
                />
                <ContactItem 
                  icon={<Phone />}
                  title="Phone"
                  content={<a href="tel:+919892102315" className="text-muted-foreground hover:text-foreground transition-colors">+91 9892102315</a>}
                />
                <ContactItem 
                  icon={<MapPin />}
                  title="Location"
                  content={
                    <address className="text-muted-foreground not-italic">
                      Antop Hill, Wadala<br />
                      Mumbai - 400037,<br />
                      Maharashtra, India
                    </address>
                  }
                />
                <ContactItem 
                  icon={<Clock />}
                  title="Contact Hours"
                  content={
                    <div className="text-muted-foreground">
                      <p>Monday - Saturday: 9:00 AM - 10:00 PM</p>
                      <p>Sunday: 8:00 AM - 11:00 PM</p>
                    </div>
                    
                  }
                />
                <div>                     
                   <p><b>Note: </b> Please feel free to call us directly at your earliest convenience to discuss your project.</p>
                </div>
              </div>

              {/* Map */}
              {/* <div className="mt-8 rounded-lg overflow-hidden border border-input h-64 bg-muted flex items-center justify-center">
                <p className="text-muted-foreground text-center p-4">
                  Map visualization would be embedded here in a production environment
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Contact Item Component
const ContactItem = ({ 
  icon, 
  title, 
  content 
}: { 
  icon: React.ReactNode; 
  title: string; 
  content: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-12 w-12 bg-sand-100 rounded-full flex items-center justify-center mr-4">
        <div className="dark:text-black">
          {icon}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-medium">{title}</h3>
        {content}
      </div>
    </div>
  );
};


export default Contact;
