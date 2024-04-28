import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Login from "../Login/Login";
import Individualexe from "../Individualexe/pages/Individual-Exe";
import Home from "../Home/Home";
import WpApp from "../MainExePage/App";
import BMICalculator from "./bmicalculator";
import CalorieCounter from "./CalorieCounter";

import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img src={Logo} alt="Logo" />
        <a class="navbar-brand" href={Home}></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/WpApp" className="nav-link">
                WpApp
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/Individualexe" className="nav-link">
                Individualexe
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                More
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <Link to="/CalorieCounter" className="nav-link">
                    CalorieCounter
                  </Link>
                </li>
                <li>
                  <Link to="/BMICalculator" className="nav-link">
                    BMICalculator
                  </Link>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Meal-Planner
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
