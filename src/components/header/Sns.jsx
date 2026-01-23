import React from 'react'
import { snsLink } from '../../data/header'

const Sns = () => {
  return (
    <div className='header__sns'>
        <ul>
            {
            snsLink.map((sns, key)=>(
                <li key={key}>
                <a href={sns.src} target='_blank'></a>
                    <span>{sns.icon}</span>               
                </li>
            ))
            }               
        </ul>
    </div>
  )
}

export default Sns