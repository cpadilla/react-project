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

        var links = [
            {name: 'HOME',
                link: '/'},
            {name: 'MUSIC',
                link: '/music'},
            {name: 'STORE',
                link: '/store'},
            {name: 'TOUR',
                link: '/tour'},
            {name: 'CONTACT',
                link: '/contact'}];

        return  (
            <div className="header">
                <div className="logo-panel">
                    <div className="logo" />
                </div>

                {/* TODO: look into classnames package */}
                <div className={'topnav ' + className} id="topnav">
                    {links.map(function(link,i) {
                        return <div className="linkWrapper" key={i} >
                            <a href={link.link}>{link.name}</a>
                        </div>;
                    })}
                    {/* <a href="#Home">HOME</a>
                    <a href="#Music">MUSIC</a>
                    <a href="#Store">STORE</a>
                    <a href="#Tour">TOUR</a>
                    <a href="#Contact">CONTACT</a> */}
                    {/* <a href="javascript:void(0);" className="icon" onClick={this.handleClick}>+</a> */}
                    </div>
            </div>
        )
    }
};

export default Header;