import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Zap, ShoppingCart, Globe, Blocks } from "lucide-react"

export function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform with WooCommerce",
      description:
        "High-performance e-commerce website built with custom WooCommerce extensions, advanced product filtering, and optimized checkout process. Achieved 95+ PageSpeed score.",
      image: "/modern-ecommerce-website-with-clean-design.jpg",
      technologies: ["WordPress", "WooCommerce", "Custom PHP", "Gutenberg", "Performance Optimization"],
      features: ["Custom Payment Gateway", "Advanced Product Filters", "Mobile-First Design", "SEO Optimized"],
      icon: <ShoppingCart className="h-5 w-5" />,
      category: "E-Commerce",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Corporate Website with Gutenberg Blocks",
      description:
        "Modern corporate website featuring custom Gutenberg blocks, dynamic content management, and exceptional Core Web Vitals performance. Built without page builders.",
      image: "/corporate-website-modern.png",
      technologies: ["WordPress", "Gutenberg", "Custom Blocks", "PHP", "JavaScript"],
      features: ["Custom Block Library", "Dynamic Content", "Multi-language Support", "Fast Loading"],
      icon: <Blocks className="h-5 w-5" />,
      category: "Corporate",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Agency Portfolio with Performance Focus",
      description:
        "High-performance portfolio website for a digital agency with custom animations, case study showcases, and perfect lighthouse scores across all metrics.",
      image: "/creative-agency-portfolio-website-with-modern-layo.jpg",
      technologies: ["WordPress", "Custom Theme", "CSS3", "JavaScript", "Performance Optimization"],
      features: ["Custom Animations", "Case Study System", "Contact Forms", "Blog Integration"],
      icon: <Globe className="h-5 w-5" />,
      category: "Portfolio",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "High-Performance Blog Platform",
      description:
        "Lightning-fast blog platform with advanced content management, author profiles, and social sharing. Optimized for SEO and Core Web Vitals.",
      image: "/modern-blog-website-with-clean-typography.jpg",
      technologies: ["WordPress", "Custom Post Types", "REST API", "Gutenberg", "SEO Optimization"],
      features: ["Author Profiles", "Advanced Search", "Social Integration", "Newsletter Signup"],
      icon: <Zap className="h-5 w-5" />,
      category: "Blog",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "White-Label Agency Solution",
      description:
        "Comprehensive white-label WordPress solution for agencies including custom dashboard, client management, and automated reporting features.",
      image: "/professional-dashboard-interface-for-agencies.jpg",
      technologies: ["WordPress", "Custom Dashboard", "PHP", "MySQL", "REST API"],
      features: ["Client Management", "Automated Reports", "Custom Branding", "Multi-site Support"],
      icon: <Globe className="h-5 w-5" />,
      category: "Agency Tool",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Custom Gutenberg Block Library",
      description:
        "Comprehensive library of custom Gutenberg blocks for content creators, featuring advanced layouts, interactive elements, and performance optimization.",
      image: "/gutenberg-block-editor-interface-with-custom-block.jpg",
      technologies: ["React", "WordPress", "Gutenberg API", "JavaScript", "CSS3"],
      features: ["20+ Custom Blocks", "Block Patterns", "Theme Integration", "Documentation"],
      icon: <Blocks className="h-5 w-5" />,
      category: "Plugin",
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  const categories = ["All", "E-Commerce", "Corporate", "Portfolio", "Blog", "Agency Tool", "Plugin"]

  return (
    <section id="projects" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Showcasing high-performance WordPress solutions built with modern development practices and Gutenberg
            expertise
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              size="sm"
              className={
                category === "All"
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "border-primary/20 text-muted-foreground hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-background border-border hover:border-primary/50 transition-all duration-300 group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-primary/90 text-primary-foreground">
                    <span className="mr-1">{project.icon}</span>
                    {project.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs border-primary/20 text-muted-foreground"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Key Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-primary/20 text-muted-foreground hover:border-primary hover:text-primary bg-transparent"
                  >
                    <Github className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-background rounded-2xl p-8 border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how I can help you build a high-performance WordPress website that delivers exceptional
              results and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact" className="flex items-center gap-2">
                  Start a Project
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                View All Work
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
