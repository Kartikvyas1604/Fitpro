// Card.jsx
import React, { useContext } from "react";
import { useWorkoutContext } from "./WorkoutContext";


const Card = () => {
  const { workoutData } = useWorkoutContext();

  return (
    <div>
      {workoutData && (
        <div>
          <h2>Workout Data</h2>
          <div>
            <h3>Warm Up</h3>
            <ul>
              {workoutData["Warm Up"].map((exercise, index) => (
                <li key={index}>
                  {exercise.Exercise} - {exercise.Time}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Exercises</h3>
            <ul>
              {workoutData.Exercises.map((exercise, index) => (
                <li key={index}>
                  {exercise.Exercise} - Sets: {exercise.Sets}, Reps:{" "}
                  {exercise.Reps}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Cool Down</h3>
            <ul>
              {workoutData["Cool Down"].map((exercise, index) => (
                <li key={index}>
                  {exercise.Exercise} - {exercise.Time}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
