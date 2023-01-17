
import JorjetsLogo from '../assets/imgs/jotjets-logo.png'
import TiktokSvg from '../assets/svgs/tiktok'
import InstagramSvg from '../assets/svgs/instagram'
import FacebookSvg from '../assets/svgs/facebook'
import WhatsappSvg from '../assets/svgs/whatsapp'
import LironsJLogo from '../assets/imgs/j-logo.png'
export function Contact() {

    return (
        <div id="contact" className="contact-container">
            <img className="j-logo" src={LironsJLogo} alt="" />
            <form id="form" className="topBefore">

                <input id="name" type="text" placeholder="NAME" />
                <input id="email" type="text" placeholder="E-MAIL" />
                <textarea id="message" type="text" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="GO!" />

            </form>
            <div className="left-contact">

                <div className="city"> נס ציונה </div>
                <div className="phone"> 055-881-3232</div>
                <div className="email">jorjetpat@gmail.com</div>
                <ul className="nav-social-links">
                    <li><a target="_blank" href="https://www.tiktok.com/@lirongorzat"><TiktokSvg /></a></li>
                    <li><a target="_blank" href="https://www.instagram.com/jorjet_sweets/"><InstagramSvg /></a></li>
                    <li><a target="_blank" href="https://www.facebook.com/lironscake"><FacebookSvg /></a></li>
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                </ul>
                <div className="logo">
                    <img src={JorjetsLogo} alt="" />
                </div>
            </div>
        </div>

    )
}