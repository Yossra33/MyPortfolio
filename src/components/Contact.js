import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import emailjs from "@emailjs/browser";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send Message");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    emailjs
      .send(
        "service_9tjyoq9",
        "template_c3y8dof", // 🔥 TON vrai template
        {
          from_name: formDetails.firstName + " " + formDetails.lastName,
          from_email: formDetails.email,
          phone: formDetails.phone,
          message: formDetails.message,
        },
        "RSTQd0wsTIARMUc3d", // 🔥 TA vraie public key
      )
      .then(
        () => {
          setButtonText("Send Message");
          setFormDetails(formInitialDetails);
          setStatus({
            success: true,
            message: "Message sent successfully 🚀",
          });
        },
        () => {
          setButtonText("Send Message");
          setStatus({
            success: false,
            message: "Something went wrong ❌",
          });
        },
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          {/* IMAGE */}
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact"
                />
              )}
            </TrackVisibility>
          </Col>

          {/* FORM */}
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }>
                  <h2>Let’s Work Together</h2>

                  <p style={{ color: "#b8b8b8", marginBottom: "20px" }}>
                    📍 Dubai, UAE — Available for freelance & full-time
                  </p>

                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col xs={12} sm={6}>
                        <input
                          type="text"
                          placeholder="First Name"
                          value={formDetails.firstName}
                          onChange={(e) =>
                            onFormUpdate("firstName", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6}>
                        <input
                          type="text"
                          placeholder="Last Name"
                          value={formDetails.lastName}
                          onChange={(e) =>
                            onFormUpdate("lastName", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6}>
                        <input
                          type="email"
                          placeholder="Email Address"
                          value={formDetails.email}
                          onChange={(e) =>
                            onFormUpdate("email", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12} sm={6}>
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={formDetails.phone}
                          onChange={(e) =>
                            onFormUpdate("phone", e.target.value)
                          }
                        />
                      </Col>

                      <Col xs={12}>
                        <textarea
                          rows="6"
                          placeholder="Your Message..."
                          value={formDetails.message}
                          onChange={(e) =>
                            onFormUpdate("message", e.target.value)
                          }></textarea>

                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {status.message && (
                        <Col>
                          <p className={status.success ? "success" : "danger"}>
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
