import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Code2, Database, Globe, Laptop, Shield, Terminal, Trophy, Download } from "lucide-react";
import { Logo } from "@/components/Logo";

export default function About() {
  const skills = [
    { 
      name: "Security & Hacking", 
      icon: Shield, 
      items: ["Ethical Hacking", "Penetration Testing", "Wireshark", "Metasploit", "Socat", "Netcat", "Burp Suite"] 
    },
    { 
      name: "Development", 
      icon: Laptop, 
      items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion"] 
    },
    { 
      name: "Scripting & Systems", 
      icon: Terminal, 
      items: ["Bash Scripting", "PowerShell", "Linux Administration", "Windows Administration", "Python"] 
    },
    { 
      name: "Achievements", 
      icon: Trophy, 
      items: ["CRTA Certified", "Patriot CTF", "Mahadsec CTF", "2 Years Frontend Exp", "1 Year Hacking Exp"] 
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16 flex flex-col items-center"
      >
        <div className="mb-8">
          <Logo size="xl" />
        </div>
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-md font-berserk tracking-wider">About Me</h1>
        <p className="text-lg text-white/80 leading-relaxed mb-8">
          I am a passionate developer and aspiring Penetration Tester with a unique blend of skills in frontend development and cybersecurity. 
          With <span className="font-semibold text-white">2 years of experience in Frontend Development</span> and <span className="font-semibold text-white">1 year in Ethical Hacking</span>, 
          I build secure, robust, and user-friendly applications. My journey includes participating in CTFs like Patriot CTF and Mahadsec CTF, 
          and I am constantly expanding my knowledge in system administration and network security.
        </p>
        
        <a href="#" className="inline-block">
          <Button size="lg" className="bg-white text-black hover:bg-white/90 font-bold rounded-full px-8 shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform">
            <Download className="mr-2 h-5 w-5" /> Download CV
          </Button>
        </a>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all h-full">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-white/20 text-white">
                    <skill.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white font-berserk tracking-wide">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full text-sm bg-black/20 border border-white/10 text-white/90">
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}