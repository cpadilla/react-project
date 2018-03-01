import React, { Component } from 'react';
import '../styles/css/header.css'

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            responsive: false,
            isHovered: false
        };

        this.handleClick = this.handleMenuClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.renderLinks = this.renderLinks.bind(this);
    }

    handleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        })
    }

    handleMenuClick() {

        this.setState((prevState) => ({
            responsive: !prevState.responsive
        }));

    }

    renderLinks(link, i) {
        var one, two, three; var contact;

        if (link.name === "HOME") {
            one = "small";
            two = "large";
            three = "medium";
        }
        if (link.name === "MUSIC") {
            one = "large";
            two = "small";
            three = "medium";
        }
        if (link.name === "STORE") {
            one = "medium";
            two = "large";
            three = "small";
        }
        if (link.name === "TOUR") {
            one = "medium";
            two = "small";
            three = "large";
        }
        if (link.name === "CONTACT") {
            one = "small";
            two = "large";
            three = "medium";
            contact = <div className="drip">
                    <div className={"bar " + one} />
                    <div className="drop" />
                </div>
        }

        var drips = <div className={"drips"} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <a href={link.link}>
                <div className="drip">
                    <div className={"bar " + one} />
                    <div className="drop" />
                </div>
                <div className="drip">
                    <div className={"bar " + two} />
                    <div className="drop" />
                </div>
                <div className="drip">
                    <div className={"bar " + three} />
                    <div className="drop" />
                </div>
                {contact}
                </a>
            </div>;

        return <div className="tab" key={i}>
            <div className="linkWrapper" >
                <a className={link.name} href={link.link}></a>
            </div>
            {drips}
        </div>;
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
                    <div className="tabs">
                        {/* <div className="linkRow"> */}
                            {/* {links.map(this.renderLinks)} */}
                        {/* </div>
                        <div className="dripRow"> */}
                            {links.map(this.renderLinks)}
                        {/* </div> */}
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;