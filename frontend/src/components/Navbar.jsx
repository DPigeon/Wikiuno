import React, { Component } from "react";
import logo from "../logo.png";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">
            <img src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#request">
                  Request ({this.props.moduleLength})
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Arduino Logs</a>
              </li>
            </ul>
            <span className="navbar-text">
              Where Arduino pops up in your UI
            </span>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
