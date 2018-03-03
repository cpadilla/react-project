import React, { Component } from 'react'
import '../styles/css/shoppingCart.css'

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };

    }

    componentDidMount() {
    }

    render() {
        console.log("render")
        return (
            <div className="shoppingCart">
                <div className="container">
                    Shopping Cart: {this.props.shoppingCartSize}
                </div>
            </div>
        );
    }
}

export default ShoppingCart;