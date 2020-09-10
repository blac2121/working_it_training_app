import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBiking, faRunning, faSwimmer, faWalking, 
  faHiking, faDumbbell, faStopwatch20, faMusic, 
  faChevronCircleRight, faTint, faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const drop =
  <FontAwesomeIcon
    icon={faTint}
    size="1x"
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

const chevron =
  <FontAwesomeIcon
    icon={faChevronRight}
    size="2x"
    color="white"
    className="chevron-icon"
  />

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3A3A3A;
  margin: 0px auto;
  width: 600px;
  box-shadow: 1px 1px 1px 1px #1C1C1D;
  @media (max-width: 768px) {
    width: 500px;
  }
  @media (max-width: 425px) {
    margin: 5px auto;
    width: 325px;
  }
  @media (max-width: 320px) {
    width: 315px;
    margin-left: 20px;
  }
`

const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
  align-items: center;
  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 425px) {
    flex-direction: column;
  }
`

const AddButton = styled.button`
  background-color: #42C9FB; 
  border: none;
  color: #3A3A3A;
  padding: 15px 32px;
  font-size: 16px;
  border-radius: 2px;
  cursor: pointer;
  font-weight: 700;
  &:hover {
    background: #60ADCA;
  }
   @media (max-width: 425px) {
    width: 275px;
  }
`

const ListTitle = styled.h3`
  color: white;
  font-size: 36px;
`

const EntryCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: #4C4C4D;
  box-shadow: 1px 1px 1px 1px #282829;
  width: 500px;
  height: 150px;
  margin: 30px;
  color: white;
  transition: all .2s ease-in-out;
  border-radius: 2px;
  &:hover {
    background: #4F4E4E;
    transform: scale(1.03);
  }
  @media (max-width: 768px) {
    width: 450px;
  }
  @media (max-width: 425px) {
    width: 275px;
  }
  @media (max-width: 320px) {
    width: 275px;
  }
`

const IconEntryCard = styled.div`
  width: 125px;
  text-align: center;
  @media (max-width: 320px) {
    display: none;
  }
`

const DataTitleCard = styled.h3`
  font-size: 24px;
  margin-bottom: 0px;
  @media (max-width: 425px) {
    font-size: 20px;
  }
`
  
const DataEntryCard = styled.div`
  width: 275px;
  @media (max-width: 320px) {
    width: 295px;
  }
`

const DataStatus = styled.p`
  font-style: italic;
  font-size: 18px;
  @media (max-width: 425px) {
    font-size: 16px;
  }
`

const StatusEntryCard = styled.div`
  flex-grow: 1;
  @media (max-width: 320px) {
    margin-left: 10px;
  }
`

const ChevronEntryCard = styled.div`
  width: 100px;
  cursor: pointer;
  @media (max-width: 425px) {
    width: 75px;
  }
`    

const ListEntry = (props) => {

  return (
    <Main>
      <ListHeader>
        <div>
          <ListTitle>Workouts</ListTitle>
        </div>
        <div>
          <Link to="/add">
            <AddButton>Add</AddButton>
          </Link>
        </div>
      </ListHeader>
      <div>
        {props.workouts.sort((a, b) => b.fields.date.localeCompare(a.fields.date))
          .map((entry, index) => {
            return (
              <div key={index}>
                <Link to={`/exercise/${entry.id}`} >
                  <EntryCard key={entry.id}>
                    {(() => {
                      switch (entry.fields.exercise) {
                        case "Cycle": return <IconEntryCard>{cycle}</IconEntryCard>;
                        case "Run": return <IconEntryCard>{run}</IconEntryCard>;
                        case "Swim": return <IconEntryCard>{swim}</IconEntryCard>;
                        case "Walk": return <IconEntryCard>{walk}</IconEntryCard>;
                        case "Hiking": return <IconEntryCard>{hike}</IconEntryCard>;
                        case "Strength Training": return <IconEntryCard>{dumbbell}</IconEntryCard>;                  
                        case "HIIT": return <IconEntryCard>{stopwatch}</IconEntryCard>;
                        case "Dance": return <IconEntryCard>{dance}</IconEntryCard>;
                        case "Other": return <IconEntryCard>{stopwatch}</IconEntryCard>;
                        default: return <IconEntryCard>{stopwatch}</IconEntryCard>
                      }
                    })()}  
                    <DataEntryCard>
                      <DataTitleCard>{entry.fields.exercise}</DataTitleCard>                   
                      {(() => {
                        switch (entry.fields.status) {
                          case "Not Challenging": return <DataStatus>{drop} {entry.fields.status}</DataStatus>;
                          case "Still Challenging": return <DataStatus>{drop} {drop} {entry.fields.status}</DataStatus>;
                          case "Too Challenging": return <DataStatus>{drop} {drop} {drop} {entry.fields.status}</DataStatus>;
                          default: return <StatusEntryCard></StatusEntryCard>
                        }
                      })()}
                    </DataEntryCard>
                    <ChevronEntryCard>{chevron}</ChevronEntryCard>
                  </EntryCard>
                </Link>
              </div >
            )
          })
        }
      </div>
    </Main>
  )
}
export default ListEntry;