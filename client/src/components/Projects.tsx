import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/portfolioData";

export function Projects() {
  const [filter, setFilter] = useState<string>("All");

  // Logic to flatten the category arrays into a single list of unique tags
  const categories = ["All", ...Array.from(new Set(projects.flatMap(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16" />
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              onClick={() => setFilter(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="h-full flex flex-col hover-elevate transition-all overflow-hidden group" data-testid={`card-project-${project.id}`}>
                
                {/* SMART IMAGE CONTAINER */}
                <div className="relative h-48 overflow-hidden bg-card">
                  {/* Fallback Gradient Box */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-card flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform">
                      {project.title.charAt(0)}
                    </div>
                  </div>

                  {/* Image Overlay */}
                  {project.image && project.image !== "/placeholder-project.jpg" && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 z-10"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                </div>

                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                {/* FOOTER WITH BUTTONS */}
                <CardFooter className="gap-2 flex-wrap">
                  {/* View Live Button - Shows if liveUrl exists (removed the !== "#" check) */}
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 flex-1"
                      asChild
                      data-testid={`button-view-live-${project.id}`}
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        View Live
                      </a>
                    </Button>
                  )}
                  
                  {/* Source Code Button */}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1"
                      asChild
                      data-testid={`button-github-${project.id}`}
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}