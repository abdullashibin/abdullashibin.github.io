import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Passionate WordPress developer specializing in high-performance websites and modern development practices
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img
                  src="/professional-developer-portrait.png"
                  alt="Shibin Abdulla - WordPress Developer"
                  className="w-72 h-72 rounded-xl object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">
                Available for Remote Work
              </div>
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">WordPress Developer & Gutenberg Specialist</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I build high-performance WordPress websites using the native Gutenberg block editor — no page-builder
                  bloat, no unnecessary code. Gutenberg is the future of WordPress: modern, scalable, and built for
                  speed.
                </p>
                <p>
                  My builds are clean, SEO-friendly, and consistently achieve excellent Core Web Vitals and PageSpeed
                  scores. Beyond building pages, I specialize in extending WordPress and WooCommerce with custom
                  functionality and technical problem-solving.
                </p>
                <p>
                  I offer high-performance WordPress development with Gutenberg, WooCommerce development and advanced
                  customizations, and white-label WordPress solutions for agencies.
                </p>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                Remote Work Only
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                Contract-Based
              </Badge>
              <Badge variant="outline" className="border-primary text-primary">
                Available Now
              </Badge>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Experience */}
          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Freelance Web Developer</h4>
                  <p className="text-sm text-primary font-medium">May 2025 - Present</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Providing high-performance WordPress solutions and custom development services
                  </p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-semibold text-foreground">Web Developer</h4>
                  <p className="text-sm text-muted-foreground font-medium">Mentegoz Technologies LLP</p>
                  <p className="text-sm text-muted-foreground">Feb 2025 - May 2025 · 4 mos</p>
                  <p className="text-sm text-muted-foreground mt-1">On-site development experience</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Education */}
          <Card className="bg-background border-border">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <GraduationCap className="h-5 w-5 text-primary" />
                Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Bachelor of Arts - BA</h4>
                  <p className="text-sm text-primary font-medium">Rouzathul Uloom Arabic College</p>
                  <p className="text-sm text-muted-foreground mt-1">Arabic Language and Literature</p>
                </div>
                <div className="border-l-2 border-muted pl-4">
                  <h4 className="font-semibold text-foreground">High School Diploma</h4>
                  <p className="text-sm text-muted-foreground font-medium">Farook College, Kozhikode</p>
                  <p className="text-sm text-muted-foreground mt-1">Science</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
