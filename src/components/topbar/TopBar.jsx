import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateFilter from './DateFilter'
import '../../style/topBarUnit.css'
import {filterByDate} from '../../actions/events'


class TopBar extends React.Component {

    filterDate = (filter) => {
        const start = (filter.startDate === "") ? new Date("1000-01-01") : new Date(filter.startDate) 
        const end = (filter.endDate === "") ? new Date("3000-01-01") : new Date(filter.endDate) 

        const result = this.props.events.filter(e => new Date(e.date.slice(0, 10)) > start && new Date(e.date.slice(0, 10)) < end )

        
        console.log(result)
        console.log(result.length)
    }

    render() {

        return (
            <div className="topBarContainer">
                <span>Logo</span>
                <span>Title</span>
              
                <div className="topBarControls">
                    <DateFilter onSubmit={this.filterDate} />
                    <button className="dateFilterRelease" onClick={ _ => console.log("Release")}> X </button>
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

export default connect(mapStateToProps, filterByDate)(TopBar)