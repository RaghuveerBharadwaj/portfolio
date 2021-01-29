import './skills.scss'

export const Skills = () => {
  return (
    <div className="skills">
      <div className="skill design">
        <img src="assets/images/skills/design.svg" title="Design" alt="Portfolio Design Icon" />
        <div className="skill-title">
          <h2>Designer</h2>
          <p>
            I respect simple layout, patterns of clean nature, beautiful animations and insightful interactions.
          </p>
        </div>
        <div className="skill-title">
          <h5>
            I enjoy designing :
          </h5>
          <p>
            UX, UI, Web, Mobile, Apps, Logos
          </p>
        </div>
        <div className="skill-title">
          <h5>
            Design Tools:
          </h5>
          <p>
            Figma <br />
            Invision <br />
            Canva <br />
            Crello <br />
            Pen & Paper
          </p>
        </div>
      </div>
      <div className="skill frontend">
        <img src="assets/images/skills/frontend.svg" alt="Portfolio Design Icon" />
        <div className="skill-title">
          <h2>Front-end Developer</h2>
          <p>
            I relish coding things from scratch and yearn bringing conceptions to reality in the browser.
          </p>
        </div>
        <div className="skill-title">
          <h5>
            Languages I speak :
          </h5>
          <p>
            HTML, CSS, Sass, Javascript
          </p>
        </div>
        <div className="skill-title">
          <h5>
            Front-end Tools :
          </h5>
          <p>
            React <br />
            Redux <br />
            Vue Js<br />
            Next Js<br />
            React-Native <br />
            Matter Js<br />
            Tailwind <br />
            Bootstrap <br />
            Bulma <br />
          </p>
        </div>

      </div>
      <div className="skill backend">
        <img src="assets/images/skills/backend.svg" alt="Portfolio Design Icon" />
        <div className="skill-title">
          <h2>Back-end Developer</h2>
          <p>
            Readable, reusable and reliable coding is my mantra. I thrive on delivering optimized results.
          </p>
        </div>
        <div className="skill-title">
          <h5>
            Frameworks I use :
          </h5>
          <p>
            Node Js, Express, MongoDB
          </p>
        </div>
        <div className="skill-title">
          <h5>
            Back-end Tools :
          </h5>
          <p>
            AWS <br />
            Postgres <br />
            MySQL <br />
            Atlas <br />
            Github <br />
          </p>
        </div>

      </div>
    </div>
  )
}
