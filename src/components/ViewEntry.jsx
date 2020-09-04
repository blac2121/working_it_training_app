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
      <h4>{workout.fields.exercise}</h4>
      <button>Delete</button>
    </div>
  )
}

export default Entry;