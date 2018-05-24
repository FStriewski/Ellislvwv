import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../style/topBarUnit.css'


class DateFilter extends React.Component {



    render() {

        return (
            <div className="dateFilterContainer">
                <input className="StartDatePicker" type="date" />
                <input className="EndDatePicker" type="date" />
            </div>
        )
    }

}



export default connect(null, null)(DateFilter)