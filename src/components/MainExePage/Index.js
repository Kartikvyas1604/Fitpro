// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { WorkoutContextProvider } from './Components/WorkoutContext';
import Input from './Components/Input';
import Card from './Components/card';

const App1 = () => {
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

export default App1;
