import React from "react";
import axios from "axios";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
// import EditEntry from "./EditEntry"

const deleteTrash =
  <FontAwesomeIcon
    icon={faTrashAlt}
    size="2x"
    color="#282829"
  />

const editPencil =
  <FontAwesomeIcon
    icon={faEdit}
    size="2x"
    color="#42C9FB"
  />

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3A3A3A;
  width: 500px;
  height: 410px;
  margin: 30px auto;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 1px 1px #1C1C1D;

  @media (max-width: 768px) {
    width: 500px;
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    width: 275px;
  }

  @media (max-width: 320px) {
    margin-left: 20px;
  }
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

const ViewDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4C4C4D;
  box-shadow: 1px 1px 1px 1px #282829;
  border-radius: 2px;
  padding: 15px;
`

const ViewDataRows = styled.div`
  display: flex;
  align-items: center;
`

const ViewLabels = styled.label`
  font-size: 18px;
`

const ViewData = styled.p`
  color: #42C9FB;
  font-size: 18px;
  padding-left: 10px;
`

const DeleteDiv = styled.div`
  margin-top: 14px;
  margin-left: 10px;
  cursor: pointer;
`

const Entry = (props) => {
  const params = useParams();

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
        <Link to={`/edit/${workout.id}`}>
          <div>{editPencil}</div>
        </Link>
      </ViewHeader>      
      <ViewDataContainer>
        <ViewDataRows>
          <ViewLabels>Date:</ViewLabels>
          <ViewData>{formattedDate}</ViewData>
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Duration:</ViewLabels>
          <ViewData>{formattedDuration}</ViewData>
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Status:</ViewLabels>
          <ViewData>{workout.fields.status}</ViewData>
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Notes:</ViewLabels>
          <ViewData>{workout.fields.notes}</ViewData>
        </ViewDataRows>
      </ViewDataContainer>
      <DeleteDiv onClick={handleDelete}>{deleteTrash}</DeleteDiv>
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