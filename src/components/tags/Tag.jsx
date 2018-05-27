import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import '../../style/tagUnit.css'
import { filterByTag } from '../../actions/events'


class Tag extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        filterByTag: PropTypes.func,
    }
    
    filterTag = (tag) => {
        this.props.filterByTag(tag)
        console.log(tag)
    }

    render() {
        return (
            <div className="tagItem">
                <button onClick={() => this.filterTag(this.props.name)}>{this.props.name} ({this.props.count})</button>
            </div>
        )
    }

}



export default connect(null, {filterByTag})(Tag)