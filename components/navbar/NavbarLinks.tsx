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

  return (
    <Link
      href={`#${section}`}
      scroll={true}
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
