import React from "react";
import { useParams } from 'react-router-dom';

const Entry = (props) => {
  // const { exercise } = props.workouts.fields;
  const params = useParams();
  console.log(params.id)

  const workout = props.workouts.find((workout) => params.id === workout.id);
  console.log(workout)
  
  return (
    <div>
      {/* <h4>{exercise}</h4> */}
    </div>
  )
}

export default Entry;