import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router";

interface Project {
  _id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

// Static data
const projects: Project[] = [
  {
    _id: "1",
    title: "hamma",
    description: "A comprehensive TypeScript project showcasing modern development practices.",
    tags: ["TypeScript", "React", "Web"],
    githubUrl: "https://github.com/shahzodislomov/hamma",
    featured: true,
  },
  {
    _id: "2",
    title: "bluepeak-logistics",
    description: "Logistics management system built with TypeScript, focusing on efficiency and real-time tracking.",
    tags: ["TypeScript", "Logistics", "System Design"],
    githubUrl: "https://github.com/shahzodislomov/bluepeak-logistics",
    featured: true,
  },
  {
    _id: "3",
    title: "cyberpunk-chat",
    description: "Real-time chat application with a cyberpunk aesthetic, featuring secure websocket connections.",
    tags: ["TypeScript", "Real-time", "Security"],
    githubUrl: "https://github.com/shahzodislomov/cyberpunk-chat",
    featured: true,
  },
  {
    _id: "4",
    title: "Network Scanner",
    description: "A custom Python-based network vulnerability scanner using raw sockets.",
    tags: ["Python", "Security", "Networking"],
    featured: true,
  },
  {
    _id: "5",
    title: "Secure File Transfer",
    description: "Encrypted file transfer system ensuring data integrity and confidentiality.",
    tags: ["Node.js", "Cryptography", "Backend"],
    featured: false,
  },
  {
    _id: "6",
    title: "light-blog",
    description: "A lightweight blogging platform designed for speed and simplicity.",
    tags: ["TypeScript", "Blog", "SSG"],
    githubUrl: "https://github.com/shahzodislomov/light-blog",
    featured: false,
  },
  {
    _id: "7",
    title: "ingame",
    description: "Gaming platform project created by the team for gamers to connect and play.",
    tags: ["TypeScript", "Gaming"],
    githubUrl: "https://github.com/shahzodislomov/ingame",
    featured: false,
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl font-bold mb-6 text-white drop-shadow-md">My Projects</h1>
        <p className="text-lg text-white/80">
          A collection of my work, ranging from secure web applications to penetration testing tools and experiments.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full flex flex-col bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold truncate text-white">{project.title}</CardTitle>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-white/20 text-white hover:bg-white/30 border-0">Featured</Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="border-white/20 text-xs text-white/80">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-white/70 text-sm line-clamp-3">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 pt-4">
                <Link to={`/projects/${project._id}`} className="flex-1">
                  <Button variant="default" className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10">
                    Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/10 text-white bg-transparent">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                )}
                {project.demoUrl && (
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon" className="border-white/10 hover:bg-white/10 text-white bg-transparent">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}