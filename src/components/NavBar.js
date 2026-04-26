import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import navIcon1 from "../assets/img/icons-linkedin.png";
import navIcon2 from "../assets/img/icons-github-logo.png";
import navIcon3 from "../assets/img/icons-gmail.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("");

  // ✨ animation text logo
  const [text, setText] = useState("");
  const fullText = "Welcome to my world";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, i + 1));
      i++;

      if (i === fullText.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="md" className="custom-navbar">
      <Container>
        {/* LOGO ANIMÉ */}
        <Navbar.Brand href="/" className="navbar-logo">
          {text}
          <span className="cursor">|</span>
        </Navbar.Brand>

        <Navbar.Toggle />

        <Navbar.Collapse id="basic-navbar-nav">
          {/* LINKS */}
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}>
              Home
            </Nav.Link>

            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("skills")}>
              Skills
            </Nav.Link>

            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("projects")}>
              Projects
            </Nav.Link>
          </Nav>

          {/* SOCIAL ICONS */}
          <div className="social-icon">
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <img src={navIcon1} alt="linkedin" />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
              <img src={navIcon2} alt="github" />
            </a>

            <a href="mailto:yosrayaakoub46@gmail.com">
              <img src={navIcon3} alt="email" />
            </a>
          </div>

          {/* BUTTON */}
          <a href="#connect">
            <button className="vvd">
              <span>Let’s Connect</span>
            </button>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
