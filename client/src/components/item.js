import React, { Component } from 'react'
import '../styles/css/item.css'

class Item extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.location);

        this.state = {
            id: props.match.params.id,
        }

        // initalize state from props.location
        if (props.location.state == null) {
            // request item info from server
        } else {
            this.state['item'] = props.location.state.item;
        }

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

        return (
            <div className="item">
                <div className="card">
                    <h1>
                        {item.title}
                    </h1>
                    <div className="imageContainer">
                        <img alt={item.title} src={require("../assets/" + item.img)} />
                    </div>
                    <div className="price">
                        ${item.price}.00
                    </div>
                </div>
            </div>
        );
    }
}

export default Item;