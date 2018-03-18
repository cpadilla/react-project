import React, { Component } from 'react';
import axios from 'axios'
import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom';
import '../styles/css/homepage.css'
import config from 'react-global-configuration'

class Homepage extends Component {

    // url = "http://localhost:7777/api/latestAlbum"
    // url = process.env.MT_API + "/latestAlbum"
    url = config.get('api') + "/latestAlbum"

    constructor(props) {
        super(props);

        this.state = {
            album: {},
            iframeStyle: {
            }
        }

        axios.get(this.url).then((res) => {
            this.setState({album: res.data[0]});
        }).catch(function(error) {
            console.log(error);
        })

        this.onResize = this.onResize.bind(this);
        this.onResize();
    }


    onResize() {
        var aspectRatio = 16 / 9;

        if (this.container) {
            var containerWidth = this.container.offsetWidth;
            var containerHeight = this.container.offsetHeight;
            var containerAspectRatio = containerWidth / containerHeight;
            var newWidth = containerWidth;
            var newHeight = containerHeight;
            
            if (containerAspectRatio > aspectRatio) {
                // increase height of video
                newHeight = containerWidth / aspectRatio;
            } else {
                // increase width of video
                newWidth = containerHeight * aspectRatio;
            }

            this.setState({
                ...this.state,
                iframeStyle: {
                    height: newHeight,
                    width: newWidth
                }
            });

        }
    }

    componentDidMount() {
        window.addEventListener("load", this.onResize)
        window.addEventListener("resize", this.onResize)
        this.onResize()
    }

    componentWillUnmount() {
        window.removeEventListener("load", this.onResize)
        window.removeEventListener("resize", this.onResize)
    }

    render() {
        var album = this.state.album;

        var homepage = <div className="homepage row">
                <div className="fillPage twelve columns">
                    <div className="frontPageVideoContainer" ref={ (container) => { this.container = container; }}>
                        <iframe className="frontPageVideo" src="https://www.youtube.com/embed/TKTbbf4z1PQ?t=8&autoplay=1&iv_load_policy=3&start=8&end=526&mute=1&controls=0&disablekb=1&loop=1&rel=0&showinfo=0&playlist=TKTbbf4z1PQ"
                            ref={(iframe) => this.iframe = iframe} align="middle" frameborder="0" style={this.state.iframeStyle}/>
                    </div>
                </div>
            </div>

        // this.onResize();

        return (
            homepage
        )
    }
}

export default Homepage;