import React from 'react'
import { headerMenus, searchKeyword, snsLink } from '../../data/header'
import { Link, useLocation } from 'react-router-dom'


const Header = () => {

  const location = useLocation();
  console.log(location);

  return (
    <header id='header' role='banner'>
        <h1 className='header__logo'>
            <a href='/'>
                <em aria-hidden='true'></em>
                <span>Youtube</span>
            </a>
        </h1>
        <nav className='header__menu'>
            <ul className='menu'>
              {
                headerMenus.map((menu, key)=>(
                  <li key={key} className={location.pathname === menu.src ? 'active' : ''}>
                    <Link to={menu.src}>
                        {menu.icon}{menu.title}
                    </Link>
                  </li>
                ))}                
            </ul>
            <ul className='keyword'>
              {
                searchKeyword.map((keyword, key)=>(
                  <li key={key} className={location.pathname === keyword.src ? 'active' : ''}>
                    <Link to={keyword.src}>
                        {keyword.title}
                    </Link>
                  </li>
                ))}                
            </ul>
        </nav>
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
    </header>
  )
}


export default Header