import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateFilter from './DateFilter'
import '../../style/topBarUnit.css'
import { filterByDate, fetchAllEvents} from '../../actions/events'


class TopBar extends React.Component {

    dispatchFilterDate = (filter) => {

        const start = (filter.startDate === "") ? new Date("1000-01-01") : new Date(filter.startDate) 
        const end = (filter.endDate === "") ? new Date("3000-01-01") : new Date(filter.endDate) 

        this.props.filterByDate(start,end)
    }

    render() {
        return (
         
            <div className="topBarContainer">


                <div className="topBarTitleContainer">
                    <div>
                        <img src="/logo.svg" alt="logo" height="50px" width="50px" />
                    </div>
                    <div>
                        <span className="topBarTitle">De Voorhoede</span><br />
                        <span className="topBarSubTitle">Events</span>
                    </div>
                </div>

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