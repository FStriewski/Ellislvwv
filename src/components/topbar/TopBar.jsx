import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateFilter from './DateFilter'
import '../../style/topBarUnit.css'
import {filterByDate} from '../../actions/events'


class TopBar extends React.Component {

    filterDate = (filter) => {

      //  this.props.filterByDate(filter)
        console.log(filter)
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



export default connect(null, filterByDate)(TopBar)