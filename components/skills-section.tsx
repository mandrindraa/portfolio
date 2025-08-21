import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "Go", "JavaScript/TypeScript", "Java", "C++", "Bash/Shell"],
  },
  {
    title: "Backend Technologies",
    skills: ["Node.js", "Express.js", "FastAPI", "Django", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Ansible", "Jenkins", "GitLab CI"],
  },
  {
    title: "Networking & Protocols",
    skills: ["TCP/IP", "HTTP/HTTPS", "DNS", "BGP", "OSPF", "VPN", "Wireshark"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "Linux", "Nginx", "Apache", "Grafana", "Prometheus", "ELK Stack"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "InfluxDB", "Elasticsearch"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building robust network infrastructure and scalable backend systems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold font-space-grotesk mb-4 text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
