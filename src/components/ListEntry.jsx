import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components'


const ListEntry = (props) => {

  const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const ListHeader = styled.div`
    display: flex;
    align-items: flex-end;
  `

  const ListTitleDiv = styled.div`
    text-align: left;
  `

  const ListButtonDiv = styled.div`
    margin-left: 360px;
  `

  const ListTitle = styled.h3`
    color: white;
    font-size: 24px;
  `

  const AddButton = styled.button`
    background-color: #212FAD; 
    border: none;
    color: white;
    padding: 15px 32px;
    font-size: 16px;
  `

  const EntryCard = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #4C4C4D;
    width: 500px;
    height: 150px;
    margin: 30px;
    color: white;
    text-decoration: none;
  `

  const IconEntryCard = styled.div`
    flex-grow: 1;
    padding: 10px;
  `
 
  const DataEntryCard = styled.div`
    flex-grow: 2;
  `

  const StatusEntryCard = styled.div`
    flex-grow: 1;
  `
  
  const ChevronEntryCard = styled.div`
    flex-grow: 1;
    color: #4402F5;
  `    
  
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
        {props.workouts.map((entry) => (
          <Link to={`/exercise/${entry.id}`} >
            <EntryCard key={entry.id}>
              <IconEntryCard>
                <h6>Icon hold</h6>
              </IconEntryCard>
              <DataEntryCard>
                <h3>{entry.fields.exercise}</h3>
                <p>{entry.fields.date}</p>
                <p>{entry.fields.duration}</p>                        
              </DataEntryCard>
              <StatusEntryCard>
                <p>{entry.fields.status}</p>
              </StatusEntryCard>
              <ChevronEntryCard>
                <h6>chevron</h6>
              </ChevronEntryCard>
            </EntryCard>
          </Link>
        ))
        }
      </div>
    </Main>
  )
}

export default ListEntry;