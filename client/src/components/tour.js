import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'moment'
import '../styles/css/tour.css'
import '../styles/css/animate.css'

class Tour extends Component {
    constructor(props) {
        super(props);

        // var url = "http://localhost:7777/api/tourdates"
        var url = process.env.MT_API + "/tourdates"

        axios.get(url).then((res) => {
            this.setState({tourdates: res.data});
            console.log('this.state, ', this.state);
        }).catch(function(error) {
            console.log(error);
        })
    }

    render() {
        Moment.locale('en');
        return (
            <div className="tour">
                <h1>
                    Tour
                </h1>
                {this.state && this.state.tourdates.map((date, i) => {
                    return (
                        <div className="tourdate animated fadeIn" key={i}>
                            <div className="date">
                                {Moment(date.date).format('M/D')}
                            </div>
                            <div className="location"> 
                                {date.city}, {date.state}
                            </div>
                            <div className="tickets">
                                <button className="greenButton">Tickets</button>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default Tour;