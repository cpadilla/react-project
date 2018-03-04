import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/css/shoppingCart.css';
import '../styles/css/animate.css';

class ShoppingCart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hovering: false
        };

        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

    }

    onMouseEnter() {
        this.setState({
            hovering: true
        })
    }

    onMouseLeave() {
        this.setState({
            hovering: false
        })
    }

    componentDidMount() {
    }

    render() {
        console.log('shoppingcartSize: ', this.props.shoppingCartSize);
        return (
            <div className="shoppingCart" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                <div className="container">
                    {(this.props.shoppingCartSize || 0) === 0 ? 
                        <div className="cartIcon"/>
                        :
                        <Link to={{ pathname: '/cart',
                                    state: {shoppingCart: this.props.shoppingCart,
                                            shoppingCartSize: this.props.shoppingCartSize}}}>
                            <div className="cartIcon"/>
                        </Link>
                    }
                    <div className="colon">
                        :  
                    </div>
                    <div className={"itemCount animated " + (this.state.hovering ? ((this.props.shoppingCartSize || 0) === 0 ? "wobble" : "bounce") : "")}>
                        {this.props.shoppingCartSize || 0}
                    </div>
                </div>
            </div>
        );
    }
}

export default ShoppingCart;