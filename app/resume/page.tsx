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
            <a href="/David_Wilson_CV.pdf" download>
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
                <p className="text-lg text-muted-foreground">Backend Software Engineer | BSc Computer Science</p>
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
                Computer Science graduate from University College Cork, with practical experience in full-stack development, cloud
                infrastructure, and DevOps practices. Skilled in Python, Java, and JavaScript/TypeScript, with hands-on experience deploying
                scalable applications using Docker, Kubernetes, AWS and GCS. Experienced in both academic and professional settings, with a
                proven ability to deliver reliable software solutions and automate workflows.
              </p>
            </section>

            {/* Education */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Education</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
                    <div>
                      <h4 className="text-lg font-medium">BSc Computer Science - 2.1 Honours</h4>
                      <p className="text-muted-foreground">University College Cork</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                      <p>2021 - 2025</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-1">
                    <div>
                      <h4 className="text-lg font-medium">Leaving Certificate</h4>
                      <p className="text-muted-foreground">St. Joseph&apos;s Patrician College (The Bish) • Galway, Ireland</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                      <p>2019 - 2021</p>
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
                    <li>Python</li>
                    <li>JavaScript/TypeScript</li>
                    <li>Java</li>
                    <li>C</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Web Technologies</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Spring Boot</li>
                    <li>Flask</li>
                    <li>Vaadin</li>
                    <li>React & Vite</li>
                    <li>Tailwind & Bootstrap</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Databases</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>SQLite</li>
                    <li>Firestore</li>
                    <li>BigQuery</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Cloud & DevOps</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Google Cloud Platform % AWS</li>
                    <li>Docker</li>
                    <li>Kubernetes</li>
                    <li>CI/CD (GitHub Actions/GitLab CI)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Data Engineering</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Apache Beam</li>
                    <li>ETL Pipelines</li>
                    <li>Web Scraping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">System Administration & Tools</h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Windows, MacOS, Linux</li>
                    <li>Git (GitLab, GitHub)</li>
                    <li>Bash/Shell scripting</li>
                    <li>JetBrains, VS Code</li>
                    <li>Postman & Insomnia</li>
                  </ul>
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
                      <h4 className="text-lg font-medium">Software Engineer L1</h4>
                      <p className="text-muted-foreground">FleetOps</p>
                    </div>
                    <div className="text-sm text-muted-foreground mt-1 md:mt-0">
                      <p>June 2025 - October 2025</p>
                      <p>Galway, IE</p>
                    </div>
                  </div>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                    <li>Created and maintained scalable REST APIs in Python and TypeScript, ensuring reliability and performance.</li>
                    <li>Engineered serverless solutions on Google Cloud Services (Firestore, Cloud Run/Functions, PubSub and BigQuery) to improve
                      scalability and reduce overheads.</li>
                    <li>Built ETL pipelines with Apache Beam, enabling efficient data processing.</li>
                    <li>Automated workflows through webhook and external API integrations.</li>
                    <li>Developed web scraping solutions using Playwright, streamlining data collection and reducing manual data handling.</li>
                  </ul>
                </div>
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
                    <li>Delivered full-stack Java/Spring Boot applications and APIs, delivering robust and scalable solutions.</li>
                    <li>Enhanced performance of a data management application, reducing load times by 30% and simplifying code complexity.</li>
                    <li>Deployed applications using Docker and Kubernetes, leveraging CI/CD pipelines for seamless delivery.</li>
                    <li>Developed Python scripts to support the LDAP system, facilitating the migration and synchronization.</li>
                    <li>Constructed custom APIs for large-scale databases, ensuring performance and data integrity.</li>
                  </ul>
                </div>
              </div>
            </section>
          </Card>
        </TabsContent>

        <TabsContent value="pdf" className="h-[800px] md:h-[1000px] w-full">
          <div className="w-full h-full bg-white rounded-lg border shadow-sm overflow-hidden">
            <iframe 
              src="/David_Wilson_CV.pdf"
              className="w-full h-full" 
              title="Resume PDF"
            />
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-center mt-8">
        <Button asChild>
          <a href="/David_Wilson_CV.pdf" download>
            <Download className="mr-2 h-4 w-4" /> Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
}