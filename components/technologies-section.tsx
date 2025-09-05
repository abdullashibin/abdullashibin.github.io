import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Palette, Zap, Globe, ShoppingCart } from "lucide-react"

export function TechnologiesSection() {
  const technologies = [
    {
      icon: <Globe className="h-8 w-8 text-primary" />,
      title: "WordPress",
      description: "Expert in WordPress development with deep knowledge of themes, plugins, and custom post types",
      skills: ["Custom Themes", "Plugin Development", "Multisite", "REST API", "Hooks & Filters"],
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "PHP",
      description: "Strong PHP programming skills for backend development and WordPress customizations",
      skills: ["Object-Oriented PHP", "MVC Architecture", "Custom Functions", "Security Best Practices"],
    },
    {
      icon: <Palette className="h-8 w-8 text-primary" />,
      title: "Frontend",
      description: "Modern frontend technologies for creating responsive and interactive user interfaces",
      skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Cross-browser Compatibility"],
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Gutenberg",
      description: "Specialized in Gutenberg block development and modern WordPress editing experience",
      skills: ["Custom Blocks", "Block Patterns", "Block Themes", "FSE", "Performance Optimization"],
    },
    {
      icon: <ShoppingCart className="h-8 w-8 text-primary" />,
      title: "WooCommerce",
      description: "Advanced WooCommerce development and customization for e-commerce solutions",
      skills: ["Custom Payment Gateways", "Product Extensions", "Checkout Customization", "API Integration"],
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Performance",
      description: "Focus on website performance, Core Web Vitals, and SEO optimization",
      skills: ["Core Web Vitals", "PageSpeed Optimization", "Caching Strategies", "SEO Best Practices"],
    },
  ]

  const tools = [
    { name: "Figma", category: "Design" },
    { name: "VS Code", category: "Development" },
    { name: "v0", category: "AI Tools" },
    { name: "Git", category: "Version Control" },
    { name: "Docker", category: "DevOps" },
    { name: "Local WP", category: "Development" },
    { name: "Query Monitor", category: "Debugging" },
    { name: "GTmetrix", category: "Performance" },
  ]

  return (
    <section id="technologies" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">Technologies & Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Specialized expertise in WordPress development, modern web technologies, and performance optimization
          </p>
        </div>

        {/* Main Technologies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-colors duration-200 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-200">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-xl text-foreground">{tech.title}</CardTitle>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{tech.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2">
                  {tech.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs bg-secondary/20 text-secondary-foreground hover:bg-secondary/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools & Software */}
        <div className="bg-card rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Tools & Software</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="text-center p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors duration-200"
              >
                <h4 className="font-semibold text-foreground mb-1">{tool.name}</h4>
                <p className="text-xs text-muted-foreground">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">What I Specialize In</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">High-Performance Development</h4>
              <p className="text-sm text-muted-foreground">
                Clean code, excellent Core Web Vitals, and consistently high PageSpeed scores
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">Gutenberg Block Development</h4>
              <p className="text-sm text-muted-foreground">
                Modern, scalable WordPress development using native Gutenberg editor
              </p>
            </div>
            <div className="p-6 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold text-foreground mb-2">WooCommerce Solutions</h4>
              <p className="text-sm text-muted-foreground">
                Advanced e-commerce customizations and white-label solutions for agencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
