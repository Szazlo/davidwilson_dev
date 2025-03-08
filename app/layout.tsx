import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import Providers from '@/components/providers/posthog-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: 'Professional software developer portfolio showcasing projects, skills, and experience',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Providers>
              <div className="flex min-h-screen flex-col">
                <Navbar />
                <main className="flex-1 w-full">{children}</main>
                <Footer />
              </div>
            </Providers>
          </ThemeProvider>
      </body>
    </html>
  );
}