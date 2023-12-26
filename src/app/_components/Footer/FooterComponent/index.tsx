'use client'

import React from 'react'
import classes from './index.module.scss'
import { Gutter } from '../../Gutter'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Footer } from '../../../../payload/payload-types'

const FooterComponent = ({footer}: {footer:Footer}) => {
  const pathname = usePathname()

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? classes.hide : ''}>
      <Gutter>
        <ul className={classes.inculsions}>
          {inclusions.map((inclusions)=>(
            <li key={inclusions.title}>
              <Image 
                src={inclusions.icon}
                alt={inclusions.title}
                width={36}
                height={36}
                className={classes.icon}
              />

              <h5 className={classes.title}>{inclusions.title}</h5>
              <p>{inclusions.description}</p>
            </li>
          ))}
        </ul>
      </Gutter>
      
      <div className={classes.footer}>
        <Gutter>
          <div className={classes.wrap}>
            <Link href='/'>
              <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
            </Link>

            <p>{footer.copyright}</p>
          </div>
        </Gutter>
      </div>
    </footer>
  )
}

export default FooterComponent