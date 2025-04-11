import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { GoogleAnalytics } from './GoogleAnalytics'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
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
      <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}>
        { children }
        <GoogleAnalytics />
      </body>
    </html>
  );
}