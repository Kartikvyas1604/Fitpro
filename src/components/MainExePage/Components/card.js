import * as React from 'react';
import { useContext } from "react";
import { useWorkoutContext } from "./WorkoutContext";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const WorkoutCard = ({ exercise }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exercise.Exercise}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Sets: {exercise.Sets}, Reps: {exercise.Reps}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const CardList = ({ exercises }) => {
  return (
    <>
      {exercises.map((exercise, index) => (
        <WorkoutCard key={index} exercise={exercise} />
      ))}
    </>
  );
};

export default function ActionAreaCard() {
  const { workoutData } = useWorkoutContext();

  if (!workoutData) {
    return <div>Loading...</div>; // or any other loading indicator
  }

  return (
    <div>
      <div>
        <h3>Warm Up</h3>
        {workoutData["Warm Up"] && <CardList exercises={workoutData["Warm Up"]} />}
      </div>
      <div>
        <h3>Exercises</h3>
        {workoutData.Exercises && <CardList exercises={workoutData.Exercises} />}
      </div>
      <div>
        <h3>Cool Down</h3>
        {workoutData["Cool Down"] && <CardList exercises={workoutData["Cool Down"]} />}
      </div>
    </div>
  );
}
