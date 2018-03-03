import React, { Component } from 'react'
import '../styles/css/shoppingCart.css'

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: props.shoppingCart
        };

    }

    getShoppingCartSize(){
        var shoppingCartSize = 0;
        if (this.props.shoppingCart && this.props.shoppingCart.length > 0) {
            this.props.shoppingCart.map((item, index) => {
                console.log("itemQuantity: ", item.quantity)
                shoppingCartSize += item.quantity;
            });
        }
        return shoppingCartSize;
    }

    componentDidMount() {
    }

    render() {
        console.log("render")

        // var shoppingCartSize = 0;
        // if (this.props.shoppingCart && this.props.shoppingCart.length > 0) {
        //     this.props.shoppingCart.map((item, index) => {
        //         console.log("itemQuantity: ", item.quantity)
        //         shoppingCartSize += item.quantity;
        //     });
        // }
        return (
            <div className="shoppingCart">
                <div className="container">
                    Shopping Cart: {this.getShoppingCartSize()}
                </div>
            </div>
        );
    }
}

export default ShoppingCart;