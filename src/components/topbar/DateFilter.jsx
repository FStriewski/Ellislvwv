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
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSubmit(this.state)

        this.setState(
            { 
                startDate: "",
                endDate: "",
            }
        )
    }


    render() {
        return (
            <div>
            <form className="dateFilterContainer" onSubmit={this.handleSubmit}>
                <input className="StartDatePicker" name="startDate" onChange={this.handleChange} type="date" />
                <input className="EndDatePicker" name="endDate" onChange={this.handleChange} type="date" />
                <button >O</button>
            </form>
        </div>
        )
    }

}



export default connect(null, null)(DateFilter)