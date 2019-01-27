import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ArduinoModule from "./components/ArduinoModule";
import Search from "./components/Search";
import "./App.css";

class App extends Component {
  state = {
    modules: []
  };
  componentDidMount() {
    this.fetchAllData();
  }

  fetchAllData() {
    fetch(`http://localhost:4000/api/hackathon`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(json => {
        this.setState({
          modules: json
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Navbar moduleLength={this.state.modules.length} />
          <br />
          <Search modules={this.state.modules} />
          <br />
          <ArduinoModule modules={this.state.modules} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
