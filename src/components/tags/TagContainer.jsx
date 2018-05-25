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
    
        let myArr = []
        const regexp = /^[A-Z]/

        events.map(e => myArr.push(e.title) )
        myArr = myArr.join(" ").split(" ")
      //.match(regexp)
   
console.log(myArr)

        return (
            <section className="tagContainer">
                {myArr.map(e => <Tag name={e}/>)}
            </section>
        )
    }

}

const mapStateToProps = (state) => (
    {
        events: state.events
    }
)

export default connect(mapStateToProps, { fetchAllEvents })(CarouselContainer)