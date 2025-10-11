import { About, Cv, Footer, Navbar, Experiences, SocialLinks } from '@/components'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex flex-col items-center justify-center md:px-20 lg:px-40 2xl:px-90">
        <Cv />
        <SocialLinks />
        <About />
        <Experiences />
      </main>

      <Footer />
    </>
  );
}
