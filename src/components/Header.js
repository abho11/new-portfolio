import React, { Component } from "react";
import Typical from "react-typical";
import Switch from "react-switch";
import { FiMenu } from 'react-icons/fi';

class Header extends Component {
  titles = [];

  constructor() {
    super();
    this.state = { checked: false,  isMobileNavOpen: false, isHeaderIconHovered: false};
    this.onThemeSwitchChange = this.onThemeSwitchChange.bind(this);
      this.closeMobileNav = this.closeMobileNav.bind(this);
      this.handleIconHover = this.handleIconHover.bind(this);
      this.handleIconHoverLeave = this.handleIconHoverLeave.bind(this);
  }

    handleIconHover() {
        this.setState({ isHeaderIconHovered: true });
    }

    handleIconHoverLeave() {
        this.setState({ isHeaderIconHovered: false });
    }

  onThemeSwitchChange(checked) {
    this.setState({ checked });
    this.setTheme();
  }

    toggleMobileNav = () => {
        this.setState(prevState => ({
            isMobileNavOpen: !prevState.isMobileNavOpen
        }));
    }

    closeMobileNav() {
        this.setState({ isMobileNavOpen: false });
    }

    renderNavItem(href, text) {
        return (
            <a href={href} onClick={this.closeMobileNav}>{text}</a>
        );
    }

  setTheme() {
    var dataThemeAttribute = "data-theme";
    var body = document.body;
    var newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  }

  render() {
      const switchHandleStyle = this.state.isHeaderIconHovered ? { transform: 'scale(1.1)' } : null;

      if (this.props.sharedData) {
      var name = this.props.sharedData.name;
      this.titles = this.props.sharedData.titles.map(x => [ x.toUpperCase(), 1500 ] ).flat();
    }

      const { isMobileNavOpen } = this.state;

    const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={this.titles} loop={50} />
    }, (props, prevProp) => true);

    return (
        <section className={'header'}>
      <header id="home" style={{ height: window.innerHeight - 140, display: 'block' }}>
          <nav className="navbar">
              <ul className="nav-list">
                  <li><a href="#about">ABOUT</a></li>
                  <li><a href="#projects">PROJECTS</a></li>
                  <li><a href="#skills">SKILLS</a></li>
                  <li><a href="#experience">EXPERIENCE</a></li>
                  <li><a href="#contact">CONTACT</a></li>
              </ul>
          </nav>

          <FiMenu className="hamburger-menu" onClick={this.toggleMobileNav} />
          <div className={`nav mobile-nav ${isMobileNavOpen ? 'open' : ''}`}>
              <div className="close-btn" onClick={this.toggleMobileNav}>&times;</div>

                  <a href="#about" onClick={this.closeMobileNav} >ABOUT</a>
                  <a href="#projects" onClick={this.closeMobileNav}>PROJECTS</a>
                  <a href="#skills" onClick={this.closeMobileNav}>SKILLS</a>
                  <a href="#experience" onClick={this.closeMobileNav}>EXPERIENCE</a>
                  <a href="#contact" onClick={this.closeMobileNav}>CONTACT</a>
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
                  handleStyle={switchHandleStyle}
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