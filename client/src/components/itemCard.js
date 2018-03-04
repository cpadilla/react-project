import React, { Component } from 'react'
import '../styles/css/itemCard.css'
import '../styles/css/animate.css'
import { Link } from 'react-router-dom'

class ItemCard extends Component {
    constructor(props) {
        super(props);

        console.log('this.props: ', this.props);
    }

    render() {
        var item = this.props.item;

        return (
            <div className="item animated fadeIn">
                <div className="cardContainer">
                    <Link to={{ pathname: '/item/' + item.productId,
                                state: { item: item}}}>
                        <img alt={item.title} src={require("../assets/" + item.img)} />
                    </Link>
                    <div className="titleRow">
                        <div className="title">
                            {item.title}
                        </div>
                        <div className="price">
                            ${item.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemCard;