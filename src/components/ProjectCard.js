import { Col } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../styles/ProjectCard.css";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div style={{ cursor: "pointer" }} className="proj-imgbx">
        <img style={{ height: "250px" }} src={imgUrl} />
        <div className="proj-txtx">
          <div className=" project__content">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>

          <div className="project_visit_container">
            <FaGithub className="github_icon" />
            <div
              onClick={() => window.open(link, "_blank")}
              className="project_visit"
            >
              VISIT
              <IoIosArrowForward style={{ width: "15px" }} />
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};
