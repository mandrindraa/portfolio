import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Network Traffic Analyzer",
    description:
      "A real-time network traffic monitoring tool built with Python and Wireshark integration. Features packet analysis, protocol detection, and security threat identification.",
    technologies: ["Python", "Wireshark", "Scapy", "Flask", "SQLite"],
    github: "https://github.com",
    demo: "https://demo.com",
    image: "/network-traffic-analyzer-dashboard.png",
  },
  {
    title: "Microservices API Gateway",
    description:
      "A scalable API gateway built with Node.js and Docker, featuring load balancing, rate limiting, and service discovery for microservices architecture.",
    technologies: ["Node.js", "Express", "Docker", "Redis", "Nginx"],
    github: "https://github.com",
    demo: null,
    image: "/microservices-architecture.png",
  },
  {
    title: "Infrastructure Automation Pipeline",
    description:
      "Complete CI/CD pipeline using Terraform, Ansible, and Jenkins for automated deployment and infrastructure management across multiple cloud providers.",
    technologies: ["Terraform", "Ansible", "Jenkins", "AWS", "Kubernetes"],
    github: "https://github.com",
    demo: null,
    image: "/devops-pipeline-automation.png",
  },
  {
    title: "Distributed Chat System",
    description:
      "A real-time chat application with WebSocket support, message queuing, and horizontal scaling capabilities using Redis and MongoDB.",
    technologies: ["Go", "WebSocket", "Redis", "MongoDB", "Docker"],
    github: "https://github.com",
    demo: "https://chat-demo.com",
    image: "/distributed-chat-interface.png",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in backend development, network engineering, and DevOps automation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="font-space-grotesk">{project.title}</CardTitle>
                <CardDescription className="leading-relaxed">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button size="sm" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
