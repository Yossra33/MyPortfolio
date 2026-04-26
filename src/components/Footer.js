import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/icons-linkedin.png";
import navIcon2 from "../assets/img/icons-github-logo.png";
import navIcon3 from "../assets/img/icons-gmail.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* LEFT TEXT */}
          <Col size={12} sm={6}>
            <p style={{ color: "#b8b8b8" }}>© 2026 Yosra Yaakoub Portfolio</p>
          </Col>

          {/* RIGHT ICONS (same navbar style) */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              <a href="https://github.com" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="GitHub" />
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <img src={navIcon3} alt="Instagram" />
              </a>
            </div>

            <p style={{ color: "#b8b8b8", marginTop: "10px" }}>
              Designed by Yosra Yaakoub
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
