import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Background() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    
    checkTheme();

    // Observer for class changes on html element
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          checkTheme();
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden transition-colors duration-1000 ease-in-out">
      {/* Background Gradients */}
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a2a40] to-[#0f172a]" />
      </div>
      <div className={`absolute inset-0 transition-opacity duration-1000 ${isDark ? 'opacity-0' : 'opacity-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-[#ff9a44] to-[#ff6b6b]" />
      </div>

      {/* Rain Effect (Dark Mode) */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`rain-${i}`}
              initial={{ y: -20, opacity: 0 }}
              animate={{ 
                y: ["0vh", "100vh"], 
                opacity: [0, 0.5, 0] 
              }}
              transition={{ 
                duration: 1 + Math.random(), 
                repeat: Infinity, 
                delay: Math.random() * 2,
                ease: "linear"
              }}
              className="absolute w-[1px] h-10 bg-blue-200/30"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      )}

      {/* Autumn Leaves/Confetti Effect (Light Mode) */}
      {!isDark && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={`leaf-${i}`}
              initial={{ y: -20, x: Math.random() * 100, rotate: 0, opacity: 0 }}
              animate={{ 
                y: "100vh", 
                x: `calc(${Math.random() * 100}px)`,
                rotate: 360,
                opacity: [0, 0.8, 0]
              }}
              transition={{ 
                duration: 5 + Math.random() * 5, 
                repeat: Infinity, 
                delay: Math.random() * 5,
                ease: "linear"
              }}
              className="absolute w-3 h-3 bg-white/20 rounded-sm"
              style={{ left: `${Math.random() * 100}%` }}
            />
          ))}
        </div>
      )}
      
      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-black/20 pointer-events-none"></div>
    </div>
  );
}