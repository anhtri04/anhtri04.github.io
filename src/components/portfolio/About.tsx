import { Code, Palette, Rocket, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Building responsive and performant web applications with modern frameworks and technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that delight users and drive engagement."
    },
    {
      icon: Rocket,
      title: "Performance Optimization",
      description: "Ensuring applications are fast, efficient, and provide excellent user experiences across all devices."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Working effectively with cross-functional teams to deliver high-quality products on time."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate developer with 5+ years of experience creating digital solutions that make a difference. 
              I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skills.map((skill, index) => (
              <Card 
                key={skill.title} 
                className="card-gradient border-0 shadow-elegant hover:shadow-glow transition-smooth animate-slide-in-left group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                      <skill.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                      <p className="text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Personal Story */}
          <Card className="card-gradient border-0 shadow-elegant animate-fade-in">
            <CardContent className="p-8 md:p-12 text-center">
              <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Started as a curious student fascinated by the intersection of creativity and technology. 
                Over the years, I've had the privilege of working with amazing teams and clients, 
                building everything from simple websites to complex web applications.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I'm not coding, you can find me exploring new design trends, contributing to open source projects, 
                or sharing knowledge with the developer community through articles and mentoring.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};