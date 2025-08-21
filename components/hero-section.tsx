import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-space-grotesk mb-6">
          Network & Backend
          <span className="text-primary block">Developer</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Computer Networks student passionate about building scalable backend systems, network infrastructure, and
          DevOps automation. Currently seeking opportunities to apply my technical skills in real-world projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Button size="lg" className="font-medium">
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" size="lg" className="font-medium bg-transparent">
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
            <span className="sr-only">GitHub</span>
          </a>
          <a href="https://linkedin.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:alex@example.com" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="h-6 w-6" />
            <span className="sr-only">Email</span>
          </a>
        </div>
      </div>
    </section>
  )
}
