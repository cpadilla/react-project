import React, { Component } from 'react';
import '../styles/css/homepage.css'

class Homepage extends Component {
    render() {
        return (
            <div className="homepage">
                <div className="parallax"></div>
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
                    <img alt="Morning Teleportation" src={require("../assets/band.jpg")} />
                </div>
                <div className="parallax2"></div>
                <div className="newAlbumOut">
                    Check out the latest album!
                </div>
                <div className="parallax2"></div>
            </div>
        )
    }
}

export default Homepage;