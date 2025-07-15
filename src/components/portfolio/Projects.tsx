import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern payment integration, inventory management, and analytics dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates, team collaboration features, and progress tracking.",
      tech: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg", 
      github: "#",
      live: "#",
      featured: false
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for data analysis with real-time charts, filtering capabilities, and export functionality.",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      image: "/placeholder.svg",
      github: "#",
      live: "#",
      featured: true
    },
    {
      title: "Mobile-First Portfolio",
      description: "Responsive portfolio website with smooth animations, optimized performance, and modern design principles.",
      tech: ["Next.js", "Framer Motion", "TypeScript"],
      image: "/placeholder.svg",
      github: "#",
      live: "#",
      featured: false
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work that showcases my skills in development, design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`group overflow-hidden border-0 shadow-elegant hover:shadow-glow transition-smooth animate-slide-in-right ${
                project.featured ? 'lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden bg-muted/50 h-48 lg:h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-smooth">
                  <Button size="sm" variant="hero" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" className="bg-background/90 backdrop-blur-sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>

                {project.featured && (
                  <Badge className="absolute top-4 left-4 hero-gradient text-primary-foreground">
                    Featured
                  </Badge>
                )}
              </div>

              {/* Project Content */}
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-smooth">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center animate-fade-in">
          <Button variant="outline" size="lg" className="transition-smooth hover:shadow-elegant">
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};