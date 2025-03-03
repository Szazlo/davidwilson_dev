import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
    {
        id: "delphi",
        title: "Delphi",
        description: "An automated programming analysis and assistance learning tool for students and educators.",
        image: "https://i.ibb.co/XZqm6PF7/delphi.png",
        tags: ["React", "TypeScript", "Tailwind", "ShadCn", "Node.js"],
        demoUrl: "#",
        githubUrl: "https://github.com/Szazlo/delphi-frontend",
        featured: true
    },
    {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "A responsive developer portfolio website built with Next.js and Tailwind CSS (this website).",
    image: "https://i.ibb.co/sdSNjFhX/portfolio.png",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/username/portfolio",
    featured: false
  },
    {
        id: "orisis",
        title: "Sands of Orisis",
        description: "Real Time Strategy game developed in Godot 4",
        image: "https://private-user-images.githubusercontent.com/65133392/311442500-0f71f2ca-118c-484a-8105-4f7617575e10.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDEwNDM5NTQsIm5iZiI6MTc0MTA0MzY1NCwicGF0aCI6Ii82NTEzMzM5Mi8zMTE0NDI1MDAtMGY3MWYyY2EtMTE4Yy00ODRhLTgxMDUtNGY3NjE3NTc1ZTEwLnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNTAzMDMlMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjUwMzAzVDIzMTQxNFomWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTQ4OTIwOTUzZGY2MWI4NGFhZGM5ODc3NTllMzgwNjFiMzI0NjQ4M2M5OTA2ZWIyYzY2ZWJjYWVjZWM0ZWNhY2QmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0In0._gytJ7MCd1RXEJtdD9v4Ej3poONfnUneq4zDPJNB-Q8",
        tags: ["Godot"],
        demoUrl: "#",
        githubUrl: "https://github.com/colmmurphyxyz/CS3305-2024-Team-2",
        featured: false
    },
    {
        id: "forklore",
        title: "Forklore",
        description: "A recipe sharing platform for food enthusiasts to discover and share their favorite recipes.",
        image: "https://i.ibb.co/ksjJqWpM/Screenshot-2025-03-03-at-23-18-37.png",
        tags: ["React", "TypeScript", "Tailwind", "Firebase"],
        demoUrl: "#",
        githubUrl: "https://github.com/Szazlo/forklore-web",
        featured: true
    },
    {
        id: "Seraph",
        title: "Seraph",
        description: "A server and container management SSH, SFTP client",
        image: "https://i.ibb.co/p6wKGWZV/Screenshot-2025-03-03-at-23-25-32.png",
        tags: ["Electron", "React", "TypeScript", "Tailwind"],
        demoUrl: "https://szazlo.github.io/seraph-web/",
        githubUrl: "https://github.com/Szazlo/seraph-web",
        featured: true
    }
];

export default function ProjectsPage() {
  return (
      <div className="container py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-muted-foreground max-w-[700px]">
            A collection of some projects I&apos;ve built and collaborated on throughout my academic and personal journey. Each project represents different skills and technologies I&apos;ve worked with.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-16 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {projects.filter(project => project.featured).map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
                  <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${project.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                  <div className="p-4 md:p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                            {tag}
                          </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
                      {/*{project.id && (*/}
                      {/*    <Link href={`/projects/${project.id}`} className="inline-flex items-center text-sm font-medium text-primary">*/}
                      {/*      View Details <ArrowRight className="ml-1 h-4 w-4" />*/}
                      {/*    </Link>*/}
                      {/*)}*/}
                      {project.demoUrl && project.demoUrl !== "#" && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                            Live Demo <ExternalLink className="ml-1 h-4 w-4" />
                          </a>
                      )}
                      {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
                            GitHub <Github className="ml-1 h-4 w-4" />
                          </a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.filter(project => !project.featured).map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md h-full flex flex-col">
                  <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${project.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                            {tag}
                          </Badge>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-3">
                      {/*{project.id && (*/}
                      {/*    <Link href={`/projects/${project.id}`} className="inline-flex items-center text-xs font-medium text-primary">*/}
                      {/*      Details <ArrowRight className="ml-1 h-3 w-3" />*/}
                      {/*    </Link>*/}
                      {/*)}*/}
                      {project.demoUrl && project.demoUrl !== "#" && (
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground">
                            Demo <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                      )}
                      {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-xs font-medium text-muted-foreground hover:text-foreground">
                            GitHub <Github className="ml-1 h-3 w-3" />
                          </a>
                      )}
                    </div>
                  </div>
                </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-16 py-8 md:py-10 px-4 md:px-6 bg-muted rounded-lg text-center max-w-5xl mx-auto">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Interested in working together?</h2>
          <p className="text-muted-foreground max-w-[600px] mx-auto mb-6">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </section>
      </div>
  );
}