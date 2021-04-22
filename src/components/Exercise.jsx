import React, { useState } from "react";
import pic8 from "../assets/img_8.JPG";
import "../sass/main.scss";

function Exercise() {
  // custom use exercise hook
  // workout name
  let [workout, setWorkout] = useState("");
  // workout img
  let [picture, setPicture] = useState("");
  // number of reps for the exercise set
  let [reps, setReps] = useState(0);
  // workout description
  let [description, setDescription] = useState("");
  //workout array
  const [exerciseArray, setExerciseArray] = useState([]);
  // key = exercise # or _id value
  // next - functianality - page reload with new content

  // onload run newExercise to generate starting array
  // onload set state (useState)
  // newExercise(e === onload) called three times
  const newExercise = (e) => {
    setWorkout((workout = "Burpees"));
    setReps((reps = 25));
    setDescription((description = "Jump up jump up and get down!"));
    setPicture((picture = pic8));
    // on click would check length of array, shift 0th exercise off array and push new random on, return shifted exercise as new exercise
    // after length > some numbber 3 5 w/e
    // select random number between 0 and database.length
    // if previous 3 items in array is same id, re auto generate number
    // push exercise at that id to array (& remove element if necessary)
  };

  return (
    <div>
      <h1 className="workout-name">{workout}</h1>
      <img className="picture" alt={workout} src={picture} />
      <p className="description">{description}</p>
      <h3 className="number-of-reps">{reps}</h3>
      <button className="next" onClick={newExercise}>
        NEXT
      </button>
    </div>
  );
}

export default Exercise;
