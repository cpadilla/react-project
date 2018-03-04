import React, { Component } from 'react'
import '../styles/css/checkout.css'
import { withRouter, Link } from 'react-router-dom'

class Checkout extends Component {
    constructor(props) {
        super(props);

        if (this.props.location.state && this.props.location.state) {
            this.state = {
                cart: this.props.location.state.cart
            };
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('clicked');
        // busy work

        // if card goes through

        // generate id
        var confirmationId = 1;

        // link to confirmation page with confirmation id
        this.props.history.push('/confirmation/' + confirmationId);
    }

    render () {

        var total = 0;
        this.state.cart.forEach(element => {
            total += element.quantity * element.item.price;
        });

        return (
            <div className="checkout">
                <div className="paymentInfo">
                    Payment Information: 
                    <form>
                        <div>
                            <label>Name: </label>
                            <input id="Name" />
                        </div>

                        <div>
                            <label>Email: </label>
                            <input id="Email" />
                        </div>

                        <div>
                            <label>Phone: </label>
                            <input id="Phone" />
                        </div>

                        <div>
                            <label>Card Number: </label>
                            <input id="CardNumber" />
                        </div>

                        <div>
                            <label>CVC: </label>
                            <input id="CVC" />
                        </div>

                        <div>
                            <label>Expiry Date: </label>
                            <input id="ExpiryDate" />
                        </div>

                        <div>
                            <label>Address: </label>
                            <input id="Address" />
                        </div>
                    </form>
                    <button className="greenButton" onClick={this.handleClick}><div>Pay </div><div className="price">${total}</div></button>
                </div>
                <div className="items">
                    {this.state.cart.map((item, i) => {
                        if (!item.item) return [];

                        return (
                            <div className="item" key={i}>
                                <Link to={{ pathname: '/item/' + item.item.productId,
                                            state: { item: item.item}}}>
                                    <img alt={item.item.title} src={require("../assets/" + item.item.img)} />
                                </Link>
                                <div className="title">
                                    {item.item.title}
                                </div>
                                <div className="price">
                                    ${item.item.price}
                                </div>
                                <div className="quantity">
                                    Quantity: {item.quantity}
                                </div>
                                <div className="total">
                                    ${item.quantity * item.item.price}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default withRouter(Checkout);