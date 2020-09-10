import React from "react";
import { Link, useParams, useHistory } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking, faRunning, faSwimmer, faWalking, 
  faHiking, faDumbbell, faStopwatch20, faMusic, 
  faEdit, faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";


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

const cycle =
  <FontAwesomeIcon
    icon={faBiking}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const run =
  <FontAwesomeIcon
    icon={faRunning}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const swim =
  <FontAwesomeIcon
    icon={faSwimmer}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const walk =
  <FontAwesomeIcon
  icon={faWalking}
  size="4x"
  color="#42C9FB"
  className="exercise-icon"
  />

const hike =
  <FontAwesomeIcon
    icon={faHiking}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const dumbbell =
  <FontAwesomeIcon
    icon={faDumbbell}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const stopwatch =
  <FontAwesomeIcon
    icon={faStopwatch20}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const dance =
  <FontAwesomeIcon
    icon={faMusic}
    size="4x"
    color="#42C9FB"
    className="exercise-icon"
  />

const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #3A3A3A;
  width: 500px;
  margin: 30px auto;
  padding: 0px 20px 20px 20px;
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

const ViewTitleIcon = styled.div`
  display: flex;
  align-items: center;
`

const ViewIcon = styled.div`
  text-align: left;
`

const ViewTitle = styled.h3`
  color: white;
  font-size: 32px;
  text-align: left;
  padding-left: 15px;
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
  margin-botom: 8px;
`

const ViewLabels = styled.label`
  font-size: 18px;
`

const ViewData = styled.p`
  color: #42C9FB;
  font-size: 18px;
  padding-left: 10px;
`

const NoInput = styled.p`
  color: #42C9FB;
  font-size: 18px;
  padding-left: 10px;
  font-style: italic;
`

const DeleteDiv = styled.div`
  margin-top: 16px;
  margin-left: 10px;
  cursor: pointer;
`

const NoResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3A3A3A;
  margin: 0 auto;
  width: 500px;
  box-shadow: 1px 1px 1px 1px #1C1C1D;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
    width: 325px;
  }

  @media (max-width: 320px) {
    width: 315px;
    margin-left: 20px;
  }
`

const NoResultsText = styled.h3`
  color: white;
`

const NoResultsDirections = styled.p`
  color: #42C9FB;
  font-size: 18px;
  margin-top: 0;
`

const Entry = (props) => {
  const history = useHistory();
  const params = useParams();

  const workout = props.workouts.find((workout) => params.id === workout.id);
 
  if (!workout) {
    return (
      <NoResults>
        <NoResultsText>Looks like it's rest day!</NoResultsText>
        <NoResultsDirections>Navigate back to the home page to add a new workout.</NoResultsDirections>
      </NoResults>
    )
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
    history.push("/") 
  }

  return (
    <ViewContainer>
      <ViewHeader>
        <ViewTitleIcon>
          {(() => {
            switch (workout.fields.exercise) {
              case "Cycle": return <ViewIcon>{cycle}</ViewIcon>;
              case "Run": return <ViewIcon>{run}</ViewIcon>;
              case "Swim": return <ViewIcon>{swim}</ViewIcon>;
              case "Walk": return <ViewIcon>{walk}</ViewIcon>;
              case "Hiking": return <ViewIcon>{hike}</ViewIcon>;
              case "Strength Training": return <ViewIcon>{dumbbell}</ViewIcon>;                  
              case "HIIT": return <ViewIcon>{stopwatch}</ViewIcon>;
              case "Dance": return <ViewIcon>{dance}</ViewIcon>;
              case "Other": return <ViewIcon>{stopwatch}</ViewIcon>;
              default: return <ViewIcon>{stopwatch}</ViewIcon>
            }
          })()}  
          <ViewTitle>{workout.fields.exercise}</ViewTitle>
        </ViewTitleIcon>
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
          {formattedDuration === "0:0:0" || formattedDuration === ""
            ? <NoInput>No duration listed</NoInput>
            : <ViewData>{formattedDuration}</ViewData>}
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Average Heart Rate:</ViewLabels>
          {workout.fields.heartrate === 0 || workout.fields.heartrate === ""
            ? <NoInput>No heart rate listed</NoInput>
            : <ViewData>{workout.fields.heartrate} <small>BPM</small></ViewData>}
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Calories:</ViewLabels>
          {workout.fields.calories === 0 || workout.fields.calories === ""
            ? <NoInput>No calories listed</NoInput>
            : <ViewData>{workout.fields.calories} cal</ViewData>}
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Status:</ViewLabels>
          <ViewData>{workout.fields.status}</ViewData>
        </ViewDataRows>
        <ViewDataRows>
          <ViewLabels>Notes:</ViewLabels>
          {workout.fields.notes > 1
            ? <NoInput>No notes listed</NoInput>
            : <ViewData>{workout.fields.notes}</ViewData>}
        </ViewDataRows>
      </ViewDataContainer>
      <DeleteDiv onClick={handleDelete}>{deleteTrash}</DeleteDiv>
    </ViewContainer>
  )
}

export default Entry;