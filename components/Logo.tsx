import Image from 'next/image'
import logoImage from '../assets/logo.png'

interface Props {
  height?: number;
  width?:  number;
}

export const Logo = ({ height = 35, width = 200 }: Props) => {
  return (
    <Image
      className={`ml-1 w-7 h-7 md:ml-3`}
      src={ logoImage }
      alt="Picture of the author"
      style={{ width, height }}
    />
  )
}
