'use client'

import { Logo } from '../Logo'
import { NavbarLinks } from './NavbarLinks'
import { ThemeToggleButton } from './ThemeToggleButton'

export const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full flex border-b py-4 px-4 sm:px-10 font-sans min-h-[70px] tracking-wide z-50 rounded-b-lg bg-background dark:bg-dark-background border-border-light dark:border-border-dark">
        <div className="flex flex-wrap items-center gap-4 w-full">
          <Logo />

          <div className="lg:!flex lg:flex-auto lg:ml-12 max-lg:hidden max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <div className="lg:!flex lg:flex-auto max-lg:fixed max-lg:bg-white dark:max-lg:bg-dark-background max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <ul className="lg:flex lg:items-center max-lg:block lg:space-x-8 ml-auto">
                {['home', 'about', 'experiences', 'projects'].map((section) => (
                  <li key={section} className="max-lg:border-b max-lg:py-3">
                    <NavbarLinks section={ section } />
                  </li>
                ))}

                <li className="max-lg:border-b max-lg:py-3 max-lg:mt-2">
                  <div className="relative flex items-center ml-2 lg:ml-4">
                    <ThemeToggleButton />
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