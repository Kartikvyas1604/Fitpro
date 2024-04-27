import React from "react";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <img src="C:\Users\KARTIK\Desktop\web3-project\Scroll - fund\Fitpro\src\assets\images\Logo.png" />
    <a class="navbar-brand" href="#">Fit-Pro</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Wrokout-Plan</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Individual-Exerciss</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Calorie-Counter</a></li>
            <li><a class="dropdown-item" href="#">BMI-Calculator</a></li>
            <li><a class="dropdown-item" href="#">Diet-Plan</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;
