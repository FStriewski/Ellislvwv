import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllEvents} from '../../actions/events'
import '../../style/style.css'


class EventItem extends React.Component {



    render(){
        return (
            <div className="eventItem">Event Item</div>
        )
    }

}

export default connect(null, null )(EventItem)