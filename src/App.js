import React from 'react';
import List from './List';
import './App.css'


function App(props) {

  const arrayOfLists = props.lists;
  const objectOfCards = props.allCards;
  const cardLists = arrayOfLists.map(list => list.cardIds.map(card => objectOfCards[card]));
  const listsToPrint = arrayOfLists.map((list, i) => <List key={Math.random()} header={list.header} cards={cardLists[i]} />);

  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className='App-List'>
          {listsToPrint}
      </div>
      
    </main>
  );
}

export default App;
