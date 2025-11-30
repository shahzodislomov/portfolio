import { cn } from "@/lib/utils";
import { Terminal } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  showIcon?: boolean;
}

export function Logo({ className, size = "md", showIcon = false }: LogoProps) {
  const sizeClasses = {
    sm: "text-2xl",
    md: "text-4xl",
    lg: "text-6xl",
    xl: "text-8xl",
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  return (
    <div 
      className={cn(
        "relative flex items-center justify-center group select-none",
        className
      )}
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute inset-0 blur-2xl rounded-full opacity-0 group-hover:opacity-50 transition-opacity duration-500",
        "bg-primary/30"
      )} />

      {/* Main Letter */}
      <span className={cn(
        "font-sans font-black tracking-tighter relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:text-primary drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]",
        sizeClasses[size]
      )}>
        W
      </span>

      {/* Decorative Scripting Icon */}
      {showIcon && (
        <div className="absolute -bottom-2 -right-2 text-primary/80 animate-pulse">
          <Terminal className={cn(iconSizes[size])} />
        </div>
      )}
      
      {/* Decorative Elements for "Berserk" feel */}
      <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 rotate-45 scale-0 group-hover:scale-100 transition-all duration-500 ease-out rounded-lg" />
    </div>
  );
}