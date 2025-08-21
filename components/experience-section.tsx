import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin } from "lucide-react"

const experiences = [
  {
    title: "Network Engineering Intern",
    company: "TechCorp Solutions",
    location: "San Francisco, CA",
    period: "Jun 2024 - Aug 2024",
    description:
      "Assisted in network infrastructure maintenance and monitoring. Implemented automated network health checks and contributed to security protocol updates.",
    technologies: ["Cisco", "Python", "SNMP", "Wireshark"],
  },
  {
    title: "Backend Developer",
    company: "StartupXYZ (Part-time)",
    location: "Remote",
    period: "Jan 2024 - Present",
    description:
      "Developing RESTful APIs and microservices for a fintech application. Implemented caching strategies and database optimization techniques.",
    technologies: ["Node.js", "PostgreSQL", "Redis", "Docker"],
  },
]

const education = [
  {
    degree: "Bachelor of Science in Computer Networks",
    school: "University of Technology",
    location: "San Francisco, CA",
    period: "2022 - 2026 (Expected)",
    description:
      "Relevant coursework: Network Protocols, Distributed Systems, Database Management, Cybersecurity, Software Engineering",
    gpa: "3.8/4.0",
  },
]

const certifications = [
  "AWS Cloud Practitioner",
  "Cisco CCNA (In Progress)",
  "Docker Certified Associate",
  "CompTIA Network+",
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-space-grotesk mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey in technology, from academic foundations to practical industry experience.
          </p>
        </div>

        <div className="space-y-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold font-space-grotesk mb-6 text-primary">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="font-space-grotesk">{exp.title}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-semibold font-space-grotesk mb-6 text-primary">Education</h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="font-space-grotesk">{edu.degree}</CardTitle>
                        <CardDescription className="text-base font-medium text-foreground">
                          {edu.school}
                        </CardDescription>
                      </div>
                      <div className="flex flex-col sm:items-end gap-1 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground mb-2 leading-relaxed">{edu.description}</p>
                    <p className="text-sm font-medium text-primary">GPA: {edu.gpa}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-semibold font-space-grotesk mb-6 text-primary">Certifications</h3>
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert) => (
                    <Badge key={cert} variant="outline" className="text-sm py-1 px-3">
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
