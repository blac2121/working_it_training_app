import React, { useState } from "react";
import axios from "axios";

const CreateEntry = (props) => {
  // const [date, setDate] = useState("");
  const [exercise, setExercise] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      // date,
      exercise,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
    await axios.post(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      }
    });
    props.setFetchEntries(!props.fetchEntries) // this will say make it the other boolean so it fires
    // setDate("");
    setExercise("");
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <label htmlFor="date">Date:</label>
      <input
        type="date"
        name="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />       */}
      <label htmlFor="exercise">Exercise:</label>
      <input
        type="text"
        name="exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
      />     
      <button type="submit">Add</button>
    </form>
  )
}

export default CreateEntry;