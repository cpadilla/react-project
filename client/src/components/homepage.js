import React, { Component } from 'react';
import axios from 'axios'
import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom';
import '../styles/css/homepage.css'

class Homepage extends Component {

    url = "http://localhost:7777/api/latestAlbum"

    constructor(props) {
        super(props);

        this.state = {
            album: {}
        }

        axios.get(this.url).then((res) => {
            this.setState({album: res.data[0]});
        }).catch(function(error) {
            console.log(error);
        })
    }

    componentDidMount() {
    }

    render() {
        var album = this.state.album;

        return (
            <div className="homepage">
                <div className="border">
                    <div className="videoContainer">
                        <div className="innerContainer">
                            <div className="fitToContainer">
                                <div className="iframeContainer">
                                    <iframe title="ExpandingAnywayVideo" src="https://www.youtube.com/embed/TKTbbf4z1PQ"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="parallax"></div>
                <div className="videoContainer">
                    <span>Morning Teleportation - "Expanding Anyway" (Official Music Video)</span>
                    <div className="iframeContainer">
                        <iframe title="ExpandingAnywayVideo" src="https://www.youtube.com/embed/TKTbbf4z1PQ"/>
                    </div>
                </div>
                <div className="parallax"></div>
                <div className="bio">
                    Morning Teleportation is a psychedelic rock band formed in 2005 when Bowling Green, Kentucky natives Travis Goodwin (keyboards), Tres Coker (drums), and Paul Wilkerson (bass) met up with Chicago transplant Tiger Merritt (vocals/guitar), who had just moved to their hometown for college.
                    In the last few years they have played at Electric Forest Festival, Bonnaroo Music Festival, and Sasquatch! Music Festival and supporting the likes of The Flaming Lips, Cage The Elephant, Primus and Modest Mouse.
                    <div className="bioImage">
                        <img alt="Morning Teleportation" src={require("../assets/band.jpg")} />
                    </div>
                </div>
                <div className="parallax2"></div>
                <div className="newAlbumOut">
                    Check out the latest album!
                        <div className="latestAlbum">
                            <Link to={{ pathname: '/item/' + (album && album.productId),
                                        state: {item: album}}}>
                                {album && album.img && <img alt={album.title} src={require("../assets/" + album.img)} /> }
                            </Link>
                            <div>
                                {album && album.title}
                            </div>
                        </div>
                </div>
                <div className="parallax3"></div>
                <div className="tour">
                    ON TOUR
                        <div className="tourdates">
                            <a href={'/item/' + (album && album.productId)}> 
                                <img alt="Tour Dates" src={require("../assets/morning-teleportation-2010.jpg")} />
                            </a>
                        </div>
                </div>
                <div className="parallax3"></div> */}
            </div>
        )
    }
}

export default Homepage;