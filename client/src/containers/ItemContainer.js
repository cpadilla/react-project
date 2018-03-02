import React from 'react';
import Item from '../components/item';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as shoppingCartActions from '../actions';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        console.log("props: ", props);

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
            <Item id={this.state.id} item={this.state.item} actions={this.props.actions} />
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