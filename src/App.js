import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Tables from "./components/Table";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [
        { name: "bob", lastName: "apple" },
        { name: "mark", lastName: "bob" },
        { name: "apple", lastName: "mark" }
      ],
      sortOrder: "ascending"
    };

    console.log(this.state);
    this.sort = this.sort.bind(this);
  }
  sort(sortBy) {
    let sortEmployee;
    if (sortBy === "First") {
      sortEmployee = this.state.employees.sort((a, b) => {
        // console.log(a.name);
        if (this.state.sortOrder === "ascending") {
          this.setState({ sortOrder: "descending" });
          return a.name > b.name ? +1 : -1;
        } else {
          this.setState({ sortOrder: "ascending" });
          return a.name > b.name ? -1 : +1;
        }
      });
    } else if (sortBy === "Last") {
      sortEmployee = this.state.employees.sort((a, b) => {
        // console.log(a.name);
        if (this.state.sortOrder === "ascending") {
          this.setState({ sortOrder: "descending" });
          return a.lastName > b.lastName ? +1 : -1;
        } else {
          this.setState({ sortOrder: "ascending" });
          return a.lastName > b.lastName ? -1 : +1;
        }
      });
    }
    this.setState({ employees: sortEmployee });
  }
  render() {
    return (
      <div className="App">
        <Tables employees={this.state.employees} sort={this.sort}></Tables>
      </div>
    );
  }
}

// export default App;
