
import {FETCH_ALL_EVENTS} from '../actions/events'

export default function (state = [], action) {

    if (action.type === FETCH_ALL_EVENTS){
        return state
    }

    return state
}