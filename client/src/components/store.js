import React, { Component } from 'react'
import axios from 'axios'
import ShoppingCartContainer from '../containers/shoppingCartContainer'
import ItemCard from '../components/itemCard'
import '../styles/css/store.css'
import '../styles/css/shoppingCart.css'

class Store extends Component {

    url = "http://localhost:7777/api/products"

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        axios.get(this.url).then((res) => {
            this.setState({items: res.data});
            console.log('products: ', res.data)
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="store">
                <ShoppingCartContainer />
                <div className="itemContainer">
                    {this.state.items.map((album, i) => {
                        return (
                            <div key={i}>
                                <ItemCard item={album} key={i} />
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Store;
