import React, { Component } from 'react';

export const CartContext = React.createContext();

export class CartProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            cartItem: []
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(product){
        this.setState({          
            cartItem: this.state.cartItem.concat(product)
        })
    }

    removeItem(product){
        const tempList = [].concat(this.state.cartItem);
        let i = tempList.findIndex(item=>item.id === product.id);
        tempList.splice(i,1);
        this.setState({
            cartItem: tempList
        })
    }
    render(){
        return(
        <CartContext.Provider 
            value={{cartItem: this.state.cartItem, addItem: this.addItem, removeItem: this.removeItem}}>
            {this.props.children}
        </CartContext.Provider>)
    }
}