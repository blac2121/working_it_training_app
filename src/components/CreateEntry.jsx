import React, { useState } from "react";
import axios from "axios";

const CreateEntry = (props) => {
  const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [duration, setDuration] = useState("")

  const calculateDuration = () => {
    const hourConversion = hours * 3600
    const minuteConversion = minutes * 60
    const totalDuration = (hourConversion + minuteConversion + seconds)
    setDuration(totalDuration);

    duration = ((hours * 3600) + (minutes * 60) + seconds)
  }

  console.log(calculateDuration())

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      date,
      exercise,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
    await axios.post(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      }
    });
    props.setFetchEntries(!props.fetchEntries) 
    setDate("");
    setExercise("");
  }

  

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add</button>
    </form>
  )
}

export default CreateEntry;