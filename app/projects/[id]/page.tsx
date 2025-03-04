import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Calendar, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";

// Project data
const projects = [
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with product management, cart functionality, and payment processing.",
    longDescription: `
      This e-commerce platform provides a complete solution for online stores. It features a responsive design, 
      product catalog with filtering and search capabilities, shopping cart functionality, secure checkout process, 
      and an admin dashboard for managing products, orders, and customers.
      
      The frontend is built with React and Next.js, providing a fast and responsive user experience. The backend 
      uses Node.js with Express, and data is stored in MongoDB. Payment processing is handled through Stripe integration.
      
      Key features include:
      - User authentication and profile management
      - Product catalog with categories and search
      - Shopping cart and wishlist functionality
      - Secure checkout with Stripe
      - Order tracking and history
      - Admin dashboard for inventory management
      - Responsive design for all devices
    `,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoUrl: "https://ecommerce-demo.example.com",
    githubUrl: "https://github.com/username/ecommerce",
    featured: true,
    date: "2024",
    screenshots: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80"
    ]
  },
  {
    id: "task-manager",
    title: "Task Management App",
    description: "A productivity app for managing tasks, projects, and team collaboration with real-time updates.",
    longDescription: `
      This task management application helps individuals and teams organize their work efficiently. It provides 
      a clean, intuitive interface for creating, organizing, and tracking tasks across different projects.
      
      Built with Next.js and TypeScript on the frontend, the app uses Supabase for the backend, providing 
      real-time updates, authentication, and database services. The UI is designed with Tailwind CSS for a 
      responsive and modern look.
      
      Key features include:
      - Task creation with due dates, priorities, and labels
      - Project organization and team collaboration
      - Real-time updates using Supabase's realtime subscriptions
      - Drag-and-drop interface for task management
      - Calendar view for scheduling
      - Progress tracking and reporting
      - Email notifications for task assignments and deadlines
      - Dark and light mode support
    `,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    demoUrl: "https://taskmanager-demo.example.com",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
    date: "2023",
    screenshots: [
      "https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80",
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: "fitness-tracker",
    title: "Fitness Tracker",
    description: "A mobile-responsive fitness tracking application that allows users to log workouts, track progress, and set goals.",
    longDescription: `
      This fitness tracking application helps users maintain a healthy lifestyle by tracking their workouts, 
      nutrition, and progress over time. It provides a comprehensive solution for fitness enthusiasts of all levels.
      
      The app is built with React Native for cross-platform compatibility, with Firebase providing backend services 
      including authentication, database, and storage. Chart.js is used for visualizing progress and statistics.
      
      Key features include:
      - Workout logging with exercise library
      - Custom workout creation and routines
      - Progress tracking with visual charts
      - Goal setting and achievement tracking
      - Nutrition logging and calorie counting
      - Body measurements and weight tracking
      - Workout reminders and notifications
      - Social sharing and community features
    `,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["React Native", "Firebase", "Chart.js"],
    demoUrl: "https://fitness-demo.example.com",
    githubUrl: "https://github.com/username/fitness-tracker",
    featured: false,
    date: "2023",
    screenshots: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: "weather-app",
    title: "Weather Dashboard",
    description: "A weather application that provides real-time weather data, forecasts, and interactive maps for locations worldwide.",
    longDescription: `
      This weather dashboard provides users with accurate and up-to-date weather information for any location 
      around the world. It features a clean, intuitive interface that displays current conditions, forecasts, 
      and interactive maps.
      
      Built with vanilla JavaScript, the application leverages the OpenWeather API for weather data and 
      Leaflet.js for interactive maps. The design is responsive and adapts to different screen sizes.
      
      Key features include:
      - Current weather conditions with detailed metrics
      - 7-day forecast with hourly breakdowns
      - Interactive maps showing weather patterns
      - Location search with autocomplete
      - Saved locations for quick access
      - Weather alerts and notifications
      - Historical weather data
      - Responsive design for all devices
    `,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80",
    tags: ["JavaScript", "OpenWeather API", "Leaflet.js"],
    demoUrl: "https://weather-demo.example.com",
    githubUrl: "https://github.com/username/weather-app",
    featured: false,
    date: "2022",
    screenshots: [
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1580193769210-b8d1c049a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80",
      "https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1051&q=80"
    ]
  },
  {
    id: "blog-platform",
    title: "Blog Platform",
    description: "A full-featured blogging platform with rich text editing, comments, and user authentication.",
    longDescription: `
      This blog platform provides a complete solution for content creators to publish and manage their articles. 
      It features a modern, clean design with powerful content management capabilities.
      
      Built with Next.js for the frontend and Prisma with PostgreSQL for the backend, the platform uses Auth.js 
      for authentication. The rich text editor allows for complex content creation with images, code blocks, and formatting.
      
      Key features include:
      - Rich text editing with markdown support
      - User authentication and profile management
      - Comment system with moderation
      - Categories and tags for content organization
      - Search functionality
      - Analytics dashboard for content performance
      - SEO optimization tools
      - Responsive design for all devices
    `,
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Auth.js"],
    demoUrl: "https://blog-demo.example.com",
    githubUrl: "https://github.com/username/blog-platform",
    featured: false,
    date: "2022",
    screenshots: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  },
  {
    id: "portfolio",
    title: "Developer Portfolio",
    description: "A responsive developer portfolio website built with Next.js and Tailwind CSS (this website).",
    longDescription: `
      This developer portfolio showcases my skills, projects, and experience in a clean, modern design. It serves 
      as a central hub for potential employers and clients to learn about my work and capabilities.
      
      Built with Next.js and TypeScript, the portfolio uses Tailwind CSS for styling and Shadcn UI for components. 
      It features a responsive design that works well on all devices and screen sizes.
      
      Key features include:
      - Clean, modern design with dark/light mode
      - Project showcase with detailed case studies
      - Skills and experience sections
      - Blog for sharing technical articles
      - Contact form for inquiries
      - Resume download option
      - Responsive design for all devices
      - Fast loading and optimized performance
    `,
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
    demoUrl: "#",
    githubUrl: "https://github.com/username/portfolio",
    featured: false,
    date: "2024",
    screenshots: [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    ]
  }
];

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
      <div className="mb-8">
        <Link href="/projects" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        <div className="lg:col-span-2">
          <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted mb-6">
            <div className="w-full h-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${project.image}')`, backgroundSize: "cover", backgroundPosition: "center", height: "100%" }}></div>
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">{project.description}</p>
              {project.longDescription.split('\n').map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">{paragraph.trim()}</p>
              ))}
            </div>

            <Separator />

            <div>
              <h2 className="text-2xl font-bold mb-4">Project Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden bg-muted">
                    <div className="w-full h-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${screenshot}')`, backgroundSize: "cover", backgroundPosition: "center", height: "100%" }}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="bg-card rounded-lg border p-6 sticky top-24">
            <h2 className="text-xl font-bold mb-4">Project Details</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Project Date</h3>
                <p className="flex items-center mt-1">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  {project.date}
                </p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Technologies</h3>
                <div className="flex flex-wrap gap-1 mt-1">
                  {project.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="pt-4 space-y-3">
                <Button asChild className="w-full">
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </a>
                </Button>
                
                <Button asChild variant="outline" className="w-full">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View Source Code
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter(p => p.id !== project.id)
            .slice(0, 3)
            .map((relatedProject) => (
              <div key={relatedProject.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md h-full flex flex-col">
                <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${relatedProject.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-2">{relatedProject.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {relatedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {relatedProject.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-3">
                    <Link href={`/projects/${relatedProject.id}`} className="inline-flex items-center text-xs font-medium text-primary">
                      Details <ArrowRight className="ml-1 h-3 w-3" />
                    </Link>
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
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Get In Touch</Link>
        </Button>
      </section>
    </div>
  );
}