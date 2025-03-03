"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    window.location.href = `mailto:davidwilson0403@gmail.com?subject=${formData.subject}&body=${formData.message}`;
    
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
      <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-muted-foreground max-w-[700px]">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>
                Here are the ways you can reach me
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 text-primary mt-0.5"/>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:davidwilson0403@gmail.com" className="hover:text-primary">
                      davidwilson0403@gmail.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5"/>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">Galway, IE</p>
                </div>
              </div>
              <div className="aspect-video w-full h-[300px] rounded-md overflow-hidden border border-border">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76330.09614737809!2d-9.131146007093955!3d53.283883104392096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485b93955a2d5bff%3A0x32b1b440a495281!2sGalway!5e0!3m2!1sen!2sie!4v1741041494363!5m2!1sen!2sie"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="grayscale hover:grayscale-0 transition-all duration-300"
                    title="Galway Map"
                />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect</CardTitle>
              <CardDescription>
                Find me on social media
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <a
                    href="https://github.com/szazlo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Github className="h-5 w-5 mr-3 text-primary"/>
                  <span>GitHub</span>
                </a>
                <a
                    href="https://linkedin.com/in/szazlo"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Linkedin className="h-5 w-5 mr-3 text-primary" />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="https://twitter.com/szazlo"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Twitter className="h-5 w-5 mr-3 text-primary" />
                  <span>Twitter</span>
                </a>
                <a 
                  href="mailto:davidwilson0403@gmail.com"
                  className="flex items-center p-3 rounded-md hover:bg-muted transition-colors"
                >
                  <Mail className="h-5 w-5 mr-3 text-primary" />
                  <span>Email</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="Your email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Your message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}