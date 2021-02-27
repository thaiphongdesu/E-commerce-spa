import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItem: []
        }

        this.addItem = this.addItem.bind(this);
    }

    addItem(product){
        this.setState({          
            cartItem: this.state.cartItem.concat(product)
        })
    }
    render(){
        return(
        <CartContext.Provider 
            value={{cartItem: this.state.cartItem, addItem: this.addItem}}>
            {this.props.children}
        </CartContext.Provider>)
    }
}