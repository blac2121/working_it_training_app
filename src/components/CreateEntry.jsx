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
  height: 60px;
`
const AddTitle = styled.h3`
  color: white;
  font-size: 24px;
`

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5px 25px 25px 25px;
`

const DateInput = styled.div`
  margin-bottom: 20px;
`

const ExerciseInput = styled.div`
  margin-bottom: 20px;
  width: 275px;
`

const Duration = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

const DurationLabel = styled.h4`
  margin-bottom: 5px;
`

const DurationInputs = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatusInput = styled.div`
  margin-bottom: 20px;
  width: 275px;
`


const dropdownStyle = {
  menu: (provided, selector) => ({
    ...provided,
    width: 300,
    color: selector.selectProps.menuColor,
    padding: 20,
  })
}


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
    { value: 'Walk', label: 'Walk' },
    { value: 'Rower', label: 'Rower' },
    { value: 'Elliptical', label: 'Elliptical' },
    { value: 'High Intensity Interval Training', label: 'High Intensity Interval Training' },
    { value: 'Stair Stepper', label: 'Stair Stepper' },
    { value: 'Hiking', label: 'Hiking' },
    { value: 'Yoga', label: 'Yoga' },
    { value: 'Dance', label: 'Dance' },
    { value: 'Strength Training', label: 'Strength Training' },
    { value: 'Other', label: 'Other' },
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
        <DateInput>
          <div>
            <label htmlFor="date">Date</label>
          </div>
          <div>
            <input
            type="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            />                       
          </div>
        </DateInput>
        <ExerciseInput>
          <div>
            <label htmlFor="exercise">Exercise</label>
          </div>
          <div>
            <Select
              name="exercise"
              styles={dropdownStyle}
              menuColor='black'
              defaultValue={exercise}
              options={exerciseOptions}        
              onChange={setExercise}
            />                      
          </div>
        </ExerciseInput>
        <Duration>
          <div>
            <DurationLabel>Duration</DurationLabel>
          </div>
          <DurationInputs>
            <label htmlFor="hours">Hours</label>
            <input
              type="number"
              name="hours"
              min="0"
              max="24"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
            />      
            <label htmlFor="minutes">Minutes</label>
            <input
              type="number"
              name="minutes"
              min="0"
              max="59"        
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />  
            <label htmlFor="seconds">Seconds</label>
            <input
              type="number"
              name="seconds"
              min="0"
              max="59"         
              value={seconds}
              onChange={(e) => setSeconds(e.target.value)}
            />                 
          </DurationInputs>  
        </Duration>
        <StatusInput>
          <div>
            <label htmlFor="status">Status</label>
          </div>
          <div>
            <Select
              name="status"
              styles={dropdownStyle}
              // width=300
              menuColor='black'
              defaultValue={status}
              options={statusOptions}        
              onChange={setStatus}
            />              
          </div>
        </StatusInput>
        <div>
          <div>
            <label htmlFor="notes">Notes</label>
          </div>
          <div>
            <input
              type="text"
              name="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />             
          </div>
        </div>
        <div>
          <button type="reset">Cancel</button>
          <button type="submit">Add</button> 
        </div>
      </AddForm>  
    </AddContainer>  
  )
}

export default CreateEntry;