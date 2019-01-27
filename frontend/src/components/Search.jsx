import React, { Component } from "react";
import SearchButton from "../images/search.png";
import SearchRequest from "../images/requestSearch.png";

class Search extends Component {
  state = {
    search: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getSearchList() {
    if (this.state.search !== "") {
      let filteredSearch = this.props.modules.filter(moduleItem => {
        return moduleItem.name.toLowerCase().indexOf(this.state.search) !== -1;
      });
      return (
        <div>
          <h2>Search Results...</h2>
          <br />
          {filteredSearch.map((item, id) => (
            <div className="searchresult" key={id}>
              <div>
                <br />
                <div
                  className="d p-2 bg-primary text-white rounded blockSize shadow-lg"
                  key={id}
                >
                  <h2>
                    <img
                      src={SearchRequest}
                      alt="Search"
                      style={{ width: 30 }}
                    />{" "}
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
            </div>
          ))}
        </div>
      );
    }
  }

  updateSearch(event) {
    this.setState({ search: event.target.value.substr(0, 10) });
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search Requests"
          name="search"
          onChange={this.updateSearch.bind(this)}
          value={this.state.search}
        />
        <button type="submit">
          <img src={SearchButton} alt="Search" style={{ width: 14 }} />
        </button>
        <center>{this.getSearchList()}</center>
      </div>
    );
  }
}

export default Search;
