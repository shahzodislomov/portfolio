import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router";

// Static data map
const projectsData: Record<string, any> = {
  "1": {
    _id: "1",
    title: "hamma",
    description: "A comprehensive TypeScript project showcasing modern development practices.",
    tags: ["TypeScript", "React", "Web"],
    githubUrl: "https://github.com/shahzodislomov/hamma",
    codeExplanation: `
### Project Structure
The project follows a modular architecture, separating concerns into distinct layers.

#### Key Components:
1. **Core Logic**: Handles the business logic and state management.
2. **UI Components**: Reusable React components styled with Tailwind CSS.
3. **API Integration**: Typed API calls using Axios/Fetch.
    `
  },
  "2": {
    _id: "2",
    title: "bluepeak-logistics",
    description: "Logistics management system built with TypeScript.",
    tags: ["TypeScript", "Logistics"],
    githubUrl: "https://github.com/shahzodislomov/bluepeak-logistics",
    codeExplanation: "Detailed explanation of the logistics algorithm..."
  },
  "3": {
    _id: "3",
    title: "cyberpunk-chat",
    description: "Real-time chat application with a cyberpunk aesthetic.",
    tags: ["TypeScript", "Real-time", "Chat"],
    githubUrl: "https://github.com/shahzodislomov/cyberpunk-chat",
    codeExplanation: "WebSocket implementation details..."
  },
  "4": {
    _id: "4",
    title: "Network Scanner",
    description: "A custom Python-based network vulnerability scanner using raw sockets.",
    tags: ["Python", "Security", "Networking"],
    codeExplanation: "Implementation of raw sockets for packet analysis..."
  },
  "5": {
    _id: "5",
    title: "Secure File Transfer",
    description: "Encrypted file transfer system ensuring data integrity and confidentiality.",
    tags: ["Node.js", "Cryptography", "Backend"],
    codeExplanation: "AES-256 encryption implementation..."
  },
  "6": {
    _id: "6",
    title: "light-blog",
    description: "A lightweight blogging platform.",
    tags: ["TypeScript", "Blog"],
    githubUrl: "https://github.com/shahzodislomov/light-blog",
    codeExplanation: "Static site generation techniques..."
  },
  "7": {
    _id: "7",
    title: "ingame",
    description: "Gaming platform project created by the team.",
    tags: ["TypeScript", "Gaming"],
    githubUrl: "https://github.com/shahzodislomov/ingame",
    codeExplanation: "Matchmaking algorithm explanation..."
  }
};

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  
  const displayProject = id ? projectsData[id] : null;

  if (!displayProject) {
    return (
      <div className="flex items-center justify-center h-[50vh]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">Project Not Found</h1>
          <Link to="/projects">
            <Button className="bg-white/10 hover:bg-white/20 text-white">Back to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <Link to="/projects" className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-4 text-white drop-shadow-md">
              {displayProject.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              {displayProject.tags?.map((tag: string) => (
                <Badge key={tag} variant="outline" className="border-white/20 text-white/90">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex gap-3">
            {displayProject.githubUrl && (
              <a href={displayProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white bg-transparent">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </Button>
              </a>
            )}
            {displayProject.demoUrl && (
              <a href={displayProject.demoUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-white text-black hover:bg-white/90">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>

        <Card className="bg-white/10 backdrop-blur-md border-white/20 mb-8">
          <CardContent className="p-6">
            <p className="text-lg text-white/90 leading-relaxed">
              {displayProject.description}
            </p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-white">Code Explanation & Insights</h2>
          <Card className="bg-black/40 border-white/10 overflow-hidden">
            <CardContent className="p-6 font-mono text-sm text-white/80">
              <div className="whitespace-pre-wrap">
                {displayProject.codeExplanation || "No detailed code explanation available for this project yet."}
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}