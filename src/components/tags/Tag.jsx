import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchAllEvents } from '../../actions/events'
import '../../style/tagUnit.css'


class Tag extends React.Component {

    render() {
        return (
            <div className="tagItem">
                <button onClick={_ => console.log("Click!")}>{this.props.name} ({this.props.count})</button>
            </div>
        )
    }

}



export default connect(null, null)(Tag)