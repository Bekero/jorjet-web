import { NavLink, useNavigate } from "react-router-dom";

import JorjetsLogo from '../assets/imgs/jotjets-logo.png'
import TiktokSvg from '../assets/svgs/tiktok'
import InstagramSvg from '../assets/svgs/instagram'
import FacebookSvg from '../assets/svgs/facebook'
import WhatsappSvg from '../assets/svgs/whatsapp'

export function AppHeader() {

    const navigate = useNavigate();

    const navigateUser = (wantedPage) => {
        navigate(`/${wantedPage}`)
    }

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
                <NavLink to="/"><img src={JorjetsLogo} alt="" /></NavLink>
            </div>
            <div onClick={() => onActiveHamburger()} className="hamburger">
                <div className="bars1"></div>
                <div className="bars2"></div>
                <div className="bars3"></div>
            </div>
            <ul className="nav-links">
                <li><NavLink to='/'>צור קשר</NavLink></li>
                <li><NavLink to='/recipe'>מתכונים</NavLink></li>
                <li><NavLink to='/'>הסיפור שלי</NavLink></li>
                <li><NavLink to='/cases'>מארזים</NavLink></li>
                <li><NavLink to='/confectionery'>קונדיטוריה</NavLink></li>
            </ul>
            <ul className="nav-social-links">
                <li><a target="_blank" href="https://www.tiktok.com/@lirongorzat"><TiktokSvg /></a></li>
                <li><a target="_blank" href="https://www.instagram.com/jorjet_sweets/"><InstagramSvg /></a></li>
                <li><a target="_blank" href="https://www.facebook.com/pages/%D7%94%D7%91%D7%99%D7%AA%20%D7%94%D7%9E%D7%AA%D7%95%D7%A7%20%D7%A9%D7%9C%20%D7%9C%D7%99%D7%A8%D7%95%D7%9F%20Jorjet%20Sweets/110021180765462"><FacebookSvg /></a></li>
                <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
            </ul>
        </nav>
    )
}