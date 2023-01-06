import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="w-full bg-sky-600 flex justify-start">
      <NavLink
        className="p-5 text-white hover:bg-white hover:text-sky-600 font-sans font-medium"
        to="/"
      >
        Task List
      </NavLink>
      <NavLink
        className="p-5 text-white hover:bg-white hover:text-sky-600 font-sans font-medium"
        to="/create-task"
      >
        Create Task
      </NavLink>
    </div>
  );
};

export default NavBar;
