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
                <p className="text-lg leading-relaxed mb-4">
                  Hello! I&apos;m a final year Computer Science student at University College Cork (UCC), eager to gain practical experience in the field through graduate roles and other opportunities.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                  With a strong foundation in programming languages such as Python, Java, and JavaScript, and a passion for Software/Web development. I&apos;ve developed skills in both frontend and backend technologies through various projects and internships.
                </p>
                <p className="text-lg leading-relaxed">
                  I&apos;m dedicated to contributing my skills to a software development team and making a meaningful impact. When not coding, you can find me bouldering, skiing, or fixing electronics.
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
                      JavaScript
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
                      Spring Boot & Vaadin
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      JavaScript
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Bootstrap & Tailwind
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      React
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">Backend & Databases</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Flask & Jinja
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      MySQL & PostgreSQL
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      MongoDB & SQLite
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      RESTful APIs
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">DevOps & Tools</h3>
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Git, GitHub & GitLab
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Docker & Kubernetes
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Linux & Bash
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      VSCode & JetBrains IDEs
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
                    <span>March 2024 - August 2024</span>
                  </div>
                  <h3 className="text-xl font-semibold">IT Operations</h3>
                  <p className="text-muted-foreground mb-2">EMBL • Heidelberg, DE</p>
                  <ul className="space-y-1 mt-2">
                    <li>• Developed full-stack Java/Spring Boot applications and APIs, delivering robust and scalable solutions.</li>
                    <li>• Optimized loading times and efficiency of a data management application by over 30%, while reducing code complexity.</li>
                    <li>• Deployed applications using Docker and Kubernetes, leveraging CI/CD pipelines for automated and seamless deployments.</li>
                    <li>• Developed Python scripts to support the LDAP system, facilitating migration and synchronization.</li>
                    <li>• Designed and implemented custom APIs to interface with large-scale databases, ensuring performance and data integrity.</li>
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
                  <h3 className="text-xl font-semibold">BSc Computer Science</h3>
                  <p className="text-muted-foreground">University College Cork • Cork, Ireland</p>
                  <p className="mt-2">
                    <strong>Year 4:</strong> Android Development, Parallel & Grid Computing, Mobile & Wireless Networks, Network Security, IoT, AI
                  </p>
                  <p className="mt-1">
                    <strong>Year 3:</strong> Team Project (80%), C-Microcontrollers (80%), Advanced Java (65%), Cloud Infrastructure (59%), Ethical Hacking (52%), Networks and Data Communication (49%)
                  </p>
                  <p className="mt-1">
                    <strong>Year 2:</strong> Logic Design (72%), Intermediate Programming (69%), Information Storage & Management (65%), Usability Engineering (65%), Operating Systems (57%), Networking (56%)
                  </p>
                  <p className="mt-1">
                    <strong>Year 1:</strong> Web Development (81%), Programming (Python) (71%), Foundations of Computer Science (66%), Hardware Organization (63%)
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