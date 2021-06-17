import React from "react";
import { useRandomExercise } from "../../hooks/useRandomExercise";

const Exercise: React.FC = () => {
  const [instance, nextExercise] = useRandomExercise();

  return (
    <div>
      <h1 className="workout-name">{instance.title}</h1>
      <img
        className="picture"
        alt={instance.imageURL}
        src={instance.imageUrl}
      />
      <p className="description">{instance.description}</p>
      <h3 className="number-of-reps">{instance.reps}</h3>
      <button className="next" onClick={nextExercise}>
        NEXT
      </button>
    </div>
  );
};

export default Exercise;
