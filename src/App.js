import React from 'react';
import List from './List';
import './App.css'



class App extends React.Component{
  state = {
    lists: this.props.lists,
    allCards: this.props.allCards
  }

  addRandomCard = (index) => {
    const id = Math.random().toString(36).substring(2, 4) + Math.random().toString(36).substring(2, 4);
    let newCard = {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum'
    }

    const newCards = this.state.allCards;
    newCards[newCard.id] = newCard;
    this.setState({
      allCards: newCards
    })

    const newList = this.state.lists[index].cardIds;
    newList.push(newCard.id);
    this.setState(newList);

  }

  deleteCard = (index, card) => {
    console.log(index)
    const newList = this.state.lists[index].cardIds.filter(itm => itm !== card)
    this.setState(this.state.lists[index].cardIds = newList)
  }

  render(){
    return (
      <main className='App'>
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-List'>
            {this.state.lists.map((list, index) => <List key={this.state.lists[index].id} addRandomCard={this.addRandomCard} list={this.state.lists[index]} allCards={this.state.allCards} deleteCard={this.deleteCard}
            />)}
        </div>
      </main>
    )
  }
}

export default App;
