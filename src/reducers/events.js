
import { FETCH_ALL_EVENTS, FILTER_BY_DATE, FILTER_BY_TAG } from '../actions/events'



export default function (state = [], action) {

    switch (action.type) {
        case FETCH_ALL_EVENTS:
            return action.payload
        case FILTER_BY_DATE:
            return action.payload
        case FILTER_BY_TAG:
            return action.payload
        default: return state
    }
}
