import React, { Component } from "react";


class Skills extends Component {

  componentDidMount() {
    // Dynamically load the Credly embed script
    const script = document.createElement('script');
    script.src = 'https://cdn.credly.com/assets/utilities/embed.js';
    script.async = true;
    document.body.appendChild(script);
  }
  render() {
    if (this.props.sharedSkills && this.props.resumeBasicInfo) {
      var sectionName = this.props.resumeBasicInfo.section_name.skills;
      var skills = this.props.sharedSkills.icons.map(function (skills, i) {
        return (
          <li className="list-inline-item mx-3" key={i}>
            <span>
              <div className="text-center skills-tile">
                <i className={skills.class} style={{ fontSize: "220%" }}>
                  <p
                    className="text-center"
                    style={{ fontSize: "30%", marginTop: "4px" }}
                  >
                    {skills.name}
                  </p>
                </i>
              </div>
            </span>
          </li>
        );
      });
    }

    return (
      <section id="skills">
        <div className="col-md-12">
          <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" , fontSize: "25px" }}>
              <span >{sectionName}</span>
            </h1>
          </div>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto skill-icon">{skills}</ul>
          </div>
        </div>

        <div className="col-md-12">
            <div className="col-md-12">
            <h1 className="section-title" style={{ color: "black" , fontSize: "25px" }}>
              <span >CERTIFICATIONS</span>
            </h1>
          </div>
          <div className="row">
          <div className="col-md-12 text-center">
            <ul className="list-inline skill-icon" id="cert" >
              <li>
                <div data-iframe-width="400" data-iframe-height="250" data-share-badge-id="1c1e00b2-9d18-48ef-8dde-f583cf0ad2ba" data-share-badge-host="https://www.credly.com"></div>
              </li>
              <li>
                <div data-iframe-width="400" data-iframe-height="250" data-share-badge-id="00c0b8bd-10d8-43d6-87e0-c1a0ce47e25d" data-share-badge-host="https://www.credly.com"></div></li>
            </ul>
          </div>
          </div>
              <div className="row">
                <div className="col-md-12 text-center">
                  <ul className="list-inline skill-icon" id="cert" >
              <li>
                <div data-iframe-width="400" data-iframe-height="250" data-share-badge-id="6ce46418-284c-4464-aef6-4ac626879b90" data-share-badge-host="https://www.credly.com"></div>
              </li>
              <li>
                <div data-iframe-width="400" data-iframe-height="250" data-share-badge-id="0eec546f-b14f-4266-8435-dba52dacf240" data-share-badge-host="https://www.credly.com"></div>
              </li>
            </ul>
          </div>
        </div>
        </div>

      </section>
    );
  }
}

export default Skills;
