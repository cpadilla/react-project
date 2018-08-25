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
        this.linkClicked = this.linkClicked.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.renderLinks = this.renderLinks.bind(this);
        this.renderNavBar = this.renderNavBar.bind(this);
    }

    handleHover() {
        this.setState({
            isHovered: !this.state.isHovered
        })
    }

    handleMenuClick() {
        console.log("hamburger clicked! "+this.state.menuClicked);

        this.setState({
            menuClicked: !this.state.menuClicked
        });
    }

    linkClicked() {
        console.log("link Clicked");
        this.setState({
            menuClicked: false
        });
    }

    renderNavBar() {
        console.log("render Navbar: " + this.state.menuClicked);

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

        let style = "tabs row";

        if (!this.state.menuClicked) {
            style = "tabs row closed";
        }

        return <div className={style}>
            {links.map(this.renderLinks)}
        </div>;
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

        return <div className="tab three columns" key={i} onClick={this.linkClicked}>
            {headerLink}
            {drips}
        </div>;
    }

    render() {

        const { responsive } = this.state;
        const className = responsive ? 'responsive' : 'not-responsive';

        return  (
            <div className="header">
                <div className="fixed">
                    <div className="row">
                        <div className="logo-panel twelve columns">
                            <div className="logo" />
                        </div>
                    </div>
                    <div className="hamburgerBar">
                        <input type="checkbox" checked={this.state.menuClicked ? 'checked' : ''} id="btnControl"/>
                        <label>
                            <div className="hamburger three columns"
                                onClick={this.handleClick}/>
                        </label>
                    </div>

                    {/* TODO: look into classnames package */}
                    {this.renderNavBar()}
                    {/* <div className="tabs row">
                        {links.map(this.renderLinks)}
                    </div> */}
                </div>
            </div>
        )
    }
};

export default Header;