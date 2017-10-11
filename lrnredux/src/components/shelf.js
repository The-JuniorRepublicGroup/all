import React, { Component } from 'react';
import './Shelf.css';

class Shelf extends Component {

    constructor(props){
        super(props);

        this.state = {
            shelfItems: [
                'shampoo',
                'chocolate',
                'yogurt'
            ]
        }
    }


    render() {
        const shelfItems = this.state.shelfItems.map((item, idx) => {
            return <li key={idx}><button>[+]</button>{item}</li>
        });


        return (
        <div className="Shelf">
            <h2>Shelf</h2>
                <ul>
                    {shelfItems}
                </ul>
        </div>
        );
    }
}

export default Shelf;
