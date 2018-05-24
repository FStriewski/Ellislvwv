import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {fetchAllEvents} from '../../actions/events'


class EventItem extends React.Component {

componentWillMount = () => {
    this.props.fetchAllEvents()
}

    render(){
        return (
            <div>empty</div>
        )
    }

}

export default connect(null, { fetchAllEvents })(EventItem)