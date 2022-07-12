import './portfolio.scss'

const images = [
  { number: 6, content: "Pranaa - A Thai Food Delivery App", location: "Pranaa/pranaa" },
  { number: 5, content: "BillMe - One Bill, Infinite Possibilities", location: "BillMe/billme" },
  { number: 3, content: "Dovemed Physician Blog", location: "Dovemed/dovemed" },
  { number: 2, content: "Impedfin - A Finance solution for all your needs", location: "Imped/impedfin" },
  { number: 2, content: "Octacon - Consultation & Construction", location: "Octacon/octacon" },
  { number: 4, content: "SK Steel Industries - A Furniture Company", location: "SKSteels/sksteels" },
]

export const Portfolio = ({ index }) => {
  return (
    <div className="portfolio">
      <h1>Some of my Works</h1>
      <h4>Here are a few projects that I've worked on recently.</h4>
      <div className="projects">
        {images.map((image, i) => <div key={image.location} className="project">
          {[...new Array(image.number)].map((a, i) =>
          <img
            className="d-none"
            key={i}
            src={`assets/images/projects/${image.location + (i + 1)}.jpeg`}
            alt={"Raghuveer Bharadwaj | Projects | Desktop " + i}
          />)}
          {[...new Array(image.number)].map((a, i) =>
          <img
            className="d-none"
            key={i}
            src={`assets/images/projects/${image.location + '-mobile' + (i + 1)}.jpeg`}
            alt={"Raghuveer Bharadwaj | Projects | Desktop " + i}
          />)}
          
          <div style={{ backgroundImage: `url(assets/images/projects/${image.location + ((index % image.number) + 1)}.jpeg)` }} className="websites" />
          <div className="desktop">
          </div>
          <div style={{ backgroundImage: `url(assets/images/projects/${image.location + '-mobile' + ((index % image.number) + 1)}.jpeg)` }} className="apps" />
          <div className="mobile" />
          <h3>{image.content}</h3>
        </div>)}
        <div className="project" />
      </div>
    </div>
  )
}
