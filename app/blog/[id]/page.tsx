import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { notFound } from "next/navigation";
import { Twitter, Linkedin, Mail } from "lucide-react";
import { GetStaticPaths, GetStaticProps } from "next";

// Blog post data
const blogPosts = [
  {
    id: "modern-react-patterns",
    title: "Modern React Patterns for 2025",
    excerpt: "Explore the latest patterns and best practices in React development that will help you write cleaner, more maintainable code.",
    date: "2025-03-15",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["React", "JavaScript", "Web Development"],
    featured: true,
    content: `
      # Modern React Patterns for 2025

      React has evolved significantly since its initial release, and with each passing year, new patterns and best practices emerge. In 2025, several patterns have become standard in the React ecosystem, helping developers write more maintainable, performant, and scalable applications.

      ## 1. Server Components and Client Components

      With the introduction of React Server Components, we now have a clear separation between server and client components. This pattern allows for better performance by reducing the JavaScript bundle size sent to the client.

      \`\`\`jsx
      // Server Component
      export default async function ProductList() {
        const products = await getProducts();

        return (
          <div>
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        );
      }
      \`\`\`

      \`\`\`jsx
      // Client Component
      'use client';

      import { useState } from 'react';

      export default function ProductCard({ product }) {
        const [isExpanded, setIsExpanded] = useState(false);

        return (
          <div onClick={() => setIsExpanded(!isExpanded)}>
            <h2>{product.name}</h2>
            {isExpanded && <p>{product.description}</p>}
          </div>
        );
      }
      \`\`\`

      ## 2. React Query for Data Fetching

      React Query has become the de facto standard for data fetching in React applications. It provides a clean API for fetching, caching, and updating data.

      \`\`\`jsx
      import { useQuery, useMutation } from '@tanstack/react-query';

      function Products() {
        const { data, isLoading, error } = useQuery({
          queryKey: ['products'],
          queryFn: fetchProducts,
        });

        const mutation = useMutation({
          mutationFn: addProduct,
          onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['products'] });
          },
        });

        if (isLoading) return <div>Loading...</div>;
        if (error) return <div>Error: {error.message}</div>;

        return (
          <div>
            {data.map(product => (
              <div key={product.id}>{product.name}</div>
            ))}
            <button onClick={() => mutation.mutate(newProduct)}>
              Add Product
            </button>
          </div>
        );
      }
      \`\`\`

      ## 3. Compound Components

      Compound components provide a more declarative and flexible API for complex components. This pattern allows components to share state and behavior while giving the consumer control over the rendering.

      \`\`\`jsx
      import { createContext, useContext, useState } from 'react';

      const TabsContext = createContext();

      function Tabs({ children, defaultIndex = 0 }) {
        const [activeIndex, setActiveIndex] = useState(defaultIndex);

        return (
          <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
            {children}
          </TabsContext.Provider>
        );
      }

      function TabList({ children }) {
        return <div className="tab-list">{children}</div>;
      }

      function Tab({ index, children }) {
        const { activeIndex, setActiveIndex } = useContext(TabsContext);

        return (
          <button
            className={\`tab \${activeIndex === index ? 'active' : ''}\`}
            onClick={() => setActiveIndex(index)}
          >
            {children}
          </button>
        );
      }

      function TabPanels({ children }) {
        return <div className="tab-panels">{children}</div>;
      }

      function TabPanel({ index, children }) {
        const { activeIndex } = useContext(TabsContext);

        return activeIndex === index ? <div className="tab-panel">{children}</div> : null;
      }

      // Usage
      function App() {
        return (
          <Tabs>
            <TabList>
              <Tab index={0}>Tab 1</Tab>
              <Tab index={1}>Tab 2</Tab>
            </TabList>
            <TabPanels>
              <TabPanel index={0}>Content for Tab 1</TabPanel>
              <TabPanel index={1}>Content for Tab 2</TabPanel>
            </TabPanels>
          </Tabs>
        );
      }
      \`\`\`

      ## Conclusion

      These modern React patterns help developers build more maintainable, performant, and scalable applications. By adopting these patterns, you can improve the quality of your code and make your development process more efficient. As React continues to evolve, we can expect to see these patterns refined and new ones emerge.
    `
  },
  {
    id: "typescript-tips",
    title: "10 TypeScript Tips to Boost Your Productivity",
    excerpt: "Discover practical TypeScript tips and tricks that will help you write better code and improve your development workflow.",
    date: "2025-02-28",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    tags: ["TypeScript", "JavaScript", "Programming"],
    featured: true,
    content: `
      # 10 TypeScript Tips to Boost Your Productivity

      TypeScript has become an essential tool for JavaScript developers, providing type safety and improved developer experience. Here are 10 tips to help you get the most out of TypeScript and boost your productivity.

      ## 1. Use Type Inference When Possible

      TypeScript's type inference is powerful. Let the compiler infer types when it's clear what they should be.

      \`\`\`typescript
      // Instead of this:
      const numbers: number[] = [1, 2, 3];
      const user: { name: string; age: number } = { name: 'John', age: 30 };

      // Do this:
      const numbers = [1, 2, 3];
      const user = { name: 'John', age: 30 };
      \`\`\`

      ## 2. Leverage Utility Types

      TypeScript provides several utility types that can help you transform existing types.

      \`\`\`typescript
      interface User {
        id: number;
        name: string;
        email: string;
        password: string;
      }

      // Create a type without the password field
      type UserWithoutPassword = Omit<User, 'password'>;

      // Create a type with only the id and name fields
      type UserBasicInfo = Pick<User, 'id' | 'name'>;

      // Create a type where all fields are optional
      type PartialUser = Partial<User>;

      // Create a type where all fields are required
      type RequiredUser = Required<User>;

      // Create a type where all fields are readonly
      type ReadonlyUser = Readonly<User>;
      \`\`\`

      ## 3. Use Discriminated Unions for State Management

      Discriminated unions are perfect for modeling different states in your application.

      \`\`\`typescript
      type State =
        | { status: 'idle' }
        | { status: 'loading' }
        | { status: 'success'; data: User[] }
        | { status: 'error'; error: Error };

      function renderContent(state: State) {
        switch (state.status) {
          case 'idle':
            return <div>Please search for users</div>;
          case 'loading':
            return <div>Loading...</div>;
          case 'success':
            return <UserList users={state.data} />;
          case 'error':
            return <div>Error: {state.error.message}</div>;
        }
      }
      \`\`\`

      ## 4. Use Template Literal Types

      Template literal types allow you to create types based on string literals.

      \`\`\`typescript
      type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
      type Endpoint = '/users' | '/posts' | '/comments';

      // Creates types like 'GET /users', 'POST /users', etc.
      type ApiRoute = \`\${HttpMethod} \${Endpoint}\`;

      function fetchApi(route: ApiRoute) {
        // Implementation
      }

      fetchApi('GET /users'); // Valid
      fetchApi('PATCH /users'); // Error: Argument of type '"PATCH /users"' is not assignable to parameter of type 'ApiRoute'.
      \`\`\`

      ## 5. Use Type Guards for Runtime Type Checking

      Type guards help you narrow down types at runtime.

      \`\`\`typescript
      interface User {
        id: number;
        name: string;
      }

      interface Admin {
        id: number;
        name: string;
        role: string;
      }

      // Type guard function
      function isAdmin(user: User | Admin): user is Admin {
        return 'role' in user;
      }

      function handleUser(user: User | Admin) {
        if (isAdmin(user)) {
          // TypeScript knows user is Admin here
          console.log(user.role);
        } else {
          // TypeScript knows user is User here
          console.log('Regular user');
        }
      }
      \`\`\`

      ## Conclusion

      These TypeScript tips can significantly improve your productivity and help you write more robust code. By leveraging TypeScript's powerful type system, you can catch errors at compile time rather than runtime, leading to more reliable applications.
    `
  },
  {
    id: "nextjs-performance",
    title: "Optimizing Next.js Applications for Performance",
    excerpt: "Learn how to optimize your Next.js applications for better performance, faster load times, and improved user experience.",
    date: "2025-02-10",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80",
    tags: ["Next.js", "Performance", "Web Development"],
    featured: false,
    content: `
      # Optimizing Next.js Applications for Performance

      Next.js is a powerful React framework that provides many built-in optimizations. However, to achieve the best performance, you need to leverage these features effectively and implement additional optimizations. This guide will help you optimize your Next.js applications for better performance, faster load times, and improved user experience.

      ## 1. Use Server Components Effectively

      React Server Components allow you to render components on the server, reducing the JavaScript sent to the client and improving performance.

      \`\`\`jsx
      // app/page.tsx (Server Component)
      import { getProducts } from '@/lib/api';
      import ProductCard from '@/components/ProductCard';

      export default async function ProductsPage() {
        const products = await getProducts();

        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        );
      }
      \`\`\`

      Only use Client Components when you need interactivity or browser-specific APIs:

      \`\`\`jsx
      // components/AddToCartButton.tsx (Client Component)
      'use client';

      import { useState } from 'react';

      export default function AddToCartButton({ productId }) {
        const [isLoading, setIsLoading] = useState(false);

        const handleAddToCart = async () => {
          setIsLoading(true);
          await addToCart(productId);
          setIsLoading(false);
        };

        return (
          <button
            onClick={handleAddToCart}
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </button>
        );
      }
      \`\`\`

      ## 2. Implement Image Optimization

      Use Next.js's Image component to automatically optimize images, which can significantly improve Core Web Vitals like Largest Contentful Paint (LCP).

      \`\`\`jsx
      import Image from 'next/image';

      export default function ProductImage({ product }) {
        return (
          <div className="relative aspect-square">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={product.featured}
              className="object-cover rounded-lg"
            />
          </div>
        );
      }
      \`\`\`

      ## Conclusion

      Optimizing a Next.js application involves leveraging built-in features like Server Components, Image optimization, and font optimization, while also implementing best practices like code splitting, efficient data fetching, and performance monitoring. By following these strategies, you can create fast, responsive applications that provide an excellent user experience.
    `
  }
];

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    id: post.id
  }));
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
    const post = blogPosts.find(p => p.id === params.id);

  if (!post) {
    notFound();
  }

  return (
    <div className="container py-12 md:py-16 px-4 md:px-6 mx-auto max-w-7xl">
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Link>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground mb-4">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted mb-8">
          <div className="w-full h-full bg-muted/20 object-cover" style={{ backgroundImage: `url('${post.image}')`, backgroundSize: "cover", backgroundPosition: "center", height: "100%" }}></div>
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {post.content.split('\n').map((paragraph, index) => {
            if (paragraph.trim().startsWith('# ')) {
              return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{paragraph.trim().substring(2)}</h1>;
            } else if (paragraph.trim().startsWith('## ')) {
              return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{paragraph.trim().substring(3)}</h2>;
            } else if (paragraph.trim().startsWith('### ')) {
              return <h3 key={index} className="text-xl font-bold mt-6 mb-3">{paragraph.trim().substring(4)}</h3>;
            } else if (paragraph.trim().startsWith('```')) {
              return null; // Skip code block markers
            } else if (paragraph.trim().endsWith('```')) {
              return null; // Skip code block markers
            } else if (paragraph.trim().startsWith('`') && paragraph.trim().endsWith('`')) {
              // Inline code
              return <code key={index} className="bg-muted px-1.5 py-0.5 rounded text-sm">{paragraph.trim().substring(1, paragraph.trim().length - 1)}</code>;
            } else if (paragraph.trim() === '') {
              return null;
            } else {
              return <p key={index} className="mb-4 text-muted-foreground">{paragraph.trim()}</p>;
            }
          })}
        </div>

        <Separator className="my-12" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold">Share this article</h3>
            <div className="flex gap-2 mt-2">
              <Button variant="outline" size="icon">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Button asChild>
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}