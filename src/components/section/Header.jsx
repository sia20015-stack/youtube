import React from 'react'

import { IoMdHome } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { FaMusic } from "react-icons/fa6";
import { BiSolidCameraMovie } from "react-icons/bi";
import { FaBookOpen } from "react-icons/fa6";
import { MdMovieFilter } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

import { FaGithub } from "react-icons/fa";
import { IoLogoGoogle } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";


const Header = () => {
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
                <li className='active'>
                    <a href='/'><IoMdHome />홈</a>
                </li>
                <li>
                    <a href='/today'><MdMovieCreation />추천 영상</a>  
                </li>
                <li>
                    <a href='/music'><FaMusic />추천 음악</a>  
                </li>
                <li>
                    <a href='/movie'><BiSolidCameraMovie />추천 영화</a>  
                </li>
                <li>
                    <a href='/book'><FaBookOpen />추천 도서</a>  
                </li>
                <li>
                    <a href='/anime'><MdMovieFilter />추천 애니</a>  
                </li>
                <li>
                    <a href='/youtube'><FaYoutube />유튜브 사이트</a>  
                </li>
            </ul>
            <ul className='keyword'>
                <li>
                    <a href='/search/youtube'>MyYoutube</a>
                </li>
                <li>
                    <a href='/search/html'>HTML</a>
                </li>
                <li>
                    <a href='/search/css'>CSS</a>
                </li>
                <li>
                    <a href='/search/javascript'>JavaScript</a>
                </li>
                <li>
                    <a href='/search/react.js'>React</a>
                </li>
                <li>
                    <a href='/search/java'>JAVA</a>
                </li>
                <li>
                    <a href='/search/oracle'>ORACLE</a>
                </li>
                <li>
                    <a href='/search/spring'>SPRING</a>
                </li>
            </ul>
        </nav>
        <div className='header__sns'>
            <ul>
                <li>
                    <a href='https://github.com'><FaGithub /></a>
                </li>
                <li>
                    <a href='https://youtube.com'><FaYoutube /></a>
                </li>
                <li>
                    <a href='https://google.com'><IoLogoGoogle /></a>
                </li>
                <li>
                    <a href='https://instagram.com'><FaInstagram /></a>
                </li>
            </ul>
        </div>
    </header>
  )
}


export default Header