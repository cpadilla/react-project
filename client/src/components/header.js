import React, { Component } from 'react';
import '../styles/css/header.css'
import {
//   BrowserRouter as Router,
//   Route,
  Link
} from 'react-router-dom';

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
                <Link to={link.link}>
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
                </Link>
            </div>;

        return <div className="tab" key={i}>
            <Link className="linkWrapper" to={link.link}>
                <div className={link.name} />
            </Link>
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
                <div className="fixed">
                    <div className="logo-panel">
                        <div className="logo" />
                    </div>

                    {/* TODO: look into classnames package */}
                    <div className={'topnav ' + className} id="topnav">
                        <div className="tabs">
                            {links.map(this.renderLinks)}
                        </div>
                    </div>
                </div>
                <div className="headerSpace" />
            </div>
        )
    }
};

export default Header;