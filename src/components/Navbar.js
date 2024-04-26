import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Login from "./Login/Login";
import Exercises from "./Individualexe/Exercises";
import App1 from "./MainExePage/Index";

import Logo from "../assets/images/Logo.png";

const Navbar = () => (
  <Stack
    direction="row"
    justifyContent="space-around"
    sx={{
      gap: { sm: "123px", xs: "40px" },
      mt: { sm: "32px", xs: "20px" },
      justifyContent: "none",
    }}
    px="20px"
  >
    <Link to="/">
      <img
        src={Logo}
        alt="logo"
        style={{ width: "48px", height: "48px", margin: "0px 20px" }}
      />
    </Link>
    <Stack
      direction="row"
      gap="40px"
      fontFamily="Alegreya"
      fontSize="24px"
      alignItems="flex-end"
    >
      <Link
        to="/Exercise"
        style={{
          textDecoration: "none",
          color: "#3A1212",
          borderBottom: "3px solid #FF2625",
        }}
      >
        Home
      </Link>
      <Link to="/App1" style={{ textDecoration: "none", color: "#3A1212" }}>
        Exercises
      </Link>
      <Link to="/Login" style={{ textDecoration: "none", color: "#3A1212" }}>
        Login
      </Link>
    </Stack>
  </Stack>
);

export default Navbar;
