import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import EventItem from './EventItem'
import { fetchAllEvents } from '../../actions/events'
import '../../style/style.css'

class CarouselContainer extends React.Component {
    static propTypes = {
        events: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })).isRequired
    }

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
                events.map(e => 
                <EventItem 
                    key={e.date} 
                    title={e.title} 
                    description={e.description} 
                    date={e.date} 
                    url={e.url} 
                />)
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