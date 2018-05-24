import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../style/topBarUnit.css'


class DateFilter extends React.Component {

    state = {
        startDate: "",
        endDate: "",
    }

    handleChange = (event) => {
        const { name, value } = event.target

        this.setState(
            { [name]: value }
        )
        //console.log(this.state)
    }

    handleSubmit = (event) => {
        event.preventDefault()
        // this.props.onSubmit(this.state)
    }




    render() {
        return (
            <div className="dateFilterContainer" onSubmit={this.handleSubmit}>
                <input className="StartDatePicker" name="startDate" onChange={this.handleChange} type="date" />
                <input className="EndDatePicker" name="endDate" onChange={this.handleChange} type="date" />
            </div>
        )
    }

}



export default connect(null, null)(DateFilter)