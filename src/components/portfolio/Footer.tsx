import { Github, Linkedin, Mail, Heart } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Mail, label: "Email", href: "mailto:hello@portfolio.com" },
  ];

  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <div className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary-glow to-primary bg-clip-text text-transparent">
              Portfolio
            </div>
            <p className="text-background/70 flex items-center justify-center md:justify-start gap-1">
              Made with <Heart className="h-4 w-4 text-red-400 fill-current" /> by Your Name
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 transition-smooth group"
                aria-label={label}
              >
                <Icon className="h-5 w-5 group-hover:text-primary-glow transition-smooth" />
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/70">
          <p>&copy; 2024 Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};