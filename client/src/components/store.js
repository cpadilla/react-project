import React, { Component } from 'react'
import ShoppingCartContainer from '../containers/shoppingCartContainer'

class Store extends Component {
    render() {
        return (
            <div>
                <ShoppingCartContainer />
                <div>
                    Store
                </div>
            </div>
        );
    }
}

export default Store;