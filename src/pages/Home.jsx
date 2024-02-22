import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Landing, Portfolio, Skills, Footer } from "./index";
import { useScrollDirection } from "../utils/scrollDirection";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { Games } from "./Games";

export const Home = ({ device }) => {
  const [index, setIndex] = useState(0);
  const hour = new Date().getHours();
  const [isDarkMode, setDarkMode] = useState(hour < 5 || hour > 18);
  const [sounds] = useState({
    owlSound: new Audio(`audio/owl.mp3`),
    roosterSound: new Audio(`audio/rooster.mp3`),
    nightSound: new Audio(`audio/night.mp3`),
    sunriseSound: new Audio(`audio/sunrise.mp3`),
    switchSound: new Audio(`audio/switch.mp3`),
  });

  const scroll = useScrollDirection();
  const history = useHistory();

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    switchSound.play();
  };

  const onLogoClick = () => {
    document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
  };

  const onChatClick = () => {
    history.push("/contact");
  };

  useEffect(() => {
    setInterval(() => setIndex((state) => state + 1), 2000);
  }, []);

  const { owlSound, roosterSound, nightSound, sunriseSound, switchSound } =
    sounds;
  useEffect(() => {
    nightSound.volume = 0.02;
    sunriseSound.volume = 0.02;
    if (isDarkMode) {
      owlSound.play();
      nightSound.play();
      roosterSound.pause();
      sunriseSound.pause();
    } else {
      roosterSound.play();
      sunriseSound.play();
      owlSound.pause();
      nightSound.pause();
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Mute audio when tab is not active
        nightSound.volume = 0;
        sunriseSound.volume = 0;
      } else {
        // Unmute audio when tab is active
        nightSound.volume = 0.02;
        sunriseSound.volume = 0.02;
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <div style={{ backgroundColor: isDarkMode ? "#181e24" : "#e8f4fc" }}>
      <img
        className="logo"
        style={{
          top: scroll ? "10px" : "-50px",
          transform: scroll && "rotateZ(360deg)",
        }}
        src="assets/logo.png"
        alt="Raghuveer Bharadwaj Portfolio Logo"
        onClick={onLogoClick}
      />
      <div
        className="rotating"
        style={{
          animation: `${isDarkMode ? "zooming" : "rotating"} ${
            isDarkMode ? 2 : 200
          }s linear infinite`,
        }}
      >
        <DarkModeSwitch checked={isDarkMode} onChange={toggleDarkMode} />
      </div>
      <img
        className="chat"
        style={{
          top: scroll ? "10px" : "-50px",
          transform: scroll && "rotateZ(360deg)",
        }}
        src="assets/chat.svg"
        alt="Raghuveer Bharadwaj Portfolio Contact"
        onClick={onChatClick}
      />
      <Landing isScrolled={scroll} index={index} isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Portfolio index={index} isDarkMode={isDarkMode} />
      <Games isDarkMode={isDarkMode} />
      <Footer device={device} />
    </div>
  );
};
