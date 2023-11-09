import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeData: {},
      sharedData: {}
    };
  }

  componentDidMount() {
    this.loadResumeData();
    this.loadSharedData();
  }

  loadResumeData() {
    const path = `${process.env.PUBLIC_URL}/resume.json`; // Path to your resume.json in the public directory
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(status, err.toString());
      }
    });
  }

  loadSharedData() {
    $.ajax({
      url: `basic_info.json`,
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ sharedData: data });

        if (this.state.sharedData.basic_info.resume_file) {
          this.loadResumeFromPath(this.state.sharedData.basic_info.resume_file);
        }
      }.bind(this),
      error: function(xhr, status, err) {
        alert(err);
      }
    });
  }

  render() {

    return (
        <div>
          <Header sharedData={this.state.sharedData.basic_info}/>
          <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
          />
          <Projects
              resumeProjects={this.state.resumeData.projects}
              resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Skills
              sharedSkills={this.state.sharedData.skills}
              resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Experience
              resumeExperience={this.state.resumeData.experience}
              resumeBasicInfo={this.state.resumeData.basic_info}
          />
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
    );
  }
}

export default App;
