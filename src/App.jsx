import { useState } from 'react';
import './App.css'
import { sculptureList } from './assets/data';

function App() {
  return (
    <Greeting text={"Hello world!"}/>
  );
}

export default App

export function Greeting({text}) {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  )
}
