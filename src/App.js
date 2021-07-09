import './App.scss';
import Value  from "./Components/Value/value"
import { React, useState} from 'react';
const axios = require('axios');


function App() {
  const [hit, setHit] = useState();

  async function getValue() {
    try {
      const response = await axios.get('https://api.countapi.xyz/hit/countapi.xyz/1ccb732e-b55a-4404-ad3f-0f99c02fe44e');
      const {data: {value} } = response
      setHit(value);
    } catch (error) {
        throw error;
    }
  }

  return (
    <div className='counter-app'>
      <div className='page-hit'>
        <p>This page was visited</p>
        <Value props={hit}/> 
        <p>Times</p>
      </div> 

      <div className='button-view'>
        <button onClick={getValue}> Hit</button>
      <p>Please click to update! </p>
      </div>
    </div>
  );
}

export default App;
