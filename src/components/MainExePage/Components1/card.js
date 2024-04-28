// Card.jsx
import React, { useContext } from "react";
import { useWorkoutContext } from "./WorkoutContext";
import { Button, Stack, Typography } from "@mui/material";

const Card = () => {
  const { workoutData } = useWorkoutContext();
  return (
    <div>
      {workoutData && (
        <div>
          <h2>Workout Data</h2>
          <div>
            <h3>Warm Up</h3>
              {workoutData["Warm Up"].map((exercise, index) => (
              <>
                  <Stack direction="row" key={index}>
                    <Button
                      sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#FFA9A9",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                      }}
                    >
                      {exercise.Time}
                    </Button>
                  </Stack>
                  <Typography
                    ml="21px"
                    color="#000"
                    fontWeight="bold"
                    sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                    mt="11px"
                    pb="10px"
                    textTransform="capitalize"
                  >
                    {exercise.Exercise}
                  </Typography>
                  </>
              ))}
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
