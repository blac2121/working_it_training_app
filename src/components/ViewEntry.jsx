import React from "react";
import { useParams } from 'react-router-dom';
import styled from 'styled-components'
// import EditEntry from "./EditEntry";

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

const EditButton = styled.button`
  background-color: #42C9FB; 
  border: none;
  color: white;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: #68BBDA;
  }
`

const Entry = (props) => {
  const params = useParams();
  // const { fetchEntries, setFetchEntries, entry } = props;

  const workout = props.workouts.find((workout) => params.id === workout.id);
  
  if (!workout) {
    return <h3>Looks like it's rest day!</h3>
  }

  return (
    <ViewContainer>
      <ViewHeader>
        <ViewTitle>{workout.fields.exercise}</ViewTitle>
        <EditButton>Edit</EditButton>
      </ViewHeader>      
      <div>
        <p>Date: {workout.fields.date}</p>
        <p>Duration: {workout.fields.duration}</p>
        <p>Status: {workout.fields.status}</p>
        <p>Notes: {workout.fields.notes}</p>
      </div>
      <div>
        <button>Delete</button>
      </div>
    </ViewContainer>
  )
}

export default Entry;