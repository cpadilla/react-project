import React, { Component } from 'react';
import '../styles/css/header.css'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            responsive: false
        };

        this.handleClick = this.handleMenuClick.bind(this);
    }

    handleMenuClick() {

        this.setState((prevState) => ({
            responsive: !prevState.responsive
        }));

    }

    render() {

        const { responsive } = this.state;
        const className = responsive ? 'responsive' : 'not-responsive';

        return  (
            <div className="header">
                <div className="logo-panel">
                    <div className="logo">
                        LOGO
                    </div>
                </div>

                {/* TODO: look into classnames package */}
                <div className={'topnav ' + className} id="topnav">
                    <a href="#Apparel">APPAREL</a>
                    <a href="#Decks">DECKS</a>
                    <a href="#Contact">CONTACT</a>
                    {/* <a href="javascript:void(0);" className="icon" onClick={this.handleClick}>+</a> */}
                    </div>
            </div>
        )
    }
};

export default Header;