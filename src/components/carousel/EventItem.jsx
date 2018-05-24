import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllEvents} from '../../actions/events'
import '../../style/style.css'


class EventItem extends React.Component {



    render(){
        return (
            <div className="eventItem">
                <span> {this.props.date}</span>
                <h5>{this.props.title}</h5>

                <p>{this.props.description}</p>
                <a href={this.props.url}>More...</a>


            </div>
        )
    }

}



export default connect(null, null )(EventItem)