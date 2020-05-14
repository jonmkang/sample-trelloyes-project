import React from 'react';
import List from './List';
import './App.css'

function App(props) {
  const arrayOfLists = props.store.lists;
  const objectOfCards = props.store.allCards;
  const cardLists = arrayOfLists.map(list => list.cardIds.map(card => objectOfCards[card]))
  const lists = arrayOfLists.map((list, i) => <List key={Math.random()} header={list.header} cards={cardLists[i]} />)

  return (
    <main className='App'>
      <header className="App-header"><h1>Trelloyes!</h1></header>
      <div className='App-List'>
          {lists}
      </div>
    </main>
  );
}

export default App;
