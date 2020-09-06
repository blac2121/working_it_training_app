import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Select from 'react-select';

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4C4C4D;
  width: 500px;
  margin: 30px auto;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 1px 1px #282829;
`
const AddHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const AddTitle = styled.h3`
  color: white;
  font-size: 24px;
`

const AddForm = styled.form`
  text-align: left;
  padding: 30px;
  display: flex;
  flex-direction: column;
`

const CreateEntry = (props) => {
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0)
  const [status, setStatus] = useState("")
  const [notes, setNotes] = useState("")

 // Sets and Processes Exercise Drop Down
  const exerciseOptions = [
    { value: 'Cycle', label: 'Cycle' },
    { value: 'Run', label: 'Run' },
    { value: 'Swim', label: 'Swim' },
  ];

  for (let key in exercise) {
    key === "value" && setExercise(exercise[key])
  }

  // Sets and Processes Status Drop Down
  const statusOptions = [
    { value: "Ready for a Challenge", label: "Ready for a Challenge" },
    { value: "Still Challenging", label: "Still Challenging" },
    { value: "Too Challenging", label: "Too Challenging" },
  ];

  for (let key in status) {
    key === "value" && setStatus(status[key])
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    const fields = {
      date,
      exercise,
      duration,
      status,
      notes
    };

    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
    await axios.post(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      }
    });

    props.setFetchEntries(!props.fetchEntries) 
  }

  const calculateDuration = () => {
    setDuration((hours * 3600) + (minutes * 60) + (seconds * 1))
  }

  useEffect(() => { 
    calculateDuration();
  })

  return (
    <AddContainer>
      <AddHeader>
        <AddTitle>Add Workout</AddTitle>
      </AddHeader>
      <AddForm onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />      
        <label htmlFor="exercise">Exercise:</label>
        <Select
          name="exercise"
          defaultValue={exercise}
          options={exerciseOptions}        
          onChange={setExercise}
        />
        <h4>Duration:</h4>
        <label htmlFor="hours">Hours:</label>
        <input
          type="number"
          name="hours"
          min="0"
          max="24"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
        />      
        <label htmlFor="minutes">Minutes:</label>
        <input
          type="number"
          name="minutes"
          min="0"
          max="59"        
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />  
        <label htmlFor="seconds">Seconds:</label>
        <input
          type="number"
          name="seconds"
          min="0"
          max="59"         
          value={seconds}
          onChange={(e) => setSeconds(e.target.value)}
        />       
        <label htmlFor="status">Status:</label>
        <Select
          defaultValue={status}
          options={statusOptions}        
          onChange={setStatus}
        />
        <label htmlFor="notes">Notes:</label>
        <input
          type="text"
          name="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        /> 
        <button className="add-button" type="submit">Add</button>
      </AddForm>  
    </AddContainer>  
  )
}

export default CreateEntry;