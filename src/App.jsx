import { useState } from 'react'
import {thingsList} from './things'

import './App.css'

function App() {
  const [things, setThings] = useState(thingsList)
const [singleThing, setSingleThing] = useState(null)


  return (
    <div>
      <h1>Hello World</h1>
      <ul>
       { 
       things.map((thing) => {
        return(
        <li key={thing.id}>{thing.name}</li>
      ) }
       
      </ul>
    </div>
  )
}

export default App
