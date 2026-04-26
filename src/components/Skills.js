import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              {/* TITLE */}
              <h2>Skills</h2>

              {/* DESCRIPTION */}
              <p>
                Full-Stack Developer specialized in modern web and mobile
                applications. Experienced with React.js, React Native, Node.js
                and MongoDB, focused on building scalable and clean UI/UX
                systems.
              </p>

              {/* CAROUSEL */}
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="React JS" />
                  <h5>React.js Development</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="React Native" />
                  <h5>React Native Mobile Apps</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Node JS" />
                  <h5>Node.js Backend</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="MongoDB" />
                  <h5>MongoDB Database</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="API" />
                  <h5>REST API Integration</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Frontend" />
                  <h5>HTML / CSS / JavaScript</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="UI UX" />
                  <h5>Modern UI / UX Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* BACKGROUND IMAGE */}
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
