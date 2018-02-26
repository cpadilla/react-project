import React, { Component } from 'react'
import axios from 'axios'
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

                    var divStyle =  {
                        backgroundImage: 'url(../assets/' + album.img + ')',
                        width: '300px',
                        height: '300px'
                    }

                    console.log(divStyle);

                    return (
                        <div key={i}>
                            <img src={require("../assets/" + album.img)} />
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