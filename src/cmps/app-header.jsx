import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import JorjetsLogo from '../assets/imgs/jotjets-logo.png'
import TiktokSvg from '../assets/svgs/tiktok'
import InstagramSvg from '../assets/svgs/instagram'
import FacebookSvg from '../assets/svgs/facebook'
import WhatsappSvg from '../assets/svgs/whatsapp'
import MagnifyingGlass from "./svg/magnifying-glass";

export function AppHeader() {

    const navigate = useNavigate();

    const [searchBarOpen, setSearchBarOpen] = useState(null)

    const onActiveHamburger = () => {

        const hamburger = document.querySelector(".hamburger");

        const navLinks = document.querySelector(".nav-links");
        const links = document.querySelectorAll(".nav-links li");

        const navSocialLinks = document.querySelector(".nav-social-links");
        const socialLinks = document.querySelectorAll(".nav-social-links li");

        //Animation
        hamburger.classList.toggle("toggle");

        //Links
        navLinks.classList.toggle("open");
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        navSocialLinks.classList.toggle("open");
        socialLinks.forEach(socialLink => {
            socialLink.classList.toggle("fade");
        });
    }

    const onSearch = (ev) => {
        setSearchBarOpen(!searchBarOpen)
        console.log('searchBarOpen :', searchBarOpen)
    }

    return (
        <nav>
            <div className="logo">
                <NavLink to="/"><img src={JorjetsLogo} alt="" /></NavLink>
            </div>
            <div onClick={() => onActiveHamburger()} className="hamburger">
                <div className="bars1"></div>
                <div className="bars2"></div>
                <div className="bars3"></div>
            </div>
            <ul className="nav-links">
                {/* <input id='search-btn' type='checkbox' />
                    <label for='search-btn'>Show search bar</label>
                    <input id='search-bar' type='text' placeholder='Search...' /> */}
                {/* <li onClick={(ev) => onSearch(ev)} className="magnifying-glass"><MagnifyingGlass />
                    <input className={searchBarOpen ? 'open' : ''} type="text" placeholder="Search.."></input>
                </li> */}
                <li onClick={() => onActiveHamburger()}><NavLink to='/'>צור קשר</NavLink></li>
                <li onClick={() => onActiveHamburger()}><NavLink to='/'>סדנאות</NavLink></li>
                <li onClick={() => onActiveHamburger()} ><NavLink to='/recipe'>מתכונים</NavLink></li>
                <li onClick={() => onActiveHamburger()} ><NavLink to='/'>הסיפור שלי</NavLink></li>
                <li onClick={() => onActiveHamburger()} ><NavLink to='/confectionery'>קונדיטוריה</NavLink></li>
            </ul>
            <ul className="nav-social-links">
                <li><a target="_blank" href="https://www.tiktok.com/@lirongorzat"><TiktokSvg /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/jorjet_sweets/"><InstagramSvg /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/lironscake"><FacebookSvg /></a></li>
                <li>
                    <a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a>
                </li>
            </ul>
        </nav>
    )
}