import { Link, useLocation } from "react-router";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, CloudRain } from "lucide-react";
import { useState, useEffect } from "react";
import { Logo } from "@/components/Logo";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (document.documentElement.classList.contains("dark")) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    if (newTheme) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-full px-4 py-2 md:px-6 md:py-3 shadow-lg w-full max-w-5xl flex items-center justify-between">
        <div className="flex-shrink-0 mr-8">
          <Link to="/">
            <Logo size="sm" className="hover:scale-110 transition-transform" />
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                location.pathname === item.path 
                  ? "text-black bg-white shadow-md scale-105" 
                  : "text-white/80 hover:text-white hover:bg-white/10"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="w-px h-6 bg-white/20 mx-2" />

          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 rounded-full w-9 h-9 transition-transform hover:rotate-12"
          >
            {isDark ? <CloudRain className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme}
            className="text-white hover:bg-white/10 rounded-full"
          >
            {isDark ? <CloudRain className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="absolute top-20 left-4 right-4 bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 md:hidden"
        >
          <div className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                  location.pathname === item.path 
                    ? "bg-white text-black" 
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}