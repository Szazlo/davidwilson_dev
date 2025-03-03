"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function ResumePage() {
  const [activeTab, setActiveTab] = useState("view");

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6">
      <div className="flex flex-col items-center text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Resume</h1>
        <p className="text-muted-foreground max-w-[700px]">
          My education, experience, and skills.
        </p>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <a href="/resume.pdf" download>
              <Download className="mr-2 h-4 w-4" /> Download PDF
            </a>
          </Button>
        </div>
      </div>

      <Tabs defaultValue="view" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
        <div className="flex justify-center mb-6">
          <TabsList>
            <TabsTrigger value="view">View Resume</TabsTrigger>
            <TabsTrigger value="pdf">PDF Version</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="view">
          <Card className="bg-card rounded-lg border shadow-sm p-6 md:p-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">David Wilson</h2>
                <p className="text-lg text-muted-foreground">Computer Science Student & Software Developer</p>
              </div>
              <div className="mt-4 md:mt-0 space-y-1 text-sm">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                  <a href="mailto:contact@example.com" className="hover:text-primary">davidwilson0403@gmail.com</a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                  <span>Galway, IE</span>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Summary */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Professional Summary</h3>
              <p className="text-muted-foreground">
                Final year Computer Science student at University College Cork (UCC), eager to gain practical experience in the field through
                graduate roles and other opportunities. With a strong foundation in programming languages such as Python, Java, and JavaScript,
                and a passion for Software/Web development. Dedicated to contributing skills to a software development team and making a
                meaningful impact.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
                    <div>
                      <h4 className="text-lg font-medium">Bachelor of Science in Computer Science</h4>
                      <p className="text-muted-foreground">University College Cork</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                      <p>2021 - 2025</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Skills */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-3">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium mb-2">Programming Languages</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>JavaScript/TypeScript</li>
                    <li>Python</li>
                    <li>Java</li>
                    <li>C</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Web Technologies</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>React, Next.js</li>
                    <li>Supabase, Spring Boot, Vaadin</li>
                    <li>Node.js, Vite, Bun</li>
                    <li>RESTful APIs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Databases & Tools</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>PostgreSQL, MongoDB</li>
                    <li>Git, GitHub</li>
                    <li>Docker</li>
                    <li>AWS, Vercel</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Other tools</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>VS, JetBrains</li>
                    <li>Insomnia, Postman, Bruno</li>
                    <li>Lens, Kubernetes</li>
                  </ul>
                <div>
                  <h4 className="font-medium mb-2">Other Skills</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Agile Methodologies</li>
                    <li>Problem Solving</li>
                    <li>Team Collaboration</li>
                  </ul>
                </div>
              </div>
              </div>
            </section>

            {/* Work Experience */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
                    <div>
                      <h4 className="text-lg font-medium">IT Operations</h4>
                      <p className="text-muted-foreground">European Molecular Biology Laboratory (EMBL)</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                      <p>March 2024 - August 2024</p>
                      <p>Heidelberg, DE</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Developed full-stack Java/Spring Boot applications and APIs, delivering robust and scalable solutions</li>
                    <li>Optimized loading times and efficiency of a data management application by over 30%, while reducing code complexity</li>
                    <li>Deployed applications using Docker and Kubernetes, leveraging CI/CD pipelines for automated and seamless deployments</li>
                    <li>Developed Python scripts to support the LDAP system, facilitating the migration and synchronization</li>
                    <li>Designed and implemented custom APIs to interface with large-scale databases, ensuring performance and data integrity</li>
                  </ul>
                </div>
              </div>
            </section>
          </Card>
        </TabsContent>

        <TabsContent value="pdf" className="h-[800px] md:h-[1000px] w-full">
          <div className="w-full h-full bg-white rounded-lg border shadow-sm overflow-hidden">
            <iframe 
              src="/resume.pdf" 
              className="w-full h-full" 
              title="Resume PDF"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button asChild>
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
}