import { Card, CardContent } from "@/components/ui/card"
import { Network, Server, Cog } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Driven by curiosity and a passion for technology, I specialize in the intersection of network engineering
            and backend development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              As a Computer Networks student, I've developed a deep understanding of how data flows through complex
              systems. My focus on backend development and DevOps allows me to build and maintain the infrastructure
              that powers modern applications.
            </p>
            <p className="text-foreground leading-relaxed">
              I'm particularly interested in network protocols, distributed systems, and automation. My goal is to
              create robust, scalable solutions that can handle the demands of today's interconnected world.
            </p>
            <p className="text-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
              diving deep into network security research.
            </p>
          </div>

          <div className="grid gap-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Network className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">Network Engineering</h3>
                    <p className="text-sm text-muted-foreground">
                      Deep understanding of protocols, routing, and network architecture
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Server className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">Backend Development</h3>
                    <p className="text-sm text-muted-foreground">Building scalable APIs and distributed systems</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Cog className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold font-space-grotesk">DevOps & Automation</h3>
                    <p className="text-sm text-muted-foreground">
                      CI/CD pipelines, containerization, and infrastructure as code
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
