import { NavLink } from "react-router-dom";

import JorjetsLogo from '../assets/jotjets-logo.png'
import TiktokSvg from '../assets/tiktok'
import InstagramSvg from '../assets/instagram'
import FacebookSvg from '../assets/facebook'
import WhatsappSvg from '../assets/whatsapp'

export function AppHeader() {


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

    return (
        <nav>
            <div className="logo">
                <img src={JorjetsLogo} alt="" />
            </div>
            <div onClick={() => onActiveHamburger()} className="hamburger">
                <div className="bars1"></div>
                <div className="bars2"></div>
                <div className="bars3"></div>
            </div>
            <ul className="nav-links">
                <li><a href="#">צור קשר</a></li>
                <li><a href="#">מתכונים</a></li>
                <li><a href="#">הסיפור שלי</a></li>
                <li><a href="#">מארזים</a></li>
                <li><a href="#">קונדיטוריה</a></li>
            </ul>
            <ul className="nav-social-links">
                <li><TiktokSvg /></li>
                <li><InstagramSvg /></li>
                <li><FacebookSvg /></li>
                <li><WhatsappSvg /></li>
            </ul>
        </nav>
    )
}