import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import TrackVisibility from "react-on-screen";
import ErrorModal from "./ErrorModal";
import SuccessModal from "./SuccessModal";
import emailjs from "@emailjs/browser";
import "animate.css";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [isSuccessModalOpen, setSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setErrorModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [buttonText, setButtonText] = useState("Send");

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: formDetails?.firstName,
          to_name: "OMORISIAGBON ABRAHAM",
          from_email: formDetails.email,
          to_email: "abrahamosazee3@gmail.com",
          message: formDetails.message,
          phonenumber: formDetails.phonenumber,
        },
        { publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY }
      )
      .then(
        () => {
          console.log("done");
          setLoading(false);
          setModalMessage(
            "Thank you. I will get back to you as soon as possible."
          );
          setSuccessModalOpen(true);
          setFormDetails(formInitialDetails);
        },
        (error) => {
          setLoading(false);
          console.error("error", error);
          setModalMessage("Ahh, something went wrong. Please try again.");
          setErrorModalOpen(true);
        }
      );

    setFormDetails(formInitialDetails);
  };

  return (
    <>
      <section className="contact" id="connect">
        <Container>
          <Row className="align-items-center">
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <img
                    className={
                      isVisible ? "animate__animated animate__zoomIn" : ""
                    }
                    src={contactImg}
                    alt="Contact Us"
                  />
                )}
              </TrackVisibility>
            </Col>
            <Col size={12} md={6}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.firstName}
                            placeholder="First Name"
                            onChange={(e) =>
                              onFormUpdate("firstName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="text"
                            value={formDetails.lastName}
                            placeholder="Last Name"
                            onChange={(e) =>
                              onFormUpdate("lastName", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="email"
                            value={formDetails.email}
                            placeholder="Email Address"
                            onChange={(e) =>
                              onFormUpdate("email", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input
                            type="tel"
                            value={formDetails.phone}
                            placeholder="Phone No."
                            onChange={(e) =>
                              onFormUpdate("phone", e.target.value)
                            }
                          />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea
                            rows="6"
                            value={formDetails.message}
                            placeholder="Message"
                            onChange={(e) =>
                              onFormUpdate("message", e.target.value)
                            }
                          ></textarea>
                          <button type="submit">
                            {loading ? "Sending..." : <span>{buttonText}</span>}
                          </button>
                        </Col>
                      </Row>
                    </form>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>

      <ErrorModal
        isOpen={isErrorModalOpen}
        onClose={() => {
          setErrorModalOpen(false);
        }}
        errorMessage={modalMessage}
      />
      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={() => {
          setSuccessModalOpen(false);
        }}
        successMessage={modalMessage}
      />
    </>
  );
};
