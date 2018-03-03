import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
        return (
            <div className="shoppingCart">
                <div className="container">
                    Shopping Cart: {this.props.shoppingCartSize || 0}
                </div>
                <Link to={{ pathname: '/checkout',
                            state: {shoppingCart: this.props.shoppingCart,
                                    shoppingCartSize: this.props.shoppingCartSize}}}>
                    <button>Checkout</button>
                </Link>
            </div>
        );
    }
}

export default ShoppingCart;