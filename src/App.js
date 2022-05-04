import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, SetPeople]= useState(data);
  return (
    <main>
      <section className="container">
        {(people.length>0)?<h3> {people.length} birthdays Today</h3>: <h3> No Birthdays</h3>}
        <List people={people} />
        {(people.length>0)?
        <button onClick={()=> SetPeople([])}>Clear All</button>:''}
      </section>
    </main>

  );

}

export default App;