import React from 'react';
import Card from './Card';
import './List.css';

function List(props){
    
    const arrayOfCards = props.cards.map((card, i) => <Card key={Math.random()} title={card.title} content={card.content} />)

    return (
        <section className='List'>
            <header className='List-header'>
                {props.header}
            </header>
            <div className='List-cards'>
                {arrayOfCards}
            </div>
        </section>
    )
}

export default List;