import "./footer.scss";
import {
  GithubIcon,
  LinkedInIcon,
  MailIcon,
  TelegramIcon,
  WhatsAppIcon,
  HeartIcon,
  HeartSmileIcon,
} from "../images/social";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { useTriggerHeart } from "../components/login";
import ConfettiExplosion from "react-confetti-explosion";

const socialIcons = [
  { url: "https://github.com/RaghuveerBharadwaj", icon: <GithubIcon /> },
  {
    url: "https://www.linkedin.com/in/raghuveerbharadwaj/",
    icon: <LinkedInIcon />,
  },
  { url: "mailto:raghuveer275@gmail.com", icon: <MailIcon /> },
  { url: "https://t.me/Cyclopzz", icon: <TelegramIcon /> },
  { url: "https://wa.me/+918747899591", icon: <WhatsAppIcon /> },
];

export const Footer = ({ device }) => {
  const history = useHistory();

  const [heartClick, setHeartClick] = useState(0);
  const { heartCount, updateCount } = useTriggerHeart({ device });

  const clickCheck = heartClick >= 4;
  const pop = [
    new Audio("audio/pop.mp3"),
    new Audio("audio/pop2.mp3"),
    new Audio("audio/pop3.mp3"),
    new Audio("audio/pop4.mp3"),
  ];

  const onClick = () => {
    if (clickCheck) return;
    pop[heartClick].play();
    setHeartClick((prev) => prev + 1);
    updateCount();
  };

  return (
    <div className="footer">
      <div className="dark">
        <h2>Got an Idea?</h2>
        <p>
          Looking for a way to take your business online? Let's chat over some
          chai.
          <br /> <big>☕</big>{" "}
        </p>
        <button onClick={() => history.push("/contact")}>Let's Begin</button>
      </div>
      <div className="footer-content">
        <img alt="Logo" src="assets/logo.png" className="white-logo" />
        <p>Loved my portfolio, shower some love.</p>
        {/* <Heart /> */}
        <div className="heart">
          <div className="wave" style={{ top: `${(3 - heartClick) * 25}%` }} />
          <img alt="Heart" src="assets/heart.svg" onClick={onClick} />
          {clickCheck ? <HeartSmileIcon /> : <HeartIcon />}
          {clickCheck && (
            <div className="confetti">
              <ConfettiExplosion />
            </div>
          )}
        </div>
        <p style={{ margin: "12px auto", fontFamily: "Protest Riot" }}>
          {(heartCount + heartClick).toLocaleString("en-IN")}
        </p>
        <div className="social">
          {socialIcons.map((social, i) => (
            <a
              key={i}
              rel="noopener noreferrer"
              target="_blank"
              href={social.url}
              className="social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <h5>
          HandCrafted with ❤️ by Raghuveer Bharadwaj{" "}
          <span style={{ color: "#000" }}>©</span> 2024
        </h5>
      </div>
    </div>
  );
};
