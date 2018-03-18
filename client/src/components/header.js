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
            menuClicked: false,
            isHovered: false,
            linkStyle: {}
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
            menuClicked: !prevState.menuClicked
        }));

        if (this.state.menuClicked) {
            // rotate hamburger menu
            // display menu items
            // for (var i=0; i<this.state.linkRef.length; i++) {
            //     this.state.linkRef[i].style = {
            //         display: "block"
            //     }
            // }
            this.setState({
                ...this.state,
                linkStyle: {
                    display: "block"
                }
            })
        } else {
            // rotate hamburger menu
            // hide menu items
        }

    }

    renderLinks(link, i) {
        var one, two, three; var contact;

        // Declare html for link
        var headerLink = <Link className="linkWrapper" to={link.link}>
                <div className={link.name} />
            </Link>;

        if (link.name === "HOME") {
            one = "small";
            two = "large";
            three = "medium";
        }
        if (link.name === "MUSIC") {
            one = "large";
            two = "small";
            three = "medium";
            headerLink = <a className="linkWrapper" href="https://morningteleportation.bandcamp.com/">
                <div className={link.name} />
            </a>;
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

        return <div className="tab three columns" key={i} >
            {headerLink}
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
                link: '/tour'}];
            // {name: 'CONTACT',
            //     link: '/contact'}];

        return  (
            <div className="header">
                <div className="fixed">
                    <div className="row">
                        <div className="logo-panel twelve columns">
                            <div className="logo" />
                        </div>
                    </div>

                    {/* TODO: look into classnames package */}
                    <div className="tabs row">
                        <div className="hamburger three columns"
                            onClick={this.handleClick}/>
                        {links.map(this.renderLinks)}
                    </div>
                </div>
            </div>
        )
    }
};

export default Header;