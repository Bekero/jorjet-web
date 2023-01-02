
import JorjetsLogo from '../assets/imgs/jotjets-logo.png'
import TiktokSvg from '../assets/svgs/tiktok'
import InstagramSvg from '../assets/svgs/instagram'
import FacebookSvg from '../assets/svgs/facebook'
import WhatsappSvg from '../assets/svgs/whatsapp'

export function Contact() {

    return (
        <div className="contact-container">
            <form id="form" class="topBefore">

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
                    <li><a target="_blank" href="https://www.facebook.com/pages/%D7%94%D7%91%D7%99%D7%AA%20%D7%94%D7%9E%D7%AA%D7%95%D7%A7%20%D7%A9%D7%9C%20%D7%9C%D7%99%D7%A8%D7%95%D7%9F%20Jorjet%20Sweets/110021180765462"><FacebookSvg /></a></li>
                    <li><a target="_blank" href="https://wa.me/+972558813232"><WhatsappSvg /></a></li>
                </ul>
                <div className="logo">
                    <img src={JorjetsLogo} alt="" />
                </div>
            </div>
        </div>

    )
}