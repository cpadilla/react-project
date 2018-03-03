import React from 'react';
import Checkout from '../components/checkout';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingCartActions from '../actions';

class CheckoutContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <Checkout shoppingCart={this.props.shoppingCart}
                    shoppingCartSize={this.props.shoppingCartSize}
                    actions={this.props.actions}/>
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    return {shoppingCart: state.shoppingCart,
            shoppingCartSize: state.shoppingCartSize}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(shoppingCartActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);