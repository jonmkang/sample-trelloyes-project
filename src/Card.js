import React from 'react';
import './Card.css';

class Card extends React.Component{

    render(){
        const cardToPrint = this.props.allCards[this.props.card];
        return (
        <div className='Card' id={this.props.id}>
            <h3>{cardToPrint.title}</h3>
            <p>{cardToPrint.content}</p>
            <button onClick={() => this.props.deleteCard(Math.floor(this.props.id/10-1), this.props.card)} type='button'>Delete</button>
        </div>
        )
    }    
}

export default Card;