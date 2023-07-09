import { useState } from 'react';
import { peopleData } from '../data';
import { List } from '.';

export const App = () => {
  const [people, setPeople] = useState(peopleData);

  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  );
};
