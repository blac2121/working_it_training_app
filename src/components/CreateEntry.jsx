import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";
import Select from "react-select";

import SubmitButton from "./SubmitButton";

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #4C4C4D;
  width: 475px;
  margin: 30px auto;
  padding: 20px;
  color: white;
  box-shadow: 1px 1px 1px 1px #1C1C1D;

  @media (max-width: 768px) {
    margin: 20px auto;
  }

  @media (max-width: 425px) {
    width: 275px;
    margin: 20px auto;
  }

  @media (max-width: 320px) {
    width: 275px;
    margin: 20px auto;
  }
`

const AddHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
`

const AddTitle = styled.h3`
  color: white;
  font-size: 32px;
`

const AddForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px 25px 25px 25px;
  width: 415px;
`

const InvalidInput = styled.p`
  color: #42C9FB;
`

const DateInput = styled.div`
  margin-bottom: 20px;
  width: 415px;
`

const DateField = styled.input`
  border-radius: 2px;
  border: 1px solid white;
  height: 35px;
  width: 100%;
  font-family: 'Titillium Web';
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
`

const ExerciseInput = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 440px;
  }

  @media (max-width: 425px) {
    width: 225px;
  }
`

const Duration = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 415px;
`

const DurationLabel = styled.label`
  margin-bottom: 5px;
`

const HoursLabel = styled.label`
  margin-right: 7px;

  @media (max-width: 425px) {
    margin-right: 22px;
  }
`

const MinutesLabel = styled.label`
  margin-right: 7px;

  @media (max-width: 425px) {
    margin-right: 8px;
  }
`

const SecondsLabel = styled.label`
  margin-right: 7px;

  @media (max-width: 425px) {
    margin-right: 6px;
  }
`

const NumbersInput = styled.div`
  margin-bottom: 20px;
`

const TimeInput = styled.input`
  width: 40px;
  height: 25px;
  border: 1px solid white;
  border-radius: 2px;
  margin-top: 8px;

  @media (max-width: 425px) {
    margin: 10px;
    border: 1px solid white;
    border-radius: 2px;
  }
`

const DurationInputs = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
`

const StatusInput = styled.div`
  margin-bottom: 20px;
  width: 100%;

  @media (max-width: 768px) {
    width: 440px;
  }

  @media (max-width: 425px) {
    width: 225px;
  }
`

const NotesInput = styled.div`
  margin-bottom: 20px;
  width: 100%;
`

const NotesField = styled.textarea`
  font-family: 'Titillium Web';

  @media (max-width: 768px) {
    width: 440px;
  }

  @media (max-width: 425px) {
    width: 220px;
  }
`

const ButtonDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 220px;
  }
`

const Cancel = styled.button`
  background-color: #A7A5A5; 
  border: none;
  color: #3A3A3A;
  padding: 15px 24px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    background: #848383;
  }

  @media (max-width: 425px) {
    width: 225px;
    margin-bottom: 15px;
  }
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
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [seconds, setSeconds] = useState("");
  const [duration, setDuration] = useState(0);
  const [heartrate, setHeartRate] = useState(undefined);
  const [calories, setCalories] = useState(undefined);
  const [status, setStatus] = useState("");
  const [notes, setNotes] = useState("");
  const [dateIsValid, setDateIsValid] = useState(true);
  const [exerciseIsValid, setExerciseIsValid] = useState(true);
  const [statusIsValid, setStatusIsValid] = useState(true);
  const history = useHistory();

 // Sets and Processes Exercise Drop Down
  const exerciseOptions = [
    { value: 'Cycle', label: 'Cycle' },
    { value: 'Run', label: 'Run' },
    { value: 'Swim', label: 'Swim' },
    { value: 'Walk', label: 'Walk' },
    { value: 'Hiking', label: 'Hiking' }, 
    { value: 'Strength Training', label: 'Strength Training' },
    { value: 'HIIT', label: 'HIIT' },
    { value: 'Dance', label: 'Dance' },
    { value: 'Other', label: 'Other' },
  ];

  for (let key in exercise) {
    key === "value" && setExercise(exercise[key])
  }


  // Sets and Processes Status Drop Down
  const statusOptions = [
    { value: "Not Challenging", label: "Not Challenging" },
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
      heartrate,
      calories,
      status,
      notes,
    };    
    

    if (date === "") {
      setDateIsValid(false);
    }
    
    if (exercise === "") {
      setExerciseIsValid(false);
    }
        
    if (status === "") {
      setStatusIsValid(false);
    }
    
    else {
      
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
      await axios.post(airtableURL, { fields }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
          'Content-Type': 'application/json',
        }
      });
      props.setFetchEntries(!props.fetchEntries)
      history.push("/")
    }  
  }

  const handleCancel = () => {
    history.push("/")
  }

  const calculateDuration = () => {
    setDuration((hours * 3600) + (minutes * 60) + (seconds * 1))
  }

  useEffect(() => { 
    calculateDuration();
  }, [calculateDuration])


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
            <DateField
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />       
            {dateIsValid ? null : <InvalidInput>Date required</InvalidInput> }
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
            {exerciseIsValid ? null : <InvalidInput>Exercise required</InvalidInput>}
          </div>
        </ExerciseInput>
        <Duration>
          <div>
            <DurationLabel>Duration</DurationLabel>
          </div>
          <DurationInputs>
            <div>
              <HoursLabel htmlFor="hours">Hours</HoursLabel>
              <TimeInput
                type="number"
                name="hours"
                min="0"
                max="24"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              />                    
            </div>
            <div>
              <MinutesLabel htmlFor="minutes">Minutes</MinutesLabel>
              <TimeInput
                type="number"
                name="minutes"
                min="0"
                max="59"        
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
              />                
            </div>
            <div>
              <SecondsLabel htmlFor="seconds">Seconds</SecondsLabel>
              <TimeInput
                type="number"
                name="seconds"
                min="0"
                max="59"         
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
              />                               
            </div>
          </DurationInputs>  
        </Duration>
        <NumbersInput>
          <HoursLabel htmlFor="heartrate">Avg Heart Rate</HoursLabel>
          <TimeInput
            name="heartrate"
            type="number"
            min="0"
            max="300"
            value={heartrate}
            onChange={(e) => setHeartRate(parseInt(e.target.value || 0))}
          />             
        </NumbersInput>
        <NumbersInput>
          <HoursLabel htmlFor="calories">Calories</HoursLabel>
          <TimeInput
            name="calories"
            type="number"
            min="0"
            max="100000"
            value={calories}
            onChange={(e) => setCalories(parseInt(e.target.value || 0))}
          />             
        </NumbersInput>
        <StatusInput>
          <div>
            <label htmlFor="status">Status</label>
          </div>
          <div>
            <Select
              name="status"
              styles={dropdownStyle}
              menuColor='black'
              defaultValue={status}
              options={statusOptions}        
              onChange={setStatus}
            />     
            {statusIsValid ? null : <InvalidInput>Status required</InvalidInput>}
          </div>
        </StatusInput>
        <NotesInput>
          <div>
            <label htmlFor="notes">Notes</label>
          </div>
          <div>
            <NotesField
              name="notes"
              rows="5"
              cols="65"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />             
          </div>
        </NotesInput>
        <ButtonDiv>
          <Cancel onClick={handleCancel}>Cancel</Cancel>
          <SubmitButton label="Save" onClick={props.onSubmit}></SubmitButton>
        </ButtonDiv>
      </AddForm>  
    </AddContainer>  
  )
}

export default CreateEntry;