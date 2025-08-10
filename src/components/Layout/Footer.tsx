
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 text-foreground border-t border-slate-200 dark:bg-slate-900 dark:border-slate-800">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand column */}
          <div className="space-y-4">
            <div className="flex items-center h-28">
              <img
                src="/logo/black-logo.png"
                alt="Om Sai Furniture Works Logo"
                className="h-28 w-auto object-contain transition-all duration-300 dark:hidden"
              />
              <img
                src="/logo/white-logo.png"
                alt="Om Sai Furniture Works Logo"
                className="h-28 w-auto object-contain transition-all duration-300 hidden dark:block"
              />
            </div>
            <p className="text-muted-foreground max-w-xs">
            Quality work is ultimately cheaper than poor work.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="https://instagram.com" icon={<Instagram size={18} />} label="Instagram" />
              <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} label="Facebook" />
              <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} label="LinkedIn" />
            </div>
          </div>

          {/* Links column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </nav>
          </div>

          {/* Services column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <nav className="flex flex-col space-y-3">

              <p>Residential & Commercial Projects</p>
              <p>Carpantery Works</p>
              <p>Civil Works</p>
              <FooterLink to="/about">More +</FooterLink>
            </nav>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="text-lg font-medium mb-4">Contact Us</h4>
            <div className="space-y-3 text-muted-foreground">
              <div className="flex items-center space-x-3">
                <Mail size={16} className="flex-shrink-0" />
                <a href="mailto:contact@osfw.in" className="hover:text-foreground transition-colors">
                contact@osfw.in
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="flex-shrink-0" />
                <a href="tel:+919892102315" className="hover:text-foreground transition-colors">
                +91 98921 02315
                </a>
              </div>
              <p className="pt-2">
              Antop Hill, Wadala<br />
              Mumbai - 400037,<br />
              Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {currentYear} Om Sai Furniture Works. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    {children}
  </Link>
);

const SocialLink = ({ 
  href, 
  icon, 
  label 
}: { 
  href: string; 
  icon: React.ReactNode;
  label: string;
}) => (
  <a 
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="h-10 w-10 rounded-full bg-slate-200 hover:bg-primary hover:text-primary-foreground flex items-center justify-center transition-colors dark:bg-slate-800"
  >
    {icon}
  </a>
);

export default Footer;
