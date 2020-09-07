import React from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import styled from "styled-components";
import SubmitButton from "./SubmitButton";
// import EditEntry from "./EditEntry"

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4C4C4D;
  width: 500px;
  margin: 30px auto;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 1px 1px #282829;
`
const ViewHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ViewTitle = styled.h3`
  color: white;
  font-size: 24px;
`

const Entry = (props) => {
  const params = useParams();
  // const { fetchEntries, setFetchEntries, entry } = props;

  const workout = props.workouts.find((workout) => params.id === workout.id);
 
  if (!workout) {
    return <h3>Looks like it's rest day!</h3>
  }

  const dateInput = new Date(workout.fields.date.replace(/-/g, '\/'))
  const formattedDate = dateInput.toDateString()


  const durationInput = workout.fields.duration

  const hours = Math.floor(durationInput / 3600)
  const minutes = Math.floor((durationInput - (hours * 3600)) / 60);
  const seconds = durationInput - (hours * 3600) - (minutes * 60);

  const formattedDuration = (`${hours}:${minutes}:${seconds}`);

  const handleDelete = async () => {
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts/${workout.id}`;
    await axios.delete(airtableURL, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
      }
    });
    props.setFetchEntries(!props.fetchEntries);
  }


  return (
    <ViewContainer>
      <ViewHeader>
        <ViewTitle>{workout.fields.exercise}</ViewTitle>
        <Link to={`/edit/${workout.id}`}><SubmitButton label="Edit"></SubmitButton></Link>
      </ViewHeader>      
      <div>
        <p>Date: {formattedDate}</p>
        <p>Duration: {formattedDuration}</p>
        <p>Status: {workout.fields.status}</p>
        <p>Notes: {workout.fields.notes}</p>
      </div>
      <div>
        <button onClick={handleDelete}>Delete</button>
      </div>
      {/* <Route path="/edit/:id">
        <EditEntry
          workout={workout.fields}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
        />       
      </Route> */}
    </ViewContainer>
  )
}

export default Entry;