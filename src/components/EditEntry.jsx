import React, { useState } from "react";
import axios from "axios";

const EditEntry = (props) => {
  const [exercise, setExercise] = useState(props.entry.fields.exercise);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      exercise,
    };
    const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
    await axios.put(airtableURL, { fields }, {
      headers: {
        'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        'Content-Type': 'application/json',
      }
    });
    props.setFetchEntries(!props.fetchEntries)
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
      <button type="submit">Save</button>
    </form>
  )
}

export default EditEntry;