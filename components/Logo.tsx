'use client'

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export const Logo = ({ text = 'dev' }: { text?: string }) => {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      animate('.dev-animate', {
        y: [
          { to: '-2.75rem', ease: 'outExpo', duration: 600 },
          { to: 0, ease: 'outBounce', duration: 800, delay: 100 }
        ],
        // Property specific parameters
        rotate: {
          from: '-1turn',
          delay: 0
        },
        delay: (_, i) => i * 50, // Function based value
        ease: 'inOutCirc',
        loopDelay: 1000,
        loop: false
      });
    }
  }, [ text ]);

  // Función para envolver cada letra en un <span>
  const wrapLetters = (str: string) => {
    return str.split('').map((char, index) => (
      <span className="dev-animate" key={ index }>{ char }</span>
    ));
  };

  return (
    <div ref={ textRef } className="flex items-center text-xl md:text-2xl font-bold text-text font-mono">
      <span className="text-text">&#60;</span>John.<span className="text-primary inline-flex">{ wrapLetters( text ) }&nbsp;&#47;&#62;</span>
    </div>
  );
}