import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const blogPosts = [
  {
    id: "modern-react-patterns",
    title: "Modern React Patterns for 2025",
    excerpt: "Explore the latest patterns and best practices in React development that will help you write cleaner, more maintainable code.",
    date: "2025-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "JavaScript", "Web Development"],
    featured: true
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips to Boost Your Productivity",
    excerpt: "Discover practical TypeScript tips and tricks that will help you write better code and improve your development workflow.",
    date: "2025-02-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["TypeScript", "JavaScript", "Programming"],
    featured: true
  },
  {
    id: "nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Learn how to optimize your Next.js applications for better performance, faster load times, and improved user experience.",
    date: "2025-02-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    tags: ["Next.js", "Performance", "Web Development"],
    featured: false
  }
];

export default function BlogPage() {
  return (
      <div className="container py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
        <div className="flex flex-col items-center text-center mb-12 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
          <p className="text-muted-foreground max-w-[700px]">
            Thoughts, insights, and tutorials on web development, design, and technology.
          </p>
        </div>

        {/*/!* Featured Posts *!/*/}
        {/*<section className="mb-16 max-w-6xl mx-auto">*/}
        {/*  <h2 className="text-2xl font-bold mb-8">Featured Posts</h2>*/}
        {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">*/}
        {/*    {blogPosts.filter(post => post.featured).map((post) => (*/}
        {/*      <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md">*/}
        {/*        <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${post.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>*/}
        {/*        <div className="p-4 md:p-6">*/}
        {/*          <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground mb-3">*/}
        {/*            <div className="flex items-center">*/}
        {/*              <Calendar className="mr-1 h-3 md:h-4 w-3 md:w-4" />*/}
        {/*              {post.date}*/}
        {/*            </div>*/}
        {/*            <div className="flex items-center">*/}
        {/*              <Clock className="mr-1 h-3 md:h-4 w-3 md:w-4" />*/}
        {/*              {post.readTime}*/}
        {/*            </div>*/}
        {/*          </div>*/}
        {/*          <h3 className="text-lg md:text-xl font-semibold mb-2">{post.title}</h3>*/}
        {/*          <p className="text-muted-foreground text-sm md:text-base mb-4">*/}
        {/*            {post.excerpt}*/}
        {/*          </p>*/}
        {/*          <div className="flex flex-wrap gap-2 mb-4">*/}
        {/*            {post.tags.map((tag) => (*/}
        {/*              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">*/}
        {/*                {tag}*/}
        {/*              </Badge>*/}
        {/*            ))}*/}
        {/*          </div>*/}
        {/*          <Link href={`/blog/${post.id}`} className="inline-flex items-center text-sm font-medium text-primary">*/}
        {/*            Read More <ArrowRight className="ml-1 h-4 w-4" />*/}
        {/*          </Link>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    ))}*/}
        {/*  </div>*/}
        {/*</section>*/}

        {/* All Posts */}
        <section className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">All Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {/*{blogPosts.filter(post => !post.featured).map((post) => (*/}
            {/*  <div key={post.id} className="group relative overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-md h-full flex flex-col">*/}
            {/*    <div className="aspect-video w-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${post.image}')`, backgroundSize: "cover", backgroundPosition: "center" }}></div>*/}
            {/*    <div className="p-4 flex flex-col flex-grow">*/}
            {/*      <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">*/}
            {/*        <div className="flex items-center">*/}
            {/*          <Calendar className="mr-1 h-3 w-3" />*/}
            {/*          {post.date}*/}
            {/*        </div>*/}
            {/*        <div className="flex items-center">*/}
            {/*          <Clock className="mr-1 h-3 w-3" />*/}
            {/*          {post.readTime}*/}
            {/*        </div>*/}
            {/*      </div>*/}
            {/*      <h3 className="text-base md:text-lg font-semibold mb-2 line-clamp-1">{post.title}</h3>*/}
            {/*      <p className="text-muted-foreground text-xs md:text-sm mb-3 line-clamp-2">*/}
            {/*        {post.excerpt}*/}
            {/*      </p>*/}
            {/*      <div className="flex flex-wrap gap-1 mb-3">*/}
            {/*        {post.tags.map((tag) => (*/}
            {/*          <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20 text-xs">*/}
            {/*            {tag}*/}
            {/*          </Badge>*/}
            {/*        ))}*/}
            {/*      </div>*/}
            {/*      <Link href={`/blog/${post.id}`} className="inline-flex items-center text-xs font-medium text-primary mt-auto">*/}
            {/*        Read More <ArrowRight className="ml-1 h-3 w-3" />*/}
            {/*      </Link>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*))}*/}
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7302370997662363648" className="w-full h-96" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
            <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7291611065283432449" className="w-full h-96" frameBorder="0" allowFullScreen="" title="Embedded post"></iframe>
          </div>
        </section>
      </div>
  );
}