import { useState } from 'react';
import './App.css';
import {data} from './data.js'

function App() {

  const[search,setSearch]=useState("")
  const handleSearch=()=>{
    return data.filter((name)=>(
      name.first_name.toLowerCase().includes(search)||
      name.last_name.toLowerCase().includes(search)||
      name.email.toLowerCase().includes(search)
    ))
  }


  return (
    <div className="app">
      <input type="text" placeholder="Search...." className='search' onChange={(e)=>{setSearch(e.target.value)}}/>
      <div className='data'>
      {
      handleSearch().map(data=>(
          <div className='data_item'>
            <h3>Name :{data.first_name} {data.last_name}</h3>
            <h4>Email: {data.email}</h4>
            <h4>Gender: {data.gender}</h4>
          </div>
        ))
      }
      </div>
    </div>
  );
}

export default App;
