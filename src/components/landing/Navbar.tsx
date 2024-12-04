import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { MobileNav } from '../navigation/MobileNav';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'How It Works', href: '/#how-it-works' },
  { name: 'Pricing', href: '/#pricing' },
  { name: 'About Us', href: '/about' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('/#')) {
      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const id = href.replace('/#', '');
          const element = document.getElementById(id);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const id = href.replace('/#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        'bg-dark-card/80 backdrop-blur-md border-b border-dark-border'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-dark-text"
          >
            Pathway Credit
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium",
                  "text-dark-secondary hover:text-dark-text",
                  "hover:bg-dark-element/50 transition-all duration-300"
                )}
              >
                {item.name}
              </a>
            ))}

            <div className="h-6 w-px bg-dark-border mx-2" />

            <Link
              to="/login"
              className={cn(
                "px-4 py-2 rounded-lg text-sm font-medium",
                "text-dark-secondary hover:text-dark-text",
                "hover:bg-dark-element/50 transition-all duration-300"
              )}
            >
              Login
            </Link>

            <button className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium",
              "bg-accent-success text-dark-text",
              "hover:bg-accent-success/90 transition-all duration-300",
              "shadow-lg shadow-accent-success/20"
            )}>
              Get Started
            </button>
          </div>

          {/* Mobile Navigation */}
          <MobileNav />
        </div>
      </div>
    </motion.nav>
  );
}