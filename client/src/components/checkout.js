import React, { Component } from 'react'
import '../styles/css/checkout.css'
import { Link } from 'react-router-dom'

class Checkout extends Component {
    constructor(props) {
        super(props);

        if (this.props.location.state && this.props.location.state) {
            this.state = {
                cart: this.props.location.state.cart
            };
        }
        console.log(this);
    }

    render () {
        return (
            <div className="checkout">
                Checkout
                <div className="billingInfo">
                    Billing: 
                </div>
                <div className="shippingInfo">
                    Shipping: 
                </div>
                <div className="paymentInfo">
                    Payment: 
                </div>
                <div className="items">
                    {this.state.cart.map((item, i) => {
                        return (
                            <div className="item" key={i}>
                                <Link to={{ pathname: '/item/' + item.item.productId,
                                            state: { item: item.item}}}>
                                    <img alt={item.title} src={require("../assets/" + item.item.img)} />
                                </Link>
                                <div>
                                    {item.item.title}
                                </div>
                                <div>
                                    {item.item.price}
                                </div>
                                <div className="quantity">
                                    Quantity: {item.quantity}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default Checkout;