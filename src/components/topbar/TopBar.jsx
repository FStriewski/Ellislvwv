import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import DateFilter from './DateFilter'
import '../../style/topBarUnit.css'


class TopBar extends React.Component {



    render() {

        return (
            <div className="topBarContainer">
                <span>Logo</span>
                <span>Title</span>
              
                <div className="topBarControls">
                    <DateFilter />
                    <button className="dateFilterApply" onClick={ _ => console.log("Apply")}> o </button>
                    <button className="dateFilterRelease" onClick={ _ => console.log("Release")}> X </button>
                </div>
            </div>
        )
    }

}



export default connect(null, null)(TopBar)