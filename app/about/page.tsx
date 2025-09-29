import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Code, Download, GraduationCap, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
      <div className="container py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="md:sticky md:top-24">
              <div className="aspect-square relative rounded-xl overflow-hidden mb-6 max-w-[300px] mx-auto md:mx-0">
                <Image
                    src="https://avatars.githubusercontent.com/u/61627384?s=400&u=2bc5fd53d9d4f53ff64a30adab8dc65805e5dc99&v=4"
                    alt="David Wilson"
                    width={400}
                    height={400}
                    className="object-cover"
                />
              </div>
              <div className="space-y-4 max-w-[300px] mx-auto md:mx-0">
                <div>
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <p className="text-muted-foreground">davidwilson0403@gmail.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Based in</h3>
                  <p className="text-muted-foreground">Galway, Ireland</p>
                </div>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button asChild>
                    <Link href="/contact">
                      Get in Touch
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/resume">
                      <Download className="mr-2 h-4 w-4" /> View Resume
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 space-y-10">
            <section>
              <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Computer Science graduate from University College Cork, with practical experience in full-stack development, cloud
                  infrastructure, and DevOps practices. Skilled in Python, Java, and JavaScript/TypeScript, with hands-on experience deploying
                  scalable applications using Docker, Kubernetes, AWS and GCS. Experienced in both academic and professional settings, with a
                  proven ability to deliver reliable software solutions and automate workflows.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="mr-2 h-5 w-5" /> Skills & Technologies
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h3 className="font-semibold">Programming Languages</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Python
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Java
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      JavaScript/TypeScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      C
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Web Development</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Spring Boot
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Flask
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Vaadin
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      React & Vite
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Tailwind & Bootstrap
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Databases</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      MySQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      MongoDB
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      SQLite
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Firestore
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      BigQuery
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Cloud & DevOps</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Google Cloud Platform & AWS
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Docker
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Kubernetes
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      CI/CD (GitHub Actions/GitLab CI)
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Data Engineering</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Apache Beam
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      ETL Pipelines
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Web Scraping (Playwright)
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">System Administration & Tools</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Windows, MacOS, Linux
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Git (GitLab, GitHub)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Bash
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      JetBrains, VS Code
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Postman, Insomnia
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5" /> Work Experience
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-4 pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>June 2025 - October 2025</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Link href={"https://www.fleetops.com/"} target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://cdn.theorg.com/8267c12c-af97-4fa7-87dc-6f3123eff816_thumb.jpg"
                        alt="EMBL Logo"
                        width={35}
                        height={35}
                        className="rounded mr-3"
                      />
                    </Link>
                    <div>
                      <h3 className="text-xl font-semibold">Software Engineer L1</h3>
                      <p className="text-muted-foreground">FleetOps • Galway, IE</p>
                    </div>
                  </div>
                  <ul className="space-y-1 mt-2">
                    <li>• Created and maintained scalable REST APIs in Python and TypeScript, ensuring reliability and performance.</li>
                    <li>• Engineered serverless solutions on Google Cloud Services (Firestore, Cloud Run/Functions, PubSub and BigQuery) to improve
                      scalability and reduce overheads.</li>
                    <li>• Built ETL pipelines with Apache Beam, enabling efficient data processing.</li>
                    <li>• Automated workflows through webhook and external API integrations.</li>
                    <li>• Developed web scraping solutions using Playwright, streamlining data collection and reducing manual data handling.</li>
                  </ul>
                </div>
                <div className="border-l-2 border-primary pl-4 pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>March 2024 - August 2024</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Link href="https://www.embl.org/" target="_blank" rel="noopener noreferrer">
                      <Image
                        src="data:image/jpeg;base64,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"
                        alt="EMBL Logo"
                        width={35}
                        height={35}
                        className="rounded mr-3"
                      />
                    </Link>
                    <div>
                      <h3 className="text-xl font-semibold">IT Operations</h3>
                      <p className="text-muted-foreground">EMBL • Heidelberg, DE</p>
                    </div>
                  </div>
                  <ul className="space-y-1 mt-2">
                    <li>• Delivered full-stack Java/Spring Boot applications and APIs, delivering robust and scalable solutions.</li>
                    <li>• Enhanced performance of a data management application, reducing load times by 30% and simplifying code complexity.</li>
                    <li>• Deployed applications using Docker and Kubernetes, leveraging CI/CD pipelines for seamless delivery.</li>
                    <li>• Developed Python scripts to support the LDAP system, facilitating the migration and synchronization.</li>
                    <li>• Constructed custom APIs for large-scale databases, ensuring performance and data integrity.</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" /> Education
              </h2>
              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-4 pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>2021 - 2025</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <Link href={"https://www.ucc.ie/en/"} target="_blank" rel="noopener noreferrer">
                      <Image
                        src="https://www.ucc.ie/en/media/discoverucc/timeline/8HeraldicCrest.jpg"
                        alt="EMBL Logo"
                        width={35}
                        height={35}
                        className="rounded mr-3"
                      />
                    </Link>
                    <div>
                      <h3 className="text-xl font-semibold">BSc Computer Science - 2.1 Honours</h3>
                      <p className="text-muted-foreground">UCC • Cork, IE</p>
                    </div>
                  </div>
                  <p className="mt-2">
                    <strong>Year 4:</strong> Android Development, Parallel & Grid Computing, Mobile & Wireless Networks, Network Security, IOT, AI,
                    Principles of Compilation, Constraint Programming, Functional Programming
                  </p>
                  <p className="mt-1">
                    <strong>Year 3:</strong> Team Project, C-Microcontrollers, Advanced Java, Cloud Infrastructure, Ethical Hacking, Networks and Data
                    Communication
                  </p>
                  <p className="mt-1">
                    <strong>Year 2:</strong> Logic Design, Intermediate Programming, Information Storage & Management, Usability Engineering, Operating Systems,
                    Network Computing, Computer Architecture, Algorithms and Data Structures, Java Programming
                  </p>
                  <p className="mt-1">
                    <strong>Year 1:</strong> Web Development, Relational Databases, Python Programming, Foundations of Computer Science, Hardware Organization
                  </p>
                </div>
                <div className="border-l-2 border-primary pl-4 pb-2">
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>2019 - 2021</span>
                  </div>
                  <h3 className="text-xl font-semibold">Leaving Certificate</h3>
                  <p className="text-muted-foreground">St. Joseph&apos;s Patrician College (The Bish) • Galway, Ireland</p>
                  <p className="mt-2">
                    <strong>Subjects:</strong> Mathematics, Business, Accounting, DCG, Chemistry, English
                  </p>
                </div>
              </div>
            </section>

          <div className="pt-6 flex justify-center md:justify-start">
            <Button asChild>
              <Link href="/projects">
                View My Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}