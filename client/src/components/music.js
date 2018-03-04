import React, { Component } from 'react'
import axios from 'axios'
import ShoppingCartContainer from '../containers/shoppingCartContainer'
// import {
//     // BrowserRouter as Router,
//     // Route,
//     Link
// } from 'react-router-dom';
import ItemCard from '../components/itemCard'
import '../styles/css/music.css'
import '../styles/css/shoppingCart.css'

class Music extends Component {

    url = "http://localhost:7777/api/music"

    constructor(props) {
        super(props);

        this.state = {
            music: []
        }
    }

    componentDidMount() {
        axios.get(this.url).then((res) => {
            this.setState({music: res.data});
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        return (
            <div className="music">
                <ShoppingCartContainer />
                <div className="itemContainer">
                    {this.state.music.map((album, i) => {
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

export default Music;