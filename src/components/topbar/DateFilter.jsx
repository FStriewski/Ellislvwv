import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/events'
import '../../style/topBarUnit.css'


class DateFilter extends React.Component {
    static propTypes = {
        fetchAllEvents: PropTypes.func.isRequired
    }

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

    handleReset = () => {
        this.props.fetchAllEvents()
        this.refs.startDate.value = ''
        this.refs.endDate.value = ''
    }


    render() {
        return (
            <div className="dateWrapper">
                <button id="filterRelease" onClick={ this.handleReset}> x </button>
                <form className="dateFilterContainer" onSubmit={this.handleSubmit}>
                    {/* <label htmlFor="startDate">Event between:</label> */}
                    <input className="datePicker" name="startDate" onChange={this.handleChange} type="date" ref="startDate"/>
                    <input className="datePicker" name="endDate" onChange={this.handleChange} type="date" ref="endDate"/>
                    <button id="dateFilterButton"> Search </button>
                </form>
            </div>
        )
    }

}



export default connect(null, { fetchAllEvents})(DateFilter)