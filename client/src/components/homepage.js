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
                <div className="newAlbumOut">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
                <div className="parallax2"></div>
            </div>
        )
    }
}

export default Homepage;