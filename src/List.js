import React from 'react';
import Card from './Card';
import './List.css';

class List extends React.Component{
    render(){
        return (
        <section className='List'>
            <header className='List-header'>
                {this.props.list.header}
            </header>
            <button className='List-add-button' type="button" onClick={() => this.props.addRandomCard(this.props.list.id - 1)}>Add random card</button>
            <div className='List-cards'>
                {this.props.list.cardIds.map((card, index) => <Card id={this.props.list.id*10 + index} card={card} allCards={this.props.allCards} deleteCard={this.props.deleteCard}/>)}
            </div>
        </section>
    )}
}

export default List;