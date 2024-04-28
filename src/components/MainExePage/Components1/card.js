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
                <Typography
                  ml="21px"
                  color="#000"
                  fontWeight="bold"
                  sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                  mt="11px"
                  pb="10px"
                  textTransform="capitalize"
                  key={index}
                >
                  {exercise.Exercise}
                </Typography>
                <Stack direction="row" >
                  <Button
                    sx={{
                      ml: "200px",
                      color: "#fff",
                      background: "#7247CE",
                      fontSize: "14px",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                    }}
                  >
                    Time :-{exercise.Time}
                  </Button>
                </Stack>
              </>
            ))}
          </div>
          <div>
            <h3>Exercises</h3>
            {workoutData.Exercises.map((exercise, index) => (
              <>
                <img
                  src={exercise.gifUrl}
                  alt={exercise.Exercise}
                  loading="lazy"
                  style={{ background: "#000" }}
                />
                <Typography
                  ml="21px"
                  color="#000"
                  fontWeight="bold"
                  sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                  mt="11px"
                  pb="10px"
                  textTransform="capitalize"
                  key={index}
                >
                  {exercise.Exercise}
                </Typography>
                <Stack direction="row">
                  <Button
                    sx={{
                      ml: "21px",
                      color: "#fff",
                      background: "#7247CE",
                      fontSize: "14px",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                    }}
                  >
                    Sets: {exercise.Sets}
                  </Button>
                  <Button
                    sx={{
                      ml: "21px",
                      color: "#fff",
                      background: "#FCC757",
                      fontSize: "14px",
                      borderRadius: "20px",
                      textTransform: "capitalize",
                    }}
                  >
                    Reps: {exercise.Reps}
                  </Button>
                </Stack>
              </>
            ))}
          </div>
          <div>
            <h3>Cool Down</h3>
              {workoutData["Cool Down"].map((exercise, index) => (
                <>
                  <img
                    src={exercise.gifUrl}
                    alt={exercise.name}
                    loading="lazy"
                    style={{ background: "#000" }}
                  />
                  <Typography
                    ml="21px"
                    color="#000"
                    fontWeight="bold"
                    sx={{ fontSize: { lg: "24px", xs: "20px" } }}
                    mt="11px"
                    pb="10px"
                    textTransform="capitalize"
                    key={index}
                  >
                    {exercise.Exercise}
                  </Typography>
                  <Stack direction="row">
                    <Button
                      sx={{
                        ml: "21px",
                        color: "#fff",
                        background: "#7247CE",
                        fontSize: "14px",
                        borderRadius: "20px",
                        textTransform: "capitalize",
                      }}
                    >
                      Time :- {exercise.Time}
                    </Button>
                  </Stack>
                  
                </>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
