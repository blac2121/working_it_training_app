import React, { useState, useEffect } from "react";
import axios from "axios";

const CreateEntry = (props) => {
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [duration, setDuration] = useState(0)
  const [status, setStatus] = useState("")
  const [notes, setNotes] = useState("")

  const calculateDuration = () => {
    setDuration((hours * 3600) + (minutes * 60) + (seconds * 1))
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

  useEffect(() => { 
    calculateDuration();
  })

  return (
    <form className="add-container" onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />      
      <label htmlFor="exercise">Exercise:</label>
      <input
        type="text"
        name="exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
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
      <label htmlFor="notes">Status:</label>
      <input
        type="text"
        name="status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      /> 
      <label htmlFor="notes">Notes:</label>
      <input
        type="text"
        name="notes"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      /> 
      <button className="add-button" type="submit">Add</button>
    </form>
  )
}

export default CreateEntry;