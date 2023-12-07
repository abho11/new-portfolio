import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { FiMenu } from 'react-icons/fi';

class Header extends Component {
    titles = [];

    constructor() {
        super();
        this.state = { checked: false, isMobileNavOpen: false, isHeaderIconHovered: false };
        this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
        this.closeMobileNav = this.closeMobileNav.bind(this);
        this.toggleTheme = this.toggleTheme.bind(this);
    }

    toggleTheme() {
        this.setState(prevState => ({
            checked: !prevState.checked
        }), () => {
            this.setTheme();
        });
    }

    toggleMobileNav = () => {
        this.setState(prevState => ({
            isMobileNavOpen: !prevState.isMobileNavOpen
        }));
    }

    onThemeSwitchChange() {
        this.toggleTheme();
    }

    setTheme() {
        var dataThemeAttribute = "data-theme";
        var body = document.body;
        var newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    closeMobileNav() {
        this.setState({ isMobileNavOpen: false });
    }


    renderNavItem(text, onClick) {
        return (
            /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
            <a onClick={onClick}>{text}</a>
        );
    }

  render() {
      if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }
      const checked = this.state.checked; // Correctly access the checked state
      const themeSwitchText = checked ? "LIGHT MODE" : "DARK MODE";

      const { isMobileNavOpen } = this.state;

      const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
        <section  className='header' >
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
          <div id='informative-header'>
              <a href="https://github.com/abho11/new-portfolio" target="_blank" rel="noreferrer" className="github-corner" aria-label="View source on GitHub">
                  <svg width="90" height="90" id="cat" viewBox="0 0 250 250" style={{ fill: '#fff', color: '#151513', position: 'absolute', top: 0, border: 0, left: 0, transform: 'scale(-1, 1)', zIndex: 9999 }} aria-hidden="true">
                      <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                      <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{ transformOrigin: '130px 106px' }} className="octo-arm"></path>
                      <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
                  </svg>
                  <style dangerouslySetInnerHTML={{__html: `
    .github-corner:hover .octo-arm {
      animation: octocat-wave 560ms ease-in-out;
    }
    @keyframes octocat-wave {
      0%, 100% { transform: rotate(0); }
      20%, 60% { transform: rotate(-25deg); }
      40%, 80% { transform: rotate(10deg); }
    }
    @media (max-width: 500px) {
      .github-corner:hover .octo-arm { animation: none; }
      .github-corner .octo-arm { animation: octocat-wave 560ms ease-in-out; }
    }
  `}} />
              </a>

              <nav className= "navbar">
              <ul className="nav-list">

                  <li>{this.renderNavItem(themeSwitchText, this.toggleTheme)}</li>
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#projects">PROJECTS</a></li>
                  <li><a href="#skills">SKILLS</a></li>
                  <li><a href="#experience">EXPERIENCE</a></li>
                  <li><a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">RESUME</a></li>
                  <li><a href="#contact">CONTACT</a></li>
              </ul>
          </nav>


          <FiMenu className="hamburger-menu" onClick={this.toggleMobileNav} />
          <div  className={`nav mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
              <div className="close-btn" onClick={this.toggleMobileNav}>&times;</div>
                  <li>{this.renderNavItem(themeSwitchText, this.toggleTheme)}</li>
                  <a href="#about" onClick={this.closeMobileNav} >ABOUT</a>
                  <a href="#projects" onClick={this.closeMobileNav}>PROJECTS</a>
                  <a href="#skills" onClick={this.closeMobileNav}>SKILLS</a>
                  <a href="#experience" onClick={this.closeMobileNav}>EXPERIENCE</a>
              <a href="/Resume.pdf" onClick={this.closeMobileNav} target="_blank" rel="noopener noreferrer">RESUME</a>
                  <a href="#contact" onClick={this.closeMobileNav}>CONTACT</a>

          </div>
        </div>

        <div className="row aligner" style={{height: '100%'}}>
          <div className="col-md-12">
            <div className="header-content">
              <span className="iconify header-icon" data-icon="la:laptop-code" data-inline="false" onMouseEnter={this.handleIconHover}
                    onMouseLeave={this.handleIconHoverLeave}></span>
              <br/>
              <h1 className="mb-0">
                  <Typical steps={[name]}  />
              </h1>
              <div className="title-container">
                <HeaderTitleTypeAnimation />
              </div>
              <Switch
                checked={this.state.checked}
                onChange={this.onThemeSwitchChange}
                offColor="#baaa80"
                onColor="#353535"
                className="react-switch mx-auto"
                width={90}
                height={40}
                uncheckedIcon={
                  <span id={'moon'}
                    className="iconify"
                    data-icon="material-symbols-light:dark-mode"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 35,
                      textAlign: "end",
                      marginLeft: "20px",
                      color: "black",
                    }}
                  ></span>
                }
                checkedIcon={
                  <span id={'sun'}
                    className="iconify"
                    data-icon="noto-v1:sun-with-face"
                    data-inline="false"
                    style={{
                      display: "block",
                      height: "100%",
                      fontSize: 25,
                      textAlign: "end",
                      marginLeft: "10px",
                      color: "#353239",
                    }}
                  ></span>
                }
                id="icon-switch"
              />
            </div>
          </div>
        </div>
      </header>
        </section>
    );
  }
}

export default Header;
