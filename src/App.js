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
      
      <CreateEntry fetchEntries={fetchEntries} setFetchEntries={setFetchEntries} />
    </div>
  );
}

export default App;