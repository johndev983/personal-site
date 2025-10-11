import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { Logo } from './Logo'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex flex-col bg-surface rounded-t-lg">
      <div className="w-full draggable">
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col items-center w-full my-20">
            <Logo />
        
            <div className="flex flex-col items-center gap-6 my-8">
              <div className="flex items-center gap-8">
                <Link href="https://x.com/Jhongil983?t=7r8VCGd12Ukp9ReeIn102A&s=09">
                  <IoLogoTwitter fill="gray" className="text-2xl" />
                </Link>
                
                <Link href="https://github.com/johndev983" target="blank">
                  <IoLogoGithub fill="gray" className="text-2xl" />
                </Link>
                
                <Link href="https://www.linkedin.com/in/john-gil-757545216/" target="blank">
                  <IoLogoLinkedin fill="gray" className="text-2xl" />
                </Link>
                
                <Link href="https://www.instagram.com/jhong_il15?igsh=a3RjZmFtd2xqOW9x">
                  <IoLogoInstagram fill='gray' className='text-2xl' />
                </Link>
              </div>
            </div>
        
            <div className="flex items-center">
              <p className="text-sm font-normal leading-7 text-center text-text">2025 © All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}