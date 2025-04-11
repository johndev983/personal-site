'use client'

import { useRef, useEffect } from 'react'
import Image from 'next/image'
import { animate } from 'animejs'
import { skills } from '@/helpers'

export const Skills = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    animate('.carousel-item', {
      translateX: ['200%', '-200%'],
      duration: 50000, // Duración de la animación en milisegundos
      loop: true,
      alternate: true,
      easing: 'linear',
    });
  }, []);

  return (
    <div className="pt-4">
      <div ref={ carouselRef } className="absolute left-0 flex overflow-hidden w-full">
        {
          skills.map(({ icon, text }, index) => (
            <div key={ index } className="carousel-item flex-shrink-0 w-30 md:w-60 flex items-center justify-center">
              <Image
                className="object-contain mr-4"
                src={ icon }
                alt={` ${ text } Icon`}
                width={ 45 }
                height={ 15 }
              />
              <span className="text-xl font-semibold text-gray-500 hidden md:block">{ text }</span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

