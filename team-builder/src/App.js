import React, { useState } from 'react';
import List from './List';
import Form from './Form';

import './App.css';


function App() {
  const names = [
    {name: 'Naruto',  email: 'Dattabyo@OP.com', role: 'Savior'},
    {name: 'Minato', email: 'YellowFlash@smile.com', role: 'OP-Father'}, 
    {name: 'Itachi', email: 'Mangekyo@Sharinggon.com', role: 'Ninja hero'}];

  const [list, setList] = useState(names);

  const NewGuy = (newData) => {
    setList([...list, newData])
  };

  return (
    <div className="App" >
      <Form newData = {NewGuy}/>
      <List people = {list} />
    </div>
  );
}

export default App;