import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EventItem from './EventItem'
import { fetchAllEvents } from '../../actions/events'
import '../../style/style.css'

class CarouselContainer extends React.Component {

    componentWillMount = () => {
        this.props.fetchAllEvents()
    }

    render() {
        const {events} = this.props

        if(!events){
            console.log("Error: No api response. Failed to render.")
        }
        return (
            <section className="carouselContainer">{
                events.map(e => <EventItem key={e.date}/>)
            }</section>
        )
    }

}

const mapStateToProps = (state) => (
    {
        events: state.events
    }
)

export default connect(mapStateToProps, { fetchAllEvents })(CarouselContainer)