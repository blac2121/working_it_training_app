import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBiking } from "@fortawesome/free-solid-svg-icons"
import { faRunning } from "@fortawesome/free-solid-svg-icons"
import { faSwimmer } from "@fortawesome/free-solid-svg-icons"
import { faWalking } from "@fortawesome/free-solid-svg-icons"
import { faHiking } from "@fortawesome/free-solid-svg-icons"
import { faDumbbell } from "@fortawesome/free-solid-svg-icons"
import { faStopwatch20 } from "@fortawesome/free-solid-svg-icons"
import { faMusic } from "@fortawesome/free-solid-svg-icons"
import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons"


const cycle =
  <FontAwesomeIcon
    icon={faBiking}
    size="2x"
    color="#42C9FB"
  />

const run =
  <FontAwesomeIcon
    icon={faRunning}
    size="2x"
    color="#42C9FB"
  />

const swim =
  <FontAwesomeIcon
    icon={faSwimmer}
    size="2x"
    color="#42C9FB"
  />

const walk =
<FontAwesomeIcon
  icon={faWalking}
  size="2x"
  color="#42C9FB"
/>
const hike =
  <FontAwesomeIcon
    icon={faHiking}
    size="2x"
    color="#42C9FB"
  />

const dumbbell =
  <FontAwesomeIcon
    icon={faDumbbell}
    size="2x"
    color="#42C9FB"
  />

const stopwatch =
  <FontAwesomeIcon
    icon={faStopwatch20}
    size="2x"
    color="#42C9FB"
  />

const dance =
  <FontAwesomeIcon
    icon={faMusic}
    size="2x"
    color="#42C9FB"
  />

const chevron =
  <FontAwesomeIcon
    icon={faChevronCircleRight}
    size="2x"
    color="white"
  />

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #3A3A3A;
  margin: 0 auto;
  width: 600px;
  box-shadow: 1px 1px 1px 1px #1C1C1D;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 425px) {
    margin: 20px auto;
    width: 325px;
  }

  @media (max-width: 320px) {
    width: 315px;
    margin-left: 20px;
  }
`

const ListHeader = styled.div`
  display: flex;
  align-items: flex-end;

  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 0 auto;
  }
`

const ListTitleDiv = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    margin-left: 20px;
    text-align: left;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`

const ListButtonDiv = styled.div`
  margin-left: 360px;

  @media (max-width: 768px) {
    margin-left: 270px;
  }

  @media (max-width: 425px) {
    margin-left: 26px;
  }

  @media (max-width: 320px) {
    margin: 0 auto;
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
    margin: 0 auto;
  }
`

const ListTitle = styled.h3`
  color: white;
  font-size: 24px;
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
  flex-grow: 1;
  text-align: center;

  @media (max-width: 320px) {
    display: none;
  }
`
  
const DataEntryCard = styled.div`
  flex-grow: 2;

  @media (max-width: 320px) {
    margin-left: 10px;
  }
`

const DataStatus = styled.p`
  font-style: italic;
`

const ChevronEntryCard = styled.div`
  flex-grow: 1;
  cursor: pointer;
`    

const ListEntry = (props) => {

  return (
    <Main>
      <ListHeader>
        <ListTitleDiv>
          <ListTitle>Workouts</ListTitle>
        </ListTitleDiv>
        <ListButtonDiv>
          <Link to="/add">
            <AddButton>Add</AddButton>
          </Link>
        </ListButtonDiv>
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
                      <h3>{entry.fields.exercise}</h3>
                      <DataStatus>{entry.fields.status}</DataStatus>                        
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