import React, { Component } from 'react';
import './Cart.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CartActions from '../actions/cart';
import Shelf from 'shelf';



class Cart extends Component {
    constructor(props){
        super(props);

    }


    render() {
        const CartItems = this.props.cart.map((item, idx) => {
            return <li key={idx}></li>
        });

        return (
        <div className="Cart">
            <Shelf addItem={this.props.actions.addToCart} />
            <h2>Shopping Bag</h2>

            <ol>
                CartItems
            </ol>
        </div>
        );
    }
}

function  mapStateToProps(state, props) {
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch, props){
    return {
        actions: bindActionCreators(CartActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
