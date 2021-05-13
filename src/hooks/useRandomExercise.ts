import { useState } from "react";
import {
  ExerciseInstance,
  getRandomExercise,
} from "../services/ExerciseService";

export function useRandomExercise() {
  const [instance, setInstance] = useState<ExerciseInstance>(
    getRandomExercise()
  );

  function nextExercise() {
    const nextInstance = getRandomExercise();

    setInstance(nextInstance);
  }

  return [instance, nextExercise];
}
