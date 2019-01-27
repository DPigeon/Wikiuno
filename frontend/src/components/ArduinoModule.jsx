import React, { Component } from "react";
import RequestImage from "../images//request.png";
import "./styles/styles.css";

class ArduinoModule extends Component {
  state = {};

  render() {
    return (
      <div className="Modules">
        <center>
          {this.props.modules.map((item, id) => (
            <div>
              <br />
              <div
                className="d p-2 bg-primary text-white rounded blockSize shadow-lg"
                key={id}
              >
                <h2>
                  <img src={RequestImage} alt="Search" style={{ width: 30 }} />{" "}
                  Request #{id + 1} | {item.date}
                </h2>
                <br />
                Name: {item.name}
                <br />
                Description: {item.description}
                <br />
                Ouput: {item.output}
                <br />
                Module #: {item.module}
                <br />
              </div>
            </div>
          ))}
        </center>
      </div>
    );
  }
}

export default ArduinoModule;
