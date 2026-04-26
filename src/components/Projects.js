import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/demande en attentes.png";
import projImg2 from "../assets/img/mode driver screen.png";
import projImg3 from "../assets/img/ScreenHome1.png";
import projImg4 from "../assets/img/Visualisation.png";
import projImg5 from "../assets/img/userList.png";
import projImg6 from "../assets/img/EditCompany.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  // Mobile React Native
  const mobileProjects = [
    {
      title: "React Native App",
      description: "Mobile UI Screen 1",
      imgUrl: projImg1,
    },
    {
      title: "React Native App",
      description: "Mobile UI Screen 2",
      imgUrl: projImg2,
    },
    {
      title: "React Native App",
      description: "Mobile UI Screen 3",
      imgUrl: projImg3,
    },
  ];

  // Dashboards React JS
  const webProjects = [
    {
      title: "Admin Dashboard",
      description: "React JS Dashboard UI",
      imgUrl: projImg4,
    },
    {
      title: "Analytics Dashboard",
      description: "React JS Charts & UI",
      imgUrl: projImg5,
    },
    {
      title: "Towing Service Platform",
      description: "Automobile service management system",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Projects</h2>

                  <p>
                    Full-stack developer specialized in React JS, React Native
                    and Node.js. Here are some of my mobile apps and web
                    dashboards.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="mobile">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center">
                      <Nav.Item>
                        <Nav.Link eventKey="mobile">Mobile Apps</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="web">Web Dashboards</Nav.Link>
                      </Nav.Item>

                      <Nav.Item>
                        <Nav.Link eventKey="towing">Towing System</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }>
                      {/* MOBILE */}
                      <Tab.Pane eventKey="mobile">
                        <Row>
                          {mobileProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* WEB */}
                      <Tab.Pane eventKey="web">
                        <Row>
                          {webProjects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* TOWING */}
                      <Tab.Pane eventKey="towing">
                        <p>
                          Towing Service Project: A full system for automobile
                          assistance, driver management, requests tracking and
                          real-time service handling.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      <img className="background-image-right" src={colorSharp2} alt="bg" />
    </section>
  );
};
