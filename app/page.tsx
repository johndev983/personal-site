import { About, Cv, Footer, Navbar, Experiences, SocialLinks } from '@/components'

export default function Home() {
  {/*<main className="bg-[#23232A] flex flex-col items-center justify-center text-white md:px-20 lg:px-40 2xl:px-90">*/}
  return (
    <>
      <Navbar />

      <main className="bg-background text-text dark:bg-dark-background dark:text-dark-text flex flex-col items-center justify-center md:px-20 lg:px-40 2xl:px-90">
        <Cv />
        <SocialLinks />
        <About />
        <Experiences />
      </main>

      <Footer />
    </>
  );
}
