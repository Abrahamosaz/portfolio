import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import TrackVisibility from "react-on-screen";
import "animate.css";
import "../styles/Banner.css";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5, type: "tween" }}
              className="lp__hero__content"
            >
              <div>
                <span className="tagline">Welcome to my Portfolio</span>
                {/* <h1 className="hero_details">
                  Hi! I'm Abraham
                  <TypeWriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      strings: [
                        "Frontend Developer .",
                        "Backend Developer .",
                        "Flutter Developer .",
                      ],
                    }}
                  />{" "}
                </h1> */}
                <p>
                  Throughout my career as a software engineer, I have focused on
                  developing scalable, testable, and well-documented code. I
                  enjoy working collaboratively but can also run projects
                  independently. I have managed a cross-functional team
                  efficiently. Just making life better with Java, Node.js,
                  React.js, React Native, Python, Nest.js, Next.js.
                </p>

                <div className="download_container">
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  <a
                    href="abraham-omorisiagbon-cv.pdf"
                    download="omorisiagbon-abraham.pdf"
                    class="download-btn"
                  >
                    Download CV
                  </a>
                </div>
              </div>
            </motion.div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
