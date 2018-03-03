import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/css/cart.css'

class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCartSize: 0,
            items: []
        };

        if (this.props && this.props.shoppingCart) {
            this.state = {
                shoppingCartSize: this.props.shoppingCartSize,
                shoppingCart: this.props.shoppingCart,
                items: [],
                itemQuantities: []
            }
        }
    }

    onValueChange(index, e) {
        var value = e.target.value;
        if (value < 0) {
            value = 0;
        }

        var tempQuantities = this.state.itemQuantities;
        tempQuantities[Number(index)] = value;

        this.setState({
            ...this.state,
            itemQuantities: tempQuantities
        });
    }

    onClick(productId, quantity) {
        this.props.actions.updateQuantity(productId, Number(quantity));
    }

    componentDidMount() {
        if (this.props && this.props.shoppingCart) {

            var url = "http://localhost:7777/api/item/";

            var itemList = [];
            var itemQuantities = [];
            this.props.shoppingCart.forEach((item, index) => {
                var getItem;
                axios.get(url + item.productId).then((res) => {
                    getItem =  res.data[0];
                    itemList.push(getItem);
                    itemQuantities.push(item.quantity);
                    this.setState({
                        items: itemList,
                        itemQuantities: itemQuantities
                    });
                }).catch(function(error) {
                    console.log(error);
                })
            });
        }
    }

    render() {
        var shoppingCartSize = this.props.shoppingCartSize ? this.props.shoppingCartSize : 0;

        return (
            <div className="cart">
                <div className="checkoutBar">
                    Items:  {shoppingCartSize}
                    <Link to={{ pathname: '/checkout',
                                state: {cart: this.state.items.map((item, i) => {
                                    var match = this.props.shoppingCart.find((element) => {
                                        return element.productId === item.productId;
                                    });

                                    return {
                                        item: item,
                                        quantity: match.quantity
                                    }
                                })}}}>
                        <button>Checkout</button>
                    </Link>
                </div>
                <div className="items">
                    {this.state.itemQuantities &&
                    this.state.items &&
                    this.props.shoppingCart &&
                    this.props.shoppingCart.map((product, i) => {
                        var item = this.state.items.find((element) => {
                            return element.productId === product.productId;
                        });
                        if (!item)
                            return [];
                        
                        var quantity = this.state.itemQuantities[i] ? this.state.itemQuantities[i] : 0;
                        var savedQuantity = product.quantity;
                        return (
                            <div className="item" key={i}>
                                <Link to={{ pathname: '/item/' + item.productId,
                                            state: { item: item}}}>
                                    <img alt={item.title} src={require("../assets/" + item.img)} />
                                </Link>
                                <div>
                                    {item.title}
                                </div>
                                <div>
                                    ${item.price}
                                </div>
                                <div className="quantity">
                                    Quantity:
                                    <input type="number" value={quantity} onChange={this.onValueChange.bind(this, i)}/>
                                    <button onClick={this.onClick.bind(this, item.productId, this.state.itemQuantities[i])}>Update</button>
                                </div>
                                <div className="total">
                                    ${savedQuantity * item.price}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Cart;