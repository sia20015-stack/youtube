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

export const headerMenus = [
    {
        title: "홈",
        icon: <IoMdHome />,
        src: "/"
    },
    {
        title: "추천 영상",
        icon: <MdMovieCreation />,
        src: "/today"
    },
    {
        title: "추천 음악",
        icon: <FaMusic />,
        src: "/music"
    },
    {
        title: "추천 영화",
        icon: <BiSolidCameraMovie />,
        src: "/movie"
    },
    {
        title: "추천 도서",
        icon: <FaBookOpen />,
        src: "/book"
    },
    {
        title: "추천 애니",
        icon: <MdMovieFilter />,
        src: "/anime"
    },
    {
        title: "유튜브 사이트",
        icon: <FaYoutube />,
        src: "/youtube"
    }
];

export const searchKeyword = [
    {
        title: "MyYoutube",
        src: "/search/youtube"
    },
    {
        title: "HTML",
        src: "/search/html"
    },
    {
        title: "CSS",
        src: "/search/css"
    },
    {
        title: "JavaScript",
        src: "/search/javascript"
    },
    {
        title: "React",
        src: "/search/react.js"
    },
    {
        title: "JAVA",
        src: "/search/java"
    },
    {
        title: "ORACLE",
        src: "/search/oracle"
    },
    {
        title: "SPRING",
        src: "/search/spring"
    }
];

export const snsLink = [
    {
        icon: <FaGithub />,
        src: "https://github.com"
    },
    {
        icon: <FaYoutube />,
        src: "https://youtube.com"
    },
    {
        icon: <IoLogoGoogle />,
        src: "https://google.com"
    },
    {
        icon: <FaInstagram />,
        src: "https://instagram.com"
    }
];