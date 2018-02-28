import React, { Component } from 'react'
import axios from 'axios'
// import Item from './item'
import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom';
import '../styles/css/music.css'

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
                {this.state.music.map((album, i) => {
                    // console.log("album img: " + album.img);

                    // var divStyle =  {
                    //     backgroundImage: 'url(../assets/' + album.img + ')',
                    //     width: '300px',
                    //     height: '300px'
                    // }

                    return (
                        <div className="album" key={i}>
                            {/* <a href={'/item/' + album.productId}>  */}
                                <Link to={{ pathname: '/item/' + album.productId,
                                            state: { item: album}}}>
                                    <img alt={album.title} src={require("../assets/" + album.img)} />
                                </Link>
                            {/* </a> */}
                            <div>
                                {album.productId}
                            </div>
                            <div>
                                {album.title}
                            </div>
                            <div>
                                {album.price}
                            </div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Music;