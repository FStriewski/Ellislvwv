import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Tag from './Tag'
import { fetchAllEvents, filterByTag } from '../../actions/events'
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

    generateTags = (events) => {
        let myArr = []
        const histogram = {}
        let tagList = []
        const regexp = /^[A-Z]/

        if (!events) return

        events.map(e => myArr.push(e.title))
        myArr = myArr.join(" ").split(" ")

        myArr.forEach(e => histogram.hasOwnProperty(e) ? histogram[e] += 1 : histogram[e] = 1)

        for (let property in histogram) {
            if (histogram[property] > 1 && property.match(regexp)) {
                tagList.push([property, histogram[property]])
            }
        }

        return tagList.sort()
    }

    resetFilter = () => {
        this.props.fetchAllEvents()
    }


    render() {
        const tagList = this.generateTags(this.props.events)
  
        return (
            <section className="tagContainer">
            <button onClick={this.resetFilter}>All </button> 
            {
                    tagList.map(tag => <Tag key={tag[0]} name={tag[0]} count={tag[1]} />)
            }
            </section>
        )
    }

}

const mapStateToProps = (state) => (
    {
        events: state.events
    }
)

export default connect(mapStateToProps, { fetchAllEvents, filterByTag })(CarouselContainer)