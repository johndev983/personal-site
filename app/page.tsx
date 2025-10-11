import { About, Cv, Footer, Navbar, Experiences, SocialLinks, ScrollToTopButton } from '@/components'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center md:px-20 lg:px-20 xl:px-30 2xl:px-60">
        <Cv />
        <SocialLinks />
        <About />
        <Experiences />
      </main>

      <Footer />
      <ScrollToTopButton />
    </>
  );
}
