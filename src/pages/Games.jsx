import "./games.scss";

const images = [
  "Break-Out",
  "DropBall",
  "flappy",
  "Pong",
  "KickIt",
  "TicTacToe",
];

export const Games = ({ isDarkMode }) => {
  return (
    <div className="games">
      <h1 style={{ color: isDarkMode && "#FFF" }}>My Pet Projects</h1>
      <h4>Here are a few games that I've made for fun.</h4>

      <div className="game-grid">
        {images.map((game, i) => (
          <a
            key={game}
            className={`game${i + 1}`}
            target="__blank"
            href={`https://raghuveerbharadwaj.github.io/${game}`}
          >
            <img
              src={`assets/images/games/${game}.gif`}
              alt={`Raghuveer Bharadwaj | ${game} `}
            />
            <span>
              <h3>{game}</h3>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};
