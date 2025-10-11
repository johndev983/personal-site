'use client'

import { saveAs } from 'file-saver'
import { IoCloudDownloadOutline } from 'react-icons/io5'

export const Cv = () => {
  const cvUrl = '/cv.pdf'

  const downloadCV = () => {
    saveAs(cvUrl, 'JohnGil_CV.pdf')
  }

  return (
    <div className="my-40 2xl:my-60 text-center" id="home">
      <h1 className="text-gray-400 text-2xl md:text-3xl font-mono mb-6">Hello World 👋</h1>
      <h2 className="text-gray-500 text-2xl md:text-4xl font-semibold mb-2">Soy John Gil</h2>
      <h2 className="font-bold text-3xl md:text-5xl mb-5">DESARROLLADOR FULL STACK</h2>

      <button
        className="bg-secondary text-text relative transition-all text-xs border border-border-color hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] rounded-2xl cursor-pointer"
        onClick={ downloadCV }
        type="button"
      >
        <div className="flex items-center justify-center font-sans font-bold text-center uppercase py-3 px-6">
          <IoCloudDownloadOutline className="w-4 h-4 mr-2" /> Download CV
        </div>
      </button>
    </div>
  )
}
