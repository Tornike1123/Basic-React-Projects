import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);   {/* -- 1 -- */}

  return (
    <main>
      <section className="container">
        <h3>Your {people.length} Friend have Birthdays Today</h3>  {/* -- 3 -- */}
        <List people={people} />  {/* -- 2 -- */}
        <button onClick={() => setPeople([])}>Clear All</button>
      </section>
    </main>
  )
}

export default App;

// 1. Initialize useState, set default value of state
// 2. setup 'people' Prop ('people' Prop = 'people' initialized state => data[])
// 3. {people.length} ---> number of objects in data file, that has an Array[]
