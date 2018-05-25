import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tag from './Tag'
import { fetchAllEvents } from '../../actions/events'
import '../../style/tagUnit.css'

class CarouselContainer extends React.Component {
    static propTypes = {
        events: PropTypes.arrayOf(PropTypes.shape({
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired
        })).isRequired
    }

    componentWillMount = () => {
        this.props.fetchAllEvents()
    }

    render() {
        const { events } = this.props

        return (
            <section className="tagContainer">e</section>
        )
    }

}

const mapStateToProps = (state) => (
    {
        events: state.events
    }
)

export default connect(mapStateToProps, { fetchAllEvents })(CarouselContainer)