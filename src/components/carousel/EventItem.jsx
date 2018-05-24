import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllEvents} from '../../actions/events'
import '../../style/style.css'


class EventItem extends React.Component {



    render(){
        const day = this.props.date.slice(0, 10)
        const time = this.props.date.slice(11, 16)
        const x = new Date().toJSON().slice(11, 16)


        return (
            <div className="eventItem">
                <div className="eventHeading">
                    <span className="eventDay"> {day}</span><br />
                    <span className="eventTime"> {time}</span>
                </div>
                <div className="eventBody">
                    <h5 className="eventTitle">{this.props.title}</h5>
                    <p className="eventDescription">{this.props.description}</p>
                    <a className="eventButton" href={this.props.url} target="_blank">More...</a>
                </div>
            </div>
        )
    }

}



export default connect(null, null )(EventItem)