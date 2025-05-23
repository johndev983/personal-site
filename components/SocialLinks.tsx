import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoMailOpenOutline } from 'react-icons/io5'

const links = [
  {
    href: 'https://github.com/johndev983',
    icon: <IoLogoGithub />,
    subtitle: '/johndev983',
    title: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/john-gil-757545216/',
    icon: <IoLogoLinkedin />,
    subtitle: '/john-gil',
    title: 'LinkedIn'
  },
  {
    href: 'https://mailto:johndev983@gmail.com',
    icon: <IoMailOpenOutline />,
    subtitle: '/johndev983@',
    title: 'Gmail'
  }
]

export const SocialLinks = () => {
  return (
    <div className="p-4 flex flex-wrap items-center justify-center space-y-5 space-x-5 md:space-y-0 md:space-x-30">
      {
        links.map(({ href, icon, subtitle, title }, index) => (
          <Link key={ index } href={ href } target="blank">
            <div className="flex items-center space-x-2 md:space-x-5">
              <span className="text-3xl md:text-4xl">{ icon }</span>
              <div className="grid text-left text-xs md:text-sm font-mono">
                <span>{ title }</span>
                <span>{ subtitle }</span>
              </div>
            </div>
          </Link>
        ))
      }
    </div>
  )
}
