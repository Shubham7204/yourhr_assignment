import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-background">
      <p className="text-xs text-muted-foreground">&copy; 2024 YourHR. All rights reserved.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link to="/terms-of-service" className="text-xs text-muted-foreground hover:text-foreground">
          Terms of Service
        </Link>
        <Link to="/privacy-policy" className="text-xs text-muted-foreground hover:text-foreground">
          Privacy Policy
        </Link>
        <Link to="/contact-us" className="text-xs text-muted-foreground hover:text-foreground">
          Contact Us
        </Link>
      </nav>
    </footer>
  );
};

export default Footer;
