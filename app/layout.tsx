import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { GoogleAnalytics } from './GoogleAnalytics'
import "./globals.css";

import { ThemeProvider } from './providers/ThemeProvider';

// Fuente principal: Geist
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

// Fuente secundaria: Geist Mono
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

// Fuente secundaria: Poppins
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "John Gil",
  description: "John Gil es un desarrollador full stack con experiencia en React, Next.js, Node.js y NestJS. Apasionado por crear soluciones innovadoras y mejorar la experiencia del usuario.",
  keywords: ['Desarrollador Full Stack', 'React', 'Next.js', 'Node.js', 'NestJS', 'Ingeniería de Software', 'Desarrollo Web', 'Desarrollo Móvil'],
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} bg-background text-text dark:bg-dark-background dark:text-dark-text`}>
        <ThemeProvider>
          {children}
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}