import { About, Cv, Footer, Navbar, Projects, SocialLinks } from '@/components'

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#23232A] flex flex-col items-center justify-center text-white md:px-20 lg:px-40 2xl:px-90">
        <Cv />
        <SocialLinks />
        <About />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
