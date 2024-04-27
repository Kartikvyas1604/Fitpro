// main.jsx
import React from 'react';
//import ReactDOM from 'react-dom/client';
import { WorkoutContextProvider } from './Components1/WorkoutContext';
import Input from './Components1/Input';
import Card from './Components1/card';

const WpApp = () => {
  return (
    <WorkoutContextProvider>
      <div>
        <h1>Workout Planner</h1>
        <Input />
        <Card />
      </div>
    </WorkoutContextProvider>
  );
};
export default WpApp;

