
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/Theme/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll event to change navbar style
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-4 bg-background/95 backdrop-blur-sm shadow-sm'
          : 'py-6 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center h-12">
          <img
            src="/logo/black-logo.png"
            alt="Om Sai Furniture Works Logo"
            className="h-14 w-auto object-contain transition-all duration-300 dark:hidden"
          />
          <img
            src="/logo/white-logo.png"
            alt="Om Sai Furniture Works Logo"
            className="h-14 w-auto object-contain transition-all duration-300 hidden dark:block"
          />
          <span className="flex-col justify-center ml-2 hidden max-[850px]:hidden lg:flex">
            <span className="text-2xl font-serif font-semibold text-foreground whitespace-nowrap">Om Sai Furniture Work</span>
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap -mt-1 ml-7">All Civil & Interior Contractor</span>
          </span>
          <span className="flex-col justify-center ml-2 max-[850px]:flex lg:hidden">
            <span className="text-2xl font-serif font-semibold text-foreground whitespace-nowrap"><b>O S F W</b></span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button and Theme Toggle */}
        <div className="md:hidden flex items-center space-x-1">
          <ThemeToggle />
          <button
            className="text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border animate-fade-in">
          <nav className="container mx-auto py-6 px-6 flex flex-col space-y-4">
            <MobileNavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/projects" onClick={() => setIsMenuOpen(false)}>Projects</MobileNavLink>
            <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Nav Link component
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const isActive = window.location.pathname === to;
  
  return (
    <Link
      to={to}
      className={cn(
        'link-underline font-medium text-sm uppercase tracking-wider transition-colors',
        isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {children}
    </Link>
  );
};

// Mobile Nav Link component
const MobileNavLink = ({ 
  to, 
  children, 
  onClick 
}: { 
  to: string; 
  children: React.ReactNode;
  onClick: () => void;
}) => {
  const isActive = window.location.pathname === to;
  
  return (
    <Link
      to={to}
      onClick={onClick}
      className={cn(
        'block py-2 text-lg transition-colors',
        isActive ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
