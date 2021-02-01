import './footer.scss'
import {
  FBIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
  WhatsAppIcon
} from '../images/social'
import { useHistory } from 'react-router-dom'

const socialIcons = [
  { url: "https://m.facebook.com/raghu.veer.73", icon: <FBIcon />},
  { url: "https://www.linkedin.com/in/raghuveerbharadwaj/", icon: <LinkedInIcon />},
  { url: "mailto:raghuveer275@gmail.com", icon: <MailIcon />},
  { url: "https://t.me/Cyclopzz", icon: <TelegramIcon />},
  { url: "https://wa.me/+918747899591", icon: <WhatsAppIcon />},
]

export const Footer = () => {
  const history = useHistory()
  return (
    <div className="footer">
      <div className="dark">
        <h2>Got an Idea?</h2>
        <p>Looking for a way take your business online? Let's chat over some chai.<br /> <big>☕</big> </p>
        <button onClick={() => history.push("/contact")}>Let's Begin</button>
      </div>
      <div className="footer-content">
        <img src="assets/logo.png" className="white-logo" />
        <p>Bringing pieces together, one at a time.</p>
        <div className="social">
          {socialIcons.map((social, i) => <a
            key={i}
            rel="noopener"
            target="_blank"
            href={social.url}
            className="social-link"
            >
            {social.icon}
          </a>)}
        </div>
        <h5>Made with <b>❤️</b> by Raghuveer Bharadwaj
        <br />HandCrafted by me © 2021 </h5>
      </div>
    </div>
  )
}
