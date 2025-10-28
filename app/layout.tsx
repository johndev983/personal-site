import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'
import "./globals.css";

import { ThemeProvider } from './providers/ThemeProvider';
import { ChatLive, GoogleAnalytics, TagManager } from './scripts'

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
      <head>
        <TagManager />
        <ChatLive />
      </head>

      <body className="antialiased">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PQV423S8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

        <GoogleAnalytics />

        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}