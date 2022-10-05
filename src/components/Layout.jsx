import React, { Component } from "react";
import Search from "./Search";
import "../styles/external.css";
import {
  Cog6ToothIcon,
  StarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";

class Layout extends Component {
  render() {
    return (
      <div className="w-full h-screen overflow grid ">
        <nav className="w-full p-4 bg-blue-900  sticky top-0 flex flex-col md:flex-row gap-2 items-center justify-between">
          <h1 className="text-white text-2xl font-semibold ">
            ALTA <span className="text-orange-500 ">CINEMA </span>{" "}
          </h1>
          <Search />
          <div className="flex gap-3">
            <StarIcon className="w-10  text-white hover:text-orange-500 hover:scale-125 transition-transform" />
            <Cog6ToothIcon className="w-10  text-white hover:text-orange-500 hover:scale-125 transition-transform" />
            <UserCircleIcon
              className="w-10  text-white hover:text-orange-500 hover:scale-125 transition-transform"
              alt="Account"
            />
          </div>
        </nav>
        <div className="w-full h-full ">{this.props.children}</div>
      </div>
    );
  }
}

export default Layout;
