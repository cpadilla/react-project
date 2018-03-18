import React, { Component } from 'react'
import axios from 'axios'
import ShoppingCartContainer from '../containers/shoppingCartContainer'
import ItemCard from '../components/itemCard'
import '../styles/css/store.css'
import '../styles/css/shoppingCart.css'
import config from 'react-global-configuration'

class Store extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: []
        }
    }

    componentDidMount() {
        console.log('componentDidMount');
        var url = config.get('api') + "/products"
        console.log('config.api: ', config.get('api'));
        axios.get(url).then((res) => {
            this.setState({items: res.data});
            console.log('products: ', res.data)
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="store">
                <div className="itemContainer">
                    {this.state.items.map((album, i) => {
                        return (
                            <div key={i}>
                                <ItemCard item={album} key={i} />
                            </div>
                        )
                    })}
                </div>
                <ShoppingCartContainer />
            </div>
        );
    }
}

export default Store;
