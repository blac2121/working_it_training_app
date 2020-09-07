import React from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
import styled from "styled-components";
import SubmitButton from "./SubmitButton";

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
    margin: 0 auto;
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
    flex-direction: column;
    align-items: flex-start;
    width: 500px;
  }
`

const ListTitleDiv = styled.div`
  text-align: left;

  @media (max-width: 768px) {
    margin-left: 20px;
    text-align: left;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
  }
`

const ListButtonDiv = styled.div`
  margin-left: 360px;

  @media (max-width: 768px) {
    margin: 0 auto;
  }

  @media (max-width: 425px) {
    margin: 0 auto;
  }

  @media (max-width: 320px) {
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

const dumbbell =
  <FontAwesomeIcon
    icon={faDumbbell}
    size="2x"
    color="#42C9FB"
  />
  
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
const chevron =
  <FontAwesomeIcon
    icon={faChevronCircleRight}
    size="2x"
    color="white"
  />
 

const ListEntry = (props) => {

  // const dateInput = new Date(entry.fields.date.replace(/-/g, '\/'))
  // const formattedDate = dateInput.toDateString()

 
  return (
    <Main>
      <ListHeader>
        <ListTitleDiv>
          <ListTitle>Workouts</ListTitle>
        </ListTitleDiv>
        <ListButtonDiv>
          <Link to="/add">
            <SubmitButton label="Add"></SubmitButton>
          </Link>
        </ListButtonDiv>
      </ListHeader>
      <div>
        {props.workouts.map((entry) => (
          <Link to={`/exercise/${entry.id}`} >
            <EntryCard key={entry.id}>
              <IconEntryCard>{dumbbell}</IconEntryCard>
              <DataEntryCard>
                <h3>{entry.fields.exercise}</h3>
                <DataStatus>{entry.fields.status}</DataStatus>                        
              </DataEntryCard>
              <ChevronEntryCard>{chevron}</ChevronEntryCard>
            </EntryCard>
          </Link>
        ))
        }
      </div>
    </Main>
  )
}

export default ListEntry;