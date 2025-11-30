import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Send, Terminal, Shield } from "lucide-react";
import { Link } from "react-router";
import { Logo } from "@/components/Logo";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-24">
          
          {/* Left Side: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-white/90 uppercase tracking-wider">
                Cybersecurity & Development
              </span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white drop-shadow-2xl font-sans mb-6 leading-none">
              Shahzod <br /> Islomov
            </h1>

            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Forging the path between <span className="font-bold text-primary glow-text">Secure Systems</span> and <span className="font-bold text-primary glow-text">Creative Code</span>.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
              <Link to="/projects">
                <Button size="lg" className="group bg-white text-black hover:bg-white/90 border-0 shadow-[0_0_20px_rgba(255,255,255,0.3)] font-bold h-14 px-8 text-lg rounded-full transition-all hover:scale-105">
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent h-14 px-8 text-lg rounded-full backdrop-blur-sm">
                  Contact Me
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-6 text-white/60">
              <a href="https://github.com/shahzodislomov" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <Github className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/in/shahzodislomov/" target="_blank" className="hover:text-white transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <Linkedin className="h-7 w-7" />
              </a>
              <a href="https://t.me/shawn_isl" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <Send className="h-7 w-7" />
              </a>
              <a href="mailto:shahzodislomov39@gmail.com" className="hover:text-white transition-colors transform hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
                <Mail className="h-7 w-7" />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Big Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="flex-1 flex items-center justify-center relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[500px] lg:h-[500px] flex items-center justify-center">
              {/* Background decorative circles */}
              <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-10 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
              
              {/* Main Logo */}
              <Logo size="xl" showIcon={true} className="scale-[2.5] lg:scale-[4] z-20" />
              
              {/* Floating Icons */}
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 right-10 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
              >
                <Terminal className="w-8 h-8 text-primary" />
              </motion.div>

              <motion.div 
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-10 left-0 p-4 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl"
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}