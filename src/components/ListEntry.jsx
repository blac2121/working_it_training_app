import React from "react";
import { Link } from 'react-router-dom';


const ListEntry = (props) => {

  return (
    <main className="home-container">
      <div>
        <h2 className="home-header">Workouts</h2>
        <Link to="/add" className="add-entry-button"><button>Add</button> </Link>
      </div>
      <div className="home-entry-container">
        {props.workouts.map((entry) => (
          <Link to={`/exercise/${entry.id}`} >
            <div className="home-exercise-container" key={entry.id}>
              <div className="home-ex-icon">
                <h6>Icon hold</h6>
              </div>
              <div className="home-ex-data">
                <h3 className="home-exercise-title">{entry.fields.exercise}</h3>
                <p className="home-exercise-date">{entry.fields.date}</p>
                <p className="home-exercise-duration">{entry.fields.duration}</p>                        
              </div>
              <div className="home-ex-status">
                <p className="home-exercise-status">{entry.fields.status}</p>
              </div>
              <div className="home-ex-chevron">
                <h6>chevron</h6>
              </div>
            </div>
          </Link>
        ))
        }
      </div>
    </main>
  )
}

export default ListEntry;