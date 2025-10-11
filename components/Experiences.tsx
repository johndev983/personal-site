'use client'

import { useState } from 'react';
import { IoCalendarOutline, IoLocationOutline } from 'react-icons/io5';
import { experiences } from '@/helpers';
import { ExperiencencesInterface } from '@/interfaces/';
import Image from 'next/image';

export const Experiences = () => {
  const [ data ] = useState<ExperiencencesInterface[]>( experiences )

  return (
    <div className="2xl:mt-40" id="experiences">
      <div className="p-4 text-left mt-60 2xl:mt-40 mb-30 w-full">
        <h2 className="font-bold text-xl md:text-4xl">Experiencia profesional</h2>
        <h2 className="text-gray-400 text-sm md:text-lg font-semibold mb-15">Empresas, tecnologías y logros clave.</h2>
        
        {
          data.map(({ company, date, description, location, technologies }, index) => (
            <div key={ index } className="pt-8">
              <div className="pb-6">
                <h2 className="text-base md:text-2xl font-bold mb-1">{ company }</h2>
                <div className="flex items-center mb-4 text-xs md:text-sm text-text/60">
                  <span className="mr-2"></span>
                  <span className="flex items-center gap-2"><IoCalendarOutline /> { date }</span>
                  <span className="mx-2">|</span>
                  <span className="flex items-center gap-2"><IoLocationOutline /> { location }</span>
                </div>
                
                <div className="inline-flex flex-wrap items-center gap-3 group">
                  {
                    technologies.map(({ icon, text }, index) => (
                      <span
                        key={ index }
                        className="cursor-pointer rounded-2xl border border-border-color/60 bg-surface p-2.5 transition-colors hover:border-secondary hover:bg-secondary hover:!opacity-100 group-hover:opacity-70"
                      >
                        <Image
                          className="w-[20px] h-[20px] md:w-[30px] md:h-[30px]"
                          src={ icon }
                          alt={`${ text } icon`}
                        />
                      </span>
                    ))
                  }
                </div>
              </div>

              { description.map((desc, index) => <p key={ index } className="text-sm md:text-base mb-6">{ desc }</p>) }

              {
                index === data.length - 1
                  ? null
                  :<hr key={ index + '-hr' } className="border-t-2 border-border-color/60 my-6" />
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}
