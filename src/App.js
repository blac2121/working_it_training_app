import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from "axios";

import NavBar from "./components/NavBar";
import ViewEntry from "./components/ViewEntry";
import CreateEntry from "./components/CreateEntry";
import './App.css';

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [fetchEntries, setFetchEntries] = useState(false);

  useEffect(() => {
    const getWorkouts = async () => {
      const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/workouts`;
      const response = await axios.get(airtableURL, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
        },
      });
      setWorkouts(response.data.records); 
    }
    getWorkouts();
  }, [fetchEntries]);

  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <div className="home-container">
              <h2 className="home-header">Workouts</h2>
              <Link to="/add" className="add-entry-button">
                <button>Add</button>
              </Link>
              <div className="home-entry-container">
                {workouts.map((entry) => (
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
            </div>
          </Route>
          <Route path="/add">
            <CreateEntry fetchEntries={fetchEntries} setFetchEntries={setFetchEntries} />
          </Route>
          <Route path="/exercise/:id">
            <ViewEntry workouts={workouts} />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;