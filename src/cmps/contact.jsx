
import JorjetsLogo from '../assets/imgs/jotjets-logo.png'
import TiktokSvg from '../assets/svgs/tiktok'
import InstagramSvg from '../assets/svgs/instagram'
import FacebookSvg from '../assets/svgs/facebook'
import WhatsappSvg from '../assets/svgs/whatsapp'
import LironsJLogo from '../assets/imgs/j-logo.png'
import emailjs from 'emailjs-com';
import { useRef } from 'react';

export function Contact({ scrollUpRef }) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const emailJsServiceId = 'service_x5juzbo'
        const emailJsTemplateId = 'template_70fypu8'
        const emailJsUserId = 'YPP9LroCL5v68Hgv1'

        // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        emailjs.sendForm(emailJsServiceId, emailJsTemplateId, form.current, emailJsUserId)
            .then((result) => {
                console.log(result.text);
                resetForm()
            }, (error) => {
                console.log(error.text);
            });
    };

    const resetForm = () => {
        const element = document.getElementById('xxxx');
        element.scrollIntoView()
        window.location.reload(false);
        //Pop up Massage
    }

    return (
        <div id="contact" className="contact-container">
            <img className="j-logo" src={LironsJLogo} alt="" />
            {/* <form ref={form} onSubmit={sendEmail} id="form" className="topBefore">
                <input id="name" type="user_name" placeholder="NAME" required />
                <input id="email" type="email" name="user_email" placeholder="E-MAIL" required />
                <textarea id="message" type="massage" name="massage" placeholder="MESSAGE"></textarea>
                <input id="submit" type="submit" value="GO!" />
            </form> */}
            <form id="form" className="topBefore" ref={form} onSubmit={sendEmail}>
                <input id="name" type="text" name="user_name" placeholder="NAME" required />
                <input id="email" type="email" name="user_email" placeholder="E-MAIL" required />
                <textarea id="message" name="message" placeholder="MESSAGE" />
                <input id="submit" type="submit" value="Send" />
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