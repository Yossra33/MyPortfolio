import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/YosraPhoto.png";
import cvFile from "../assets/cv/Yosra_Yaakoub  V2.pdf";
import { ArrowRightCircle, Download } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = [
    "Full-Stack Developer",
    "React.js Developer",
    "Web & Mobile Developer",
  ];

  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prev) => prev / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

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
