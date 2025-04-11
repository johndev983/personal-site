'use client'

import { useState } from 'react';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
import { experiences } from '@/helpers';
import { ExperiencencesInterface } from '@/interfaces/';
import Image from 'next/image';

export const Experiences = () => {
  const [ data ] = useState<ExperiencencesInterface[]>( experiences )

  return (
    <div className="p-4 text-white text-left mt-60 2xl:mt-80 mb-30 w-full" id="experiences">
      <h2 className="text-gray-500 text-lg md:text-xl font-semibold">Acerca de mis projectos y experiencias.</h2>
      <h2 className="font-bold text-3xl md:text-4xl mb-15">EXPERIENCES</h2>
      
      {
        data.map(({ company, date, description, location, technologies }, index) => (
          <div key={ index } className="pt-8">
            <div className="pb-6">
              <h2 className="text-2xl font-bold mb-1">{ company }</h2>
              <div className="flex items-center mb-4 text-gray-500">
                <span className="mr-2"></span>
                <span className="flex items-center text-sm gap-2"><IoCalendarOutline /> { date }</span>
                <span className="mx-2">|</span>
                <span className="flex items-center text-sm gap-2"><IoLocationOutline /> { location }</span>
              </div>
              
              <div className="inline-flex flex-wrap items-center gap-3 group">
                {
                  technologies.map(({ icon }, index) => (
                    <span
                      key={ index }
                      className="cursor-pointer rounded-full border border-gray-900/5 bg-[#4E2780]/30 p-2.5 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-[#4E2780]/50 hover:!opacity-100 group-hover:opacity-70"
                    >
                      <Image
                        className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                        src={ icon }
                        alt="Picture of the author"
                      />
                    </span>
                  ))
                }
              </div>
            </div>

            { description.map((desc, index) => <p key={ index } className="text-sm md:text-base mb-6">{ desc }</p>) }

            <hr key={ index + '-hr' } className="border-t-2 border-[#4E2780]/20 my-6" />
          </div>
        ))
      }
    </div>
  );
}
