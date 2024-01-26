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
    setInterval(() => setIndex((state) => state + 1), 10000);
  }, []);

  return (
    <div style={{ backgroundColor: isDarkMode ? "slategrey" : "#e8f4fc" }}>
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
      <DarkModeSwitch
        style={{
          position: "absolute",
          zIndex: 20,
          top: 15,
          left: "calc(50% -  30px)",
        }}
        checked={isDarkMode}
        onChange={toggleDarkMode}
      />
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
      <Portfolio index={index} />
      <Footer />
    </div>
  );
};
