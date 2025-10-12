import { StaticImageData } from 'next/image'

export interface ExperiencencesInterface {
  company:        string;
  date:           string;
  description:    string[];
  location:       string;
  logo:           StaticImageData;
  secondary?:     Secondary[]
  technologies:   Technology[];
}

interface Secondary {
  date:           string;
  description:    string[];
  technologies?:  Technology[];
}

export interface Technology {
  icon:           StaticImageData;
  text:           string;
}