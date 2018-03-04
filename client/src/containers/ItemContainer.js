import React from 'react';
import Item from '../components/item';
import ShoppingCartContainer from '../containers/shoppingCartContainer';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingCartActions from '../actions';
import '../styles/css/shoppingCart.css'

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.match.params.id,
            item: props.location.state.item,
            shoppingCart: []
        }
    }

    componentDidMount() {

    }

    render() {
        return (
            <div className="itemContainer">
                <ShoppingCartContainer />
                <Item id={this.state.id} item={this.state.item} actions={this.props.actions} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps) {
    // console.log("mapStateToProps state: ", state);

    return {}
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(shoppingCartActions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);