'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,

} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    label: 'YouTube',
    path: 'https://www.youtube.com/@aje_dev',
    name: <RiYoutubeFill />
  },
  {
    label: 'GitHub',
    path: 'https://github.com/arnaldo16763695',
    name: <RiGithubFill />
  },
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/arnaldo-espinoza-58915b56',
    name: <RiLinkedinFill />
  },
]
const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`} >
      {
        icons.map((icon, index)=>(
          <Link href={icon.path} key={index} target='_blank' rel='noopener noreferrer' aria-label={icon.label}><div className={iconsStyles}>{icon.name}</div></Link>
        ))
      }
    </div>
  )
}

export default Socials