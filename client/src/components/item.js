import React, { Component } from 'react'
import '../styles/css/item.css'

class Item extends Component {

    constructor(props) {
        super(props);
        console.log(props);
        console.log(props.match.params.id);

        this.state = {
            id: props.match.params.id
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                Product id: {this.state.id}
            </div>
        );
    }
}

export default Item;