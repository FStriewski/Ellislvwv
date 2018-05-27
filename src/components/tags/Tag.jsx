import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../style/tagUnit.css'


class Tag extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    }
    

    render() {
        return (
            <div className="tagItem">
                <button onClick={_ => console.log("click")}>{this.props.name} ({this.props.count})</button>
            </div>
        )
    }

}



export default connect(null, null)(Tag)