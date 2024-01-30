import "./portfolio.scss";

const images = [
  {
    number: 6,
    content: "Pranaa - A Thai Food Delivery App",
    location: "Pranaa/pranaa",
    link: "https://www.pranaafood.com",
  },
  {
    number: 5,
    content: "BillMe - One Bill, Infinite Possibilities",
    location: "BillMe/billme",
    link: "https://billme.io",
  },
  {
    number: 3,
    content: "Markey - A Digital Marketing App",
    location: "Markey/markey",
    link: "https://www.markey.ai",
  },
  {
    number: 3,
    content: "Dash - A Dashboard Creator",
    location: "Dash/dash",
    link: "https://hrblock.gale.technology/dash",
  },
  {
    number: 3,
    content: "Dovemed Physician Blog",
    location: "Dovemed/dovemed",
    link: "https://www.dovemed.com",
  },
  {
    number: 2,
    content: "Impedfin - A Finance solution for all your needs",
    location: "Imped/impedfin",
    link: "#",
  },
  {
    number: 2,
    content: "Octacon - Consultation & Construction",
    location: "Octacon/octacon",
    link: "https://octaconstruct.com",
  },
  {
    number: 4,
    content: "SK Steel Industries - A Furniture Company",
    location: "SKSteels/sksteels",
    link: "#",
  },
  {
    number: 3,
    content: "NetSpiders - A Digital Marketing Agency",
    location: "NetSpiders/netspiders",
    link: "https://netspiders.vercel.app",
  },
];

export const Portfolio = ({ index, isDarkMode }) => {
  return (
    <div className="portfolio">
      <h1 style={{ color: isDarkMode && "#FFF" }}>Some of my Works</h1>
      <h4>Here are a few projects that I've worked on recently.</h4>
      <div className="projects">
        {images.map((image, i) => (
          <a
            href={image?.link}
            target="__blank"
            key={image.location}
            className="project"
          >
            {[...new Array(image.number)].map((a, i) => (
              <img
                className="d-none"
                key={i}
                src={`assets/images/projects/${image.location + (i + 1)}.jpeg`}
                alt={"Raghuveer Bharadwaj | Projects | Desktop " + i}
              />
            ))}
            {[...new Array(image.number)].map((a, i) => (
              <img
                className="d-none"
                key={i}
                src={`assets/images/projects/${
                  image.location + "-mobile" + (i + 1)
                }.jpeg`}
                alt={"Raghuveer Bharadwaj | Projects | Desktop " + i}
              />
            ))}

            <div
              style={{
                backgroundImage: `url(assets/images/projects/${
                  image.location + ((index % image.number) + 1)
                }.jpeg)`,
              }}
              className="websites"
            />
            <div className="desktop"></div>
            <div
              style={{
                backgroundImage: `url(assets/images/projects/${
                  image.location + "-mobile" + ((index % image.number) + 1)
                }.jpeg)`,
              }}
              className="apps"
            />
            <div className="mobile" />
            <h3>{image.content}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};
