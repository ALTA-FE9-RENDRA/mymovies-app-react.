import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className=" p-2 rounded-lg bg-slate-100 text-blue-900">
        <input
          type="search"
          placeholder="Search Movie here..."
          name="search"
          id="search"
        />
      </div>
    );
  }
}

export default Search;
