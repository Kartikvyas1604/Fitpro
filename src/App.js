import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import ExerciseDetail from "./components/Individualexe/Detail";
import Home from "./components/Individualexe/pages/Home";
import Navbar from "./components/Home/Component-3/Navbar";
import App1 from "./components/MainExePage/Index";
import BMICalculator from "./components/Components-2/bmicalculator";
import CalorieCounter from "./components/Components-2/CalorieCounter";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Homepage from "./components/Home/Homepage";


const App = () => (
  <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/Homepage" element={<Homepage/>} />
      <Route path="/bmicalculator" element={<BMICalculator />} />
      <Route path="/CalorieCounter" element={<CalorieCounter />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/App1" element={<App1 />} />
    </Routes>
  </Box>
);

export default App;
