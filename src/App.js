import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import axios from "axios";

import NavBar from "./components/NavBar";
import ListEntry from "./components/ListEntry";
import ViewEntry from "./components/ViewEntry";
import CreateEntry from "./components/CreateEntry";
import EditEntry from "./components/EditEntry";
import FooterBar from "./components/FooterBar";
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
            <ListEntry workouts={workouts} />  
          </Route>
          <Route path="/add">
            <CreateEntry fetchEntries={fetchEntries} setFetchEntries={setFetchEntries} />
          </Route>
          <Route path="/exercise/:id">
            <ViewEntry workouts={workouts} fetchEntries={fetchEntries} setFetchEntries={setFetchEntries} />
          </Route>
          <Route path="/edit/:id">
            <EditEntry workouts={workouts} fetchEntries={fetchEntries} setFetchEntries={setFetchEntries}/>
          </Route>
        </Switch>
      </main>
      <footer>
        <FooterBar />
      </footer> 
    </div>
  );
}
export default App;