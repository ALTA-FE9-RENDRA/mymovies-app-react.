import React, { Component } from "react";
import Search from "./Search";
// import { ButtonSecondary, ButtonPrimary } from "./Button";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow-auto">
        <nav className="w-full p-4 bg-blue-900  sticky top-0 flex flex-col md:flex-row gap-2 items-center justify-between">
          <h1 className="text-white text-xl ">Movie Indie</h1>
          <Search />
        </nav>
        <div className="w-full h-full">{this.props.children}</div>
        <footer></footer>
      </div>
    );
  }
}

export default Layout;
