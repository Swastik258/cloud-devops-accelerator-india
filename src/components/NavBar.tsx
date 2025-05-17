
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="font-bold text-2xl">
            <span className="gradient-text">DevOps</span>
            <span className="text-black">Academy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Home
          </Link>
          <Link to="/curriculum" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Curriculum
          </Link>
          <Link to="/pricing" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Pricing
          </Link>
          <Link to="/testimonials" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Testimonials
          </Link>
          <Link to="/faq" className="text-sm font-medium hover:text-brand-500 transition-colors">
            FAQ
          </Link>
          <Link to="/contact" className="text-sm font-medium hover:text-brand-500 transition-colors">
            Contact
          </Link>
          <Button className="bg-brand-500 hover:bg-brand-600">
            Enroll Now
          </Button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" onClick={toggleMenu} className="p-1">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col space-y-4 p-4 border-t bg-white">
            <Link 
              to="/" 
              className="text-sm font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/curriculum" 
              className="text-sm font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Curriculum
            </Link>
            <Link 
              to="/pricing" 
              className="text-sm font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              to="/testimonials" 
              className="text-sm font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              to="/faq" 
              className="text-sm font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link 
              to="/contact" 
              className="text-sm font-medium hover:text-brand-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-brand-500 hover:bg-brand-600 w-full">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
