'use client'

import { IoSettingsOutline } from 'react-icons/io5'
import { Logo } from './Logo'

export const Navbar = () => {
  const scrollToSection = ( id: string ) => {
    const element = document.getElementById(id);
    if ( element ) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full flex border-b py-4 px-4 sm:px-10 bg-[#E7E8E6] font-sans min-h-[70px] tracking-wide z-50 rounded-b-lg">
        <div className='flex flex-wrap items-center gap-4 w-full'>
          <Logo />

          <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className='lg:flex lg:items-center max-lg:block lg:space-x-8 ml-auto'>
                <li className='max-lg:border-b max-lg:py-3'>
                  <button onClick={ () => scrollToSection('home') } className="hover:text-[#23232A] text-[#23232A] block font-bold text-[15px]">Home</button>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <button onClick={ () => scrollToSection('about') } className="hover:text-[#23232A] text-gray-400 block font-bold text-[15px]">About</button>
                </li>
                <li className='max-lg:border-b max-lg:py-3'>
                  <button onClick={ () => scrollToSection('experiences') } className="hover:text-[#23232A] text-gray-400 block font-bold text-[15px]">Experiences</button>
                </li>

                <li className='max-lg:border-b max-lg:py-3 max-lg:mt-2'>
                  <div className="relative flex items-center ml-2 lg:ml-4">
                    <button className="flex items-center justify-center w-12 h-12 text-base font-medium leading-normal text-center align-middle transition-colors duration-150 ease-in-out bg-transparent border border-solid shadow-none cursor-pointer rounded-2xl text-stone-500 border-stone-200 hover:text-primary active:text-primary focus:text-primary">
                      <IoSettingsOutline className="text-2xl" />
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="h-[70px]"></div>
    </>
  )
}
