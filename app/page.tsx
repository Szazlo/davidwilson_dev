import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, Layout, Layers, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-background to-muted w-full">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-4 md:space-y-6 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              Hi, I&#39;m <span className="text-primary">David Wilson</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-[700px]">
              Backend Software Engineer | BSc Computer Science
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mt-6">
              <Button asChild size="lg">
                <Link href="/projects">View My Work</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-background w-full">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">My Skills</h2>
            <p className="text-muted-foreground max-w-[700px]">
              I&#39;ve developed a diverse skill set through coursework, internships, and personal projects.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Frontend Development</h3>
              <p className="text-muted-foreground text-center">
                React, Next.js, TypeScript, Tailwind CSS
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Backend Development</h3>
              <p className="text-muted-foreground text-center">
                Node.js, SpringBoot, PostgreSQL, MongoDB
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Layout className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
              <p className="text-muted-foreground text-center">
                Figma, Adobe XD
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">DevOps</h3>
              <p className="text-muted-foreground text-center">
                Docker, CI/CD, AWS, Vercel
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Layers className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tools & Applications</h3>
              <p className="text-muted-foreground text-center">
                VSCode, JetBrains, Github, Gitlabs, Insomnia, Lens, Docker, Kubernetes
              </p>
            </div>
            <div className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
              <p className="text-muted-foreground text-center">
                Python, Java, C, Go
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 md:py-24 bg-muted w-full">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter mb-4">Featured Projects</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Check out some of my recent academic and personal projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
            <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: "url('https://i.ibb.co/XZqm6PF7/delphi.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold mb-2">Delphi</h3>
                <p className="text-muted-foreground mb-4">
                  An automated programming analysis and assistance learning tool for students and educators.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">React</span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">TypeScript</span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Node.js</span>
                </div>
                <Link href="/projects" className="inline-flex items-center text-sm font-medium text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">
              <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: "url('https://i.ibb.co/p6wKGWZV/Screenshot-2025-03-03-at-23-25-32.png')", backgroundSize: "cover", backgroundPosition: "center" }}></div>
              <div className="p-4 md:p-6">
                <h3 className="text-xl font-semibold mb-2">Seraph</h3>
                <p className="text-muted-foreground mb-4">
                  An open-source server and container management SSH, SFTP client
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Next.js</span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">TypeScript</span>
                  <span className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Supabase</span>
                </div>
                <Link href="https://seraphapp.netlify.app" className="inline-flex items-center text-sm font-medium text-primary">
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-10">
            <Button asChild variant="outline">
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background w-full">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter">Looking for opportunities</h2>
            <p className="text-muted-foreground max-w-[600px]">
              If you&#39;re interested in working together, get in touch!
            </p>
            <Button asChild size="lg" className="mt-4">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}