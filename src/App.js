import './App.css';
import React, { useState, useEffect } from 'react'

import Table from "./Table";

function App() {

  const [covid_data, set_data] = useState([])
  const [value, setValue] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch('https://api.covid19api.com/summary')
      let data = await response.json()
      console.log(data['Countries'][0])
      set_data(data['Countries'])
    }
    
    fetchMyAPI()
  }, [])

  const data = covid_data.map(item => {
    return {
      'Country' : item.Country,
      'ActiveCases' : item.TotalConfirmed - (item.TotalDeaths - item.TotalRecovered),
      'TotalConfirmed' : item.TotalConfirmed,
      'TotalDeaths' : item.TotalDeaths
    }
  })

  const search_data = data.filter((item) =>
      item.Country.toLowerCase().includes(value.toLowerCase())
    )


  return (
    <div className="App">
      <div className='head'>
        <h1> Covid 19 Statistics of Various Countries </h1>
      </div>
      <input
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Enter Country Name"
        autoFocus
      />
      
      <Table data={search_data} />
    </div>
  );
}

export default App;
