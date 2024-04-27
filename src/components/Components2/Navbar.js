import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Login from "../Login/Login";
import Individualexe from "../Individualexe/pages/Individual-Exe";
import Home from "../Home/Home";
import WpApp from "../MainExePage/App";
import BMICalculator from "./bmicalculator"
import CalorieCounter from "./CalorieCounter"

import Logo from "../../assets/images/Logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <img src={Logo} alt="Logo" />
        <a class="navbar-brand" href={Home}>
          Fit-Pro
        </a>
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
              <a class="nav-link active" aria-current="page" href={Home}>
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={WpApp}>
                Workout-Plan
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href={Individualexe}>
                Individual-Exe
              </a>
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
                  <a class="dropdown-item" href={CalorieCounter}>
                    Calorie-Counter
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href={BMICalculator}>
                    BMI-Calculator
                  </a>
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
