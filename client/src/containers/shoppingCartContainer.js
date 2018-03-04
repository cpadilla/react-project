import React from 'react';
import ShoppingCart from '../components/shoppingCart';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingCartActions from '../actions';

class ShoppingCartContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shoppingCart: []
        }
    }

    componentDidMount() {
        if (!this.props.shoppingCart) {
            this.props.actions.getCart();
        }
    }

    render() {
        return (
            <ShoppingCart shoppingCart={this.props.shoppingCart} shoppingCartSize={this.props.shoppingCartSize} />
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {
        shoppingCart: (state && state.shoppingCart),
        shoppingCartSize: (state && state.shoppingCartSize)
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(shoppingCartActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartContainer);