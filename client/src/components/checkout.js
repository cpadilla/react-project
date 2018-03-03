import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/css/checkout.css'

class Checkout extends Component {
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
                    console.log("res: ", res);
                    getItem =  res.data[0];
                    itemList.push({item: getItem, quantity: item.quantity});
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
        return (
            <div className="checkout">
                Checkout {this.props.shoppingCartSize}
                <div className="items">
                    {this.state.items.map((item, i) => {
                        return (
                            <div className="item" key={i}>
                                <Link to={{ pathname: '/item/' + item.item.productId,
                                            state: { item: item}}}>
                                    <img alt={item.title} src={require("../assets/" + item.item.img)} />
                                </Link>
                                <div>
                                    {item.item.title}
                                </div>
                                <div>
                                    {item.item.price}
                                </div>
                                <div className="quantity">
                                    Quantity:
                                    <input type="number" value={this.state.itemQuantities[i]} onChange={this.onValueChange.bind(this, i)}/>
                                    <button onClick={this.onClick.bind(this, item.item.productId, this.state.itemQuantities[i])}>Update</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Checkout;