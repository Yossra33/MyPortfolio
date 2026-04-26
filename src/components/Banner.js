import { useState, useEffect, useCallback } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/YosraPhoto.png";
import cvFile from "../assets/cv/Yosra_YaakoubV2.pdf";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";
const toRotate = [
  "Full-Stack Developer",
  "React.js Developer",
  "Web & Mobile Developer",
];
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");

  // ✅ FIX: useCallback pour éviter warning
  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (!isDeleting && updatedText === fullText) {
      setTimeout(() => setIsDeleting(true), 800);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prev) => prev + 1);
    }
  }, [text, isDeleting, loopNum]);

  // ✅ FIX propre (plus de warning ESLint)
  useEffect(() => {
    const ticker = setInterval(tick, isDeleting ? 80 : 120);
    return () => clearInterval(ticker);
  }, [tick, isDeleting]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <span className="hello-text">Hello, I'm</span>

                  <h1 className="name-title">YOSRA YAAKOUB</h1>

                  <h2 className="typed-role">
                    <span className="typed-text">{text}</span>
                  </h2>

                  <p>
                    Full-Stack Web and Mobile Developer with experience in
                    React.js, React Native, Node.js and MongoDB. Passionate
                    about building modern, scalable applications and clean
                    UI/UX.
                  </p>
                  {/* LOCATION + STATUS */}
                  <div className="banner-info">
                    <div className="info-item">
                      <span>📍</span>
                      <p>Dubai, UAE</p>

                      <span>💼</span>
                      <p>Available for new opportunities</p>
                    </div>
                  </div>

                  {/* BUTTONS */}
                  <div className="banner-buttons">
                    {/* CONNECT */}
                    <a href="#connect" className="connect-btn">
                      Let’s Connect <ArrowRightCircle size={18} />
                    </a>

                    {/* CV DOWNLOAD */}
                    <a href={cvFile} download="Yosra-CV.pdf" className="cv-btn">
                      Download CV <Download size={18} />
                    </a>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>

          {/* RIGHT SIDE IMAGE */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible
                      ? "animate__animated animate__zoomIn profile-box"
                      : "profile-box"
                  }>
                  <div className="circle-glow">
                    <img
                      src={headerImg}
                      alt="Welcome to my world"
                      className="profile-img"
                    />
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
