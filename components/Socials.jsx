'use client'

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,

} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'https://www.youtube.com/@aje_dev',
    name: <RiYoutubeFill />
  },
  {
    path: 'https://github.com/arnaldo16763695',
    name: <RiGithubFill />
  },
  {
    path: 'https://www.linkedin.com/in/arnaldo-espinoza-58915b56',
    name: <RiLinkedinFill />
  },
]
const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`} >
      {
        icons.map((icon, index)=>(
          <Link href={icon.path} key={index}><div className={iconsStyles}>{icon.name}</div></Link>
        ))
      }
    </div>
  )
}

export default Socials