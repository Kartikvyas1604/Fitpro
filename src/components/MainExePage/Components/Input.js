// Input.jsx
import React, { useContext } from "react";
import { WorkoutContext } from "./WorkoutContext";

const timeOptions = ["", "10 min", "15 min", "20 min", "25 min", "30 min"];

const Input = () => {
  const {
    time,
    setTime,
    equipments,
    setEquipments,
    muscle,
    setMuscle,
    fitnessLevel,
    setFitnessLevel,
    fitnessGoal,
    setFitnessGoal,
    loading,
    setLoading,
    error,
    setError,
    setWorkoutData,
  } = useContext(WorkoutContext);

  const Timeinput = (e) => {
    setTime(e.target.value);
  };

  const Equipments = (e) => {
    setEquipments(e.target.value);
  };

  const Muscles = (e) => {
    setMuscle(e.target.value);
  };

  const Fitnesslevel = (e) => {
    setFitnessLevel(e.target.value);
  };

  const Fitnessgoal = (e) => {
    setFitnessGoal(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const url = `https://workout-planner1.p.rapidapi.com/customized?time=${time}&equipment=${equipments}&muscle=${muscle}&fitness_level=${fitnessLevel}&fitness_goals=${fitnessGoal}`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "05173b258cmsh7d934619123d1a7p13a3eejsn01f56032324d",
        "X-RapidAPI-Host": "workout-planner1.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        setWorkoutData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Time:</label>
        <select value={time} onChange={Timeinput}>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Equipments:</label>
        <select value={equipments} onChange={Equipments}>
          <option value="">None</option>
          <option value="dumbbells">Dumbbells</option>
          <option value="Punching Bag">Punching Bag</option>
          <option value="Pull Up Bar">Pull Up Bar</option>
          <option value="Battle Rope">Battle Rope</option>
          <option value="Barbells">Barbells</option>
          <option value="Medicine Ball">Medicine Ball</option>
          <option value="Plates">Plates</option>
        </select>
      </div>
      <div>
        <label>Muscles:</label>
        <select value={muscle} onChange={Muscles}>
          <option value="">None</option>
          <option value="biceps">Biceps</option>
          <option value="Back">Back</option>
          <option value="Chest">Chest</option>
          <option value="Legs">Legs</option>
          <option value="Triceps">Triceps</option>
          <option value="Forearms">Forearms</option>
          <option value="Abs">Abs</option>
          <option value="Lats">Lats</option>
          <option value="Calf">Calf</option>
        </select>
      </div>
      <div>
        <label>Fitness Level:</label>
        <select value={fitnessLevel} onChange={Fitnesslevel}>
          <option value="">None</option>
          <option value="beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>
      <div>
        <label>Fitness Goal:</label>
        <select value={fitnessGoal} onChange={Fitnessgoal} required>
          <option value="">None</option>
          <option value="weight Loss">Weight Loss</option>
          <option value="Muscle Building">Muscle Building</option>
          <option value="Balance and Coordination">
            Balance and Coordination
          </option>
          <option value="Strength">Strength</option>
        </select>
      </div>
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default Input;
