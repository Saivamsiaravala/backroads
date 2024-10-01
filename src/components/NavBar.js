import React from "react";
import "../index.css";
import logo from "../images/logo.svg";
import { Options, Media } from "./Data";
const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="backroads" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- left this comment on purpose --> */}
          <ul className="nav-links" id="nav-links">
            {Options.map((option) => {
              return (
                <li>
                  <a href={option.add} className="nav-link">
                    {" "}
                    {option.name}{" "}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="nav-icons">
            {Media.map((item) => {
              return (
                <li>
                  <a
                    href={item.add}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-icon"
                  >
                    <i className={item.class}></i>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
