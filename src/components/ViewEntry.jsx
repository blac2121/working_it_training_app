import React from "react";
import { useParams } from 'react-router-dom';
// import EditEntry from "./EditEntry";

const Entry = (props) => {
  const params = useParams();
  // const { fetchEntries, setFetchEntries, entry } = props;

  const workout = props.workouts.find((workout) => params.id === workout.id);
  
  if (!workout) {
    return <h3>Looks like it's rest day!</h3>
  }
  
  return (
    <div>
      <div className="view-heading">
        <h3>Workout</h3>
        <button>Edit</button>
      </div>      
      <div className="view-container">
        <h3 className="home-exercise-title">{workout.fields.exercise}</h3>
        <p className="home-exercise-date">{workout.fields.date}</p>
        <p className="home-exercise-duration">{workout.fields.duration}</p>
        <p className="home-exercise-status">{workout.fields.status}</p>
      </div>
      <div className="view-delete-container">
        <button>Delete</button>
      </div>
    </div>
  )
}

export default Entry;