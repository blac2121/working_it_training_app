// import React from "react";
import React, { useEffect } from "react";
import { useParams } from 'react-router-dom';

const Entry = (props) => {
  const params = useParams();
  console.log(params.id)  

  const workout = props.workouts.find((workout) => params.id === workout.id);
  console.log(workout) 
  
  if (!workout) {
    return <h3>Looks like it's rest day!</h3>
  }
  
  return (
    <div>
      <h4>{workout.fields.exercise}</h4>
    </div>
  )
}

export default Entry;