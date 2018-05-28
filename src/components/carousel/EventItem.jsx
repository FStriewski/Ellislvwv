import React from 'react'
import PropTypes from 'prop-types'
import '../../style/carouselUnit.css'


class EventItem extends React.Component {
    static propTypes = {
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
    }


    render(){
        const day = this.props.date.slice(0, 10)
        const time = this.props.date.slice(11, 16)

        return (
            <div className="eventItem">
                <div className="eventHeading">
                    <span className="eventDay"> {day}</span><br />
                    <span className="eventTime"> {time}</span>
                </div>

                <div className="eventBody">
                    <div className="eventTitle">{this.props.title}</div>
                    <div className="eventDescription">{this.props.description}</div>

                </div>
                <footer className="eventFooter">
                    <a href={this.props.url} target="_blank"><button className="eventButton" type="button">More</button></a>
                </footer>
            </div>
        )
    }
}

export default (EventItem)