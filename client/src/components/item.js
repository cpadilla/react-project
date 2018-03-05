import React, { Component } from 'react'
import axios from 'axios'
import '../styles/css/item.css'

class Item extends Component {

    constructor(props) {
        super(props);

        this.onValueChange = this.onValueChange.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            id: Number(props.id),
            quantity: 1
        };

        // initalize state from props.location
        if (props.item == null) {
            // request item info from server
            // var url = "http://localhost:7777/api/item/" + this.state.id;
            var url = process.env.MT_API + "/item/" + this.state.id;

            axios.get(url).then((res) => {
                this.setState({item: res.data[0]});
            }).catch(function(error) {
                console.log(error);
            })
        } else {
            this.state['item'] = props.item;
        }

    }

    onValueChange(e) {
        var value = e.target.value;
        if (value < 0) {
            value = 0;
        }
        this.setState({quantity: value});
    }

    onClick() {
        this.props.actions.addItemToCart(this.state.id, Number(this.state.quantity));
    }

    componentDidMount() {
    }

    render() {
        var item = this.state.item;

        if (item == null) {
            item = {
                title: 'null',
                img: 'band.jpg',
                price: 'null'
            }
        }

        var quantity = this.state.quantity;

        return (
            <div className="item">
                <div className="mainContainer">
                    <div className="card animated fadeIn">
                        <div className="imageContainer">
                            <img alt={item.title} src={require("../assets/" + item.img)} />
                        </div>
                        <div className="titleRow">
                            <h1>
                                {item.title}
                            </h1>
                            <div className="price">
                                ${item.price}.00
                            </div>
                        </div>
                        <div className="addToCart">
                            <input type="number" value={quantity} onChange={this.onValueChange}/>
                            <button className="greenButton" onClick={this.onClick}>Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;