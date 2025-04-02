import { IoLogoGithub, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5'
import { Logo } from './Logo'
import Link from 'next/link'

export const Footer = () => {
  return (
    <div className="flex flex-col bg-[#E7E8E6] rounded-t-lg">
      <div className="w-full draggable">
        <div className="container flex flex-col mx-auto">
          <div className="flex flex-col items-center w-full my-20">
            <Logo />
        
            <div className="flex flex-col items-center gap-6 my-8">
              <div className="flex items-center gap-8">
                <Link href="">
                  <IoLogoTwitter fill="gray" className="text-2xl" />
                </Link>
                
                <Link href="https://github.com/johndev983" target="blank">
                  <IoLogoGithub fill="gray" className="text-2xl" />
                </Link>
                
                <Link href="https://www.linkedin.com/in/john-gil-757545216/" target="blank">
                  <IoLogoLinkedin fill="gray" className="text-2xl" />
                </Link>
                
                <Link href="">
                  <IoLogoInstagram fill='gray' className='text-2xl' />
                </Link>
              </div>
            </div>
        
            <div className="flex items-center">
              <p className="text-sm font-normal leading-7 text-center text-[#23232A]">2025 © All rights reserved. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}