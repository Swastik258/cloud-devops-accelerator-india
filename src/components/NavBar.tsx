
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { X, Menu } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Detect scroll to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';
  const navClass = isHomePage && !isScrolled 
    ? "absolute top-0 bg-transparent" 
    : "sticky top-0 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/80";

  return (
    <header className={`z-50 w-full ${navClass} transition-all duration-200 border-b border-gray-800/50`}>
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl">
            <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">Noxian</span>
            <span className="text-white">DevForge</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            Home
          </Link>
          <Link to="/curriculum" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            Curriculum
          </Link>
          <Link to="/lab" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            DevOps Lab
          </Link>
          <Link to="/pricing" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            Pricing
          </Link>
          <Link to="/testimonials" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            Testimonials
          </Link>
          <Link to="/faq" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors">
            Contact
          </Link>
          <Button className="bg-brand-500 hover:bg-brand-600" asChild>
            <Link to="/pricing">Enroll Now</Link>
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="p-1 text-white hover:bg-gray-800/50">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 border-t bg-gray-900 border-gray-800">
            <Link 
              to="/" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/curriculum" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Curriculum
            </Link>
            <Link 
              to="/lab" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              DevOps Lab
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/testimonials" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/faq" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium text-gray-300 hover:text-brand-400 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-brand-500 hover:bg-brand-600 w-full" asChild>
              <Link to="/pricing" onClick={() => setIsMenuOpen(false)}>Enroll Now</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
