import React, { useEffect, useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from "axios";

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
        <Link to="/" className="site-header"><h1>Working It</h1></Link>
      </header>
      <main>
        <Switch>
          <Route exact path="/">
            <div className="home-container">
              <h2 className="home-header">Workouts</h2>
              <Link to="/add"className="add-entry-button">Add</Link>
              <div className="home-entry-container">
                {workouts.map((workout, index) => (
                  <div className="home-entries">
                    <Link to={`/workout/${workout.exercise}`} > 
                      <h3 key={index}>{workout.excercise}</h3>  
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </Route>
        </Switch>
      </main>
      <CreateEntry fetchEntries={fetchEntries} setFetchEntries={setFetchEntries} />
    </div>
  );
}

export default App;