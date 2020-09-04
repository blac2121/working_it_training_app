import React from "react";
import { useParams } from 'react-router-dom';
// import axios from "axios";


// import EditEntry from "./EditEntry"

const Entry = (props) => {
  // const params = useParams();
  const { exercise } = props.entry.fields;
  // console.log(params.fields.exercise)

 
  // const { fetchEntries, setFetchEntries, entry } = props;

  // const handleDelete = async () => {
  //   const airtableURL = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE}/frylife/${entry.id}`;
  //   await axios.delete(airtableURL, {
  //     headers: {
  //       'Authorization': `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
  //     }
  //   });
  //   setFetchEntries(!fetchEntries);
  // }

  return (
    <div>
      <h4>{exercise}</h4>
      {/* <p>{date}</p> */}
      {/* <EditEntry
        fetchEntries={fetchEntries}
        setFetchEntries={setFetchEntries}
        entry={entry}
      /> */}
      {/* <button onClick={handleDelete}>Delete</button> */}
    </div>
  )
}

export default Entry;