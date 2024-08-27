import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-background">
      <Link to="/" className="flex items-center justify-center">
        <Briefcase className="h-6 w-6 text-primary" />
        <span className="text-xl font-bold text-foreground">YourHR</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link to="/job-listings" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          Find Jobs
        </Link>
        <Link to="/users" className="text-sm font-medium text-muted-foreground hover:text-foreground">
          See All Users
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
