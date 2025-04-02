import Link from 'next/link'
import { IoLogoGithub, IoLogoLinkedin, IoLogoWhatsapp } from 'react-icons/io5'

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
    href: 'https://wa.me/573202010757',
    icon: <IoLogoWhatsapp />,
    subtitle: '320-201-0757',
    title: 'Whatsapp'
  }
]

export const SocialLinks = () => {
  return (
    <div className="p-4 flex items-center justify-center space-x-30">
      {
        links.map(({ href, icon, subtitle, title }, index) => (
          <Link key={ index } href={ href } target="blank">
            <div className="flex items-center space-x-5">
              <span className="text-4xl">{ icon }</span>
              <div className="grid text-left text-sm font-mono">
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
