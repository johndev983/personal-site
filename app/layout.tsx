import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import { GoogleAnalytics } from './GoogleAnalytics'
import "./globals.css";

import { ThemeProvider } from './providers/ThemeProvider';
import { seo } from '@/helpers';

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

export const metadata: Metadata = seo;

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider>
          {children}
          <GoogleAnalytics />
        </ThemeProvider>
      </body>
    </html>
  )
}