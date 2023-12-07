import React, { Component } from "react";
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ReactGA from 'react-ga';


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
    this.handleScrollSetup();
  }

  initializeReactGA() {
    ReactGA.initialize('G-6K2QPW4CDD');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  handleScrollSetup = () => {
    let lastScrollTop = 0;
    window.addEventListener("scroll", function() {
      let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let headerElement = document.getElementById('informative-header');

      if (window.innerWidth >= 0) {
        if (currentScrollTop === 0) {
          headerElement.style.opacity = '1';
          headerElement.style.position = 'absolute'; // Set to absolute when at top

        } else if (currentScrollTop < lastScrollTop) {
          headerElement.style.transition = 'opacity 0.3s ease, position 0s';
          headerElement.style.opacity = '1';
          headerElement.style.position = 'fixed'; // Set to fixed when scrolling up

        } else {
          headerElement.style.transition = 'opacity 0.3s ease, position 0s';
          headerElement.style.opacity = '0';
          headerElement.style.position = 'fixed'; // Keep it fixed when scrolling down
        }
      } else {
        headerElement.style.opacity = '1';
        headerElement.style.position = 'absolute'; // For wider screens, adjust as needed

      }

      lastScrollTop = currentScrollTop;
    }, false);
  };

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
          <Contact />
          <Footer sharedBasicInfo={this.state.sharedData.basic_info} />
        </div>
    );
  }
}

export default App;
