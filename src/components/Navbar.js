import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      {/* NAVBAR USING BOOTSTRAP  */}

      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <Link className="navbar-brand" to="/">
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.aboutText}
              </Link>
            </li>
          </ul>

          {/* ADDING MULTIPLE COLOR MODE BUTTONS */}
          {/* <div
            className="bg-primary rounded mx-2"
            onClick={() => {
              props.toggleMode("primary");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "2px solid",
            }}
          ></div>
          <div
            className="bg-danger rounded mx-2"
            onClick={() => {
              props.toggleMode("danger");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "2px solid",
            }}
          ></div>
          <div
            className="bg-success rounded mx-2"
            onClick={() => {
              props.toggleMode("success");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "2px solid",
            }}
          ></div>
          <div
            className="bg-warning rounded mx-2"
            onClick={() => {
              props.toggleMode("warning");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "2px solid",
            }}
          ></div>
          <div
            className="bg-light rounded mx-2"
            onClick={() => {
              props.toggleMode("light");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "2px solid",
            }}
          ></div>
          <div
            className="bg-dark rounded mx-2"
            onClick={() => {
              props.toggleMode("dark");
            }}
            style={{
              height: "30px",
              width: "30px",
              cursor: "pointer",
              border: "2px solid",
            }}
          ></div> */}

          {/* <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              Search
            </button>
          </form> */}

          {/* DARKMODE TOGGLE BUTTON USING BOOTSTRAP */}

          <div
            className={`form-check form-switch text-${
              props.mode === "light" ? "dark" : "light"
            }`}
          >
            <input
              className="form-check-input"
              onClick={props.toggleMode}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Enable {props.mode === "light" ? "Dark" : "Light"}Mode
              {/* Toggle Mode */}
            </label>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
};

// Specifies the default values for props:
Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
