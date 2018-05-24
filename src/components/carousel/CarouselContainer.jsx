import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/events'


class CarouselContainer extends React.Component {

    componentWillMount = () => {
        this.props.fetchAllEvents()
    }

    render() {
        return (
            <div>empty</div>
        )
    }

}

const mapStateToProps = (state) => (
    {
        events: state.events
    }
)

export default connect(mapStateToProps, { fetchAllEvents })(CarouselContainer)