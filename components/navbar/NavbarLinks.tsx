import Link from 'next/link'
import { useActiveSection } from '@/hooks/useActiveSection'

interface Props {
  section: string;
}

export const NavbarLinks = ({ section }: Props) => {
  
  const sectionIds = ['home', 'about', 'experiences', 'projects']
  const activeSection = useActiveSection(sectionIds)

  const sectionLabels: Record<string, string> = {
    home: 'Inicio',
    about: 'Sobre mí',
    experiences: 'Experiencia',
    projects: 'Proyectos',
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (section === 'home') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      window.history.pushState(null, '', '/');
    }
  }

  return (
    <Link
      href={`#${section}`}
      scroll={true}
      onClick={handleClick}
      className={`block font-bold text-[15px] transition-colors duration-200 ${
        activeSection === section
        ? 'text-primary dark:text-secondary'
        : 'text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-secondary'
      }`}
    >
      { sectionLabels[section]}
    </Link>
  )
}
