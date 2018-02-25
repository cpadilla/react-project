import React, { Component } from 'react';
import '../styles/css/header.css'

class Header extends Component {

    constructor(props) {
        super(props);
    }

    myFunction() {
        var x = document.getElementById("topnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }

    render() {
        return  (
            <div className="header">
                <div className="topnav" id="topnav">
                    <a href="#Home" className="active">Home</a>
                    <a href="#Cart">Cart</a>
                    <a href="#Apparel">Apparel</a>
                    <a href="#Decks">Decks</a>
                    <a href="#Contact">Contact</a>
                    <a href="javascript:void(0);" className="icon" onClick={this.myFunction}>+</a>
                    </div>

                <div className="logo-panel">
                    <div className="logo">
                        Logo
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;