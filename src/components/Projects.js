import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import jpgold from "../assets/img/jpgold.png";
import jpaulNft from "../assets/img/jpaulNft.png";
import Spikesubs from "../assets/img/spikesubs.png";
import Kemdiattire from "../assets/img/kemdiattire.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import "../styles/Project.css";

export const Projects = () => {
  const webapps = [
    {
      title: "KemdiAttire",
      description:
        "This will generate a default text of three paragraphs with five sentences each. You can customize the number of paragraphs and sentences by adding arguments to the function. For example,  will generate two paragraphs with seven sentences each.",
      imgUrl: Kemdiattire,
      link: "https://kemdiattire.com/",
    },
    {
      title: "Spikesubs",
      description:
        "We offer seamless cable subscriptions, instant airtime top-ups, affordable data packages and lots more—all in one convenient platform.",
      imgUrl: Spikesubs,
      link: "https://spikesubs.com/",
    },

    {
      title: "Jpgold",
      description:
        "JP Gold Coin promises beyond what the best cryptocurrencies like BTC and other altcoins offer the investors. It sustains the wealth because it is backed by physical gold that guarantees and preserves value",
      imgUrl: jpgold,
      link: "https://new-jp-gold.vercel.app/",
    },
  ];

  const blockchains = [
    {
      title: "Jpgoldcoin",
      description:
        "Experience the future of gold ownership with Japaul Gold NFT. Invest in secure, verifiable ownership of physical gold, stored in top-tier vaults worldwide. Choose from a range of gold NFTs and enjoy doorstep delivery. Join us and invest in one of the world's most timeless assets, with Japaul Gold NFT.",
      imgUrl: jpaulNft,
      link: "https://www.jpgoldcoin.app/",
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
                  }
                >
                  <h2>Projects</h2>
                  <p className="project__p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link
                          className="project_tab"
                          style={{ cursor: "pointer" }}
                          eventKey="first"
                        >
                          WEBAPPS
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          className="project_tab"
                          style={{ cursor: "pointer" }}
                          eventKey="second"
                        >
                          BLOCKCHAIN
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          className="project_tab"
                          style={{ cursor: "pointer" }}
                          eventKey="third"
                        >
                          MOBILE
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {webapps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        {blockchains.map((project, index) => {
                          return <ProjectCard key={index} {...project} />;
                        })}
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>No project currently available for mobile</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
