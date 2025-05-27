
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'next-themes';
import { Switch } from '@/components/ui/switch';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const location = useLocation();
  const [mounted, setMounted] = useState(false);
  
  // After mounting, we can safely show the theme UI
  useEffect(() => {
    setMounted(true);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };
  
  // Don't render theme UI until component is mounted
  if (!mounted) return null;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-teal-900 border-b border-teal-100 dark:border-teal-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-teal-900 dark:text-white">GEAPP Alliance</span>
              <span className="text-xl font-bold text-orange ml-1 dark:text-orange-400">Project Tracking Platform</span>
            </Link>
            
            <nav className="ml-10 hidden md:flex space-x-1">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/') 
                    ? 'bg-teal-900/10 text-teal-900 dark:bg-teal-700/30 dark:text-white' 
                    : 'text-teal-700 dark:text-teal-100 hover:bg-teal-50 dark:hover:bg-teal-800'
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/programs" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/programs') 
                    ? 'bg-teal-900/10 text-teal-900 dark:bg-teal-700/30 dark:text-white' 
                    : 'text-teal-700 dark:text-teal-100 hover:bg-teal-50 dark:hover:bg-teal-800'
                }`}
              >
                Programs
              </Link>
              <Link 
                to="/maps" 
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  isActive('/maps') 
                    ? 'bg-teal-900/10 text-teal-900 dark:bg-teal-700/30 dark:text-white' 
                    : 'text-teal-700 dark:text-teal-100 hover:bg-teal-50 dark:hover:bg-teal-800'
                }`}
              >
                Maps
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-teal-700 dark:text-teal-100">Light</span>
              <Switch
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                aria-label="Toggle dark mode"
                className="data-[state=checked]:bg-teal-600"
              />
              <span className="text-xs text-teal-700 dark:text-teal-100">Dark</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
