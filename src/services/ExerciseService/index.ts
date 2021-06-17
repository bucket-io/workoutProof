export interface Exercise {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  minReps: number;
  maxReps: number;
}

export interface ExerciseInstance
  extends Omit<Exercise, "minReps" | "maxReps"> {
  reps: number;
}

const exercises: Exercise[] = [
  {
    id: 1,
    title: "Burpees",
    description: "xxx",
    imageUrl: "burpees.jpg",
    minReps: 10,
    maxReps: 25,
  },
  {
    id: 2,
    title: "Squats",
    description: "xxx",
    imageUrl: "squats.jpg",
    minReps: 6,
    maxReps: 30,
  },
  {
    id: 3,
    title: "Crunches",
    description: "xxx",
    imageUrl: "crunches.jpg",
    minReps: 20,
    maxReps: 50,
  },
];

function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * max) + min;
}

export function getRandomExercise(): ExerciseInstance {
  const index = getRandomNumber(0, exercises.length - 1);
  const exercise = exercises[index];

  if (!exercise) {
    throw new Error("Bad index");
  }

  const { maxReps, minReps, ...rest } = exercise;

  const instance: ExerciseInstance = {
    ...rest,
    reps: getRandomNumber(minReps, maxReps),
  };

  return instance;
}
