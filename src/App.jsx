import { useEffect, useState } from 'react'
import './App.css'
import { people } from './data/Data'
import { getImageUrl } from './function/Util'

function App() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
        {' ' + person.profession + ' '}
        known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

export default App
