import React, { Component } from "react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { useSpring, animated } from 'react-spring';

const ProjectCard = ({ project, showModal }) => {
  // Spring properties for the parallax effect
  const [{ scale }, set] = useSpring(() => ({
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
      <animated.div
          className="col-sm-12 col-md-6 col-lg-4"
          onMouseEnter={() => set({ scale: 1.1 })}
          onMouseLeave={() => set({ scale: 1 })}
          style={{
            cursor: "pointer",
            transform: scale.interpolate(scale => `scale(${scale})`),
            margin: "10px 0",
          }}
          onClick={() => showModal(project)}
      >
        <div className="portfolio-item d-block">
          <div className="foto">
            <img
                src={project.images[0]}
                alt="projectImages"
                height="230"
                style={{ marginBottom: 0, paddingBottom: 0, position: 'relative' }}
            />
            <span className="project-date">{project.startDate}</span>
            <p className="project-title-settings mt-3">
              {project.title}
            </p>
          </div>
        </div>
      </animated.div>
  );
};

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deps: {},
      detailsModalShow: false,
    };
  }

  detailsModalShow = (data) => {
    this.setState({ detailsModalShow: true, deps: data });
  };

  detailsModalClose = () => {
    this.setState({ detailsModalShow: false });
  };

  render() {
    let projectCards;
    let sectionName = "";

    if (this.props.resumeProjects && this.props.resumeBasicInfo) {
      sectionName = this.props.resumeBasicInfo.section_name.projects;
      projectCards = this.props.resumeProjects.map((project) => (
          <ProjectCard
              key={project.title}
              project={project}
              showModal={this.detailsModalShow}
          />
      ));
    }

    return (
        <section id="portfolio">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" }}>
              <span>{sectionName}</span>
            </h1>
            <div className="col-md-12 mx-auto">
              <div className="row mx-auto">{projectCards}</div>
            </div>
            <ProjectDetailsModal
                show={this.state.detailsModalShow}
                onHide={this.detailsModalClose}
                data={this.state.deps}
            />
          </div>
        </section>
    );
  }
}

export default Projects;
