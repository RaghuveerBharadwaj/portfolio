import { Landing, Portfolio, Skills, Footer } from "./index";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useScrollDirection } from "../utils/scrollDirection";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

export const Home = () => {
  const [index, setIndex] = useState(0);
  const hour = new Date().getHours();
  const [isDarkMode, setDarkMode] = useState(hour < 5 || hour > 19);

  const scroll = useScrollDirection();
  const history = useHistory();

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
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

  const owlSound = new Audio(`audio/owl.mp3`);
  const roosterSound = new Audio(`audio/rooster.mp3`);
  const nightSound = new Audio(`audio/night.mp3`);
  const sunriseSound = new Audio(`audio/sunrise.mp3`);
  const switchSound = new Audio(`audio/switch.mp3`);
  useEffect(() => {
    switchSound.play();
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
      <Landing index={index} isDarkMode={isDarkMode} />
      <Skills isDarkMode={isDarkMode} />
      <Portfolio index={index} isDarkMode={isDarkMode} />
      <Footer />
    </div>
  );
};
