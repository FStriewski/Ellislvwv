import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateFilter from './DateFilter'
import '../../style/topBarUnit.css'
import { filterByDate, fetchAllEvents} from '../../actions/events'


class TopBar extends React.Component {

    dispatchFilterDate = (filter) => {
        this.props.fetchAllEvents()
        // This code is faster then the fetch all
        const start = (filter.startDate === "") ? new Date("1000-01-01") : new Date(filter.startDate) 
        const end = (filter.endDate === "") ? new Date("3000-01-01") : new Date(filter.endDate) 

        const result = this.props.events.filter(e => new Date(e.date.slice(0, 10)) > start && new Date(e.date.slice(0, 10)) < end )

        // console.log(typeof result)
        // console.log(result.length)

        this.props.filterByDate(result)
    }


    render() {

        return (
            <div className="topBarContainer">
                <span>Logo</span>
                <span>Title</span>
              
                <div className="topBarControls">
                    <DateFilter onSubmit={this.dispatchFilterDate} />
                </div>
            </div>
        )
    }

}



const mapStateToProps = (state) => (
    {
        events: state.events
    }
)

export default connect(mapStateToProps, { filterByDate, fetchAllEvents})(TopBar)