import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllEvents} from '../../actions/events'


class EventItem extends React.Component {



    render(){
        return (
            <div>Event Item</div>
        )
    }

}

export default connect(null, null )(EventItem)