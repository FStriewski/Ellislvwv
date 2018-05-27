import * as request from 'superagent'

const baseUrl = 'https://voorhoede-colibri-api-zhmoaomjvy.now.sh/api/v1'


export const FETCH_ALL_EVENTS = "FETCH_ALL_EVENTS"
export const FILTER_BY_DATE = "FILTER_BY_DATE"
export const FILTER_BY_TAG = "FILTER_BY_TAG"


export const fetchAllEvents = () => (dispatch) => {
    request
        .get(`${baseUrl}/events?language=en`)
        .then(response => dispatch({
            type: FETCH_ALL_EVENTS,
            payload: response.body
        }))
        .catch(error => console.error(error))
}

export const filterByDate = (start,end) => (dispatch) => {
    request
        .get(`${baseUrl}/events?language=en`)
        .then(response => dispatch({
            type: FILTER_BY_DATE,
            payload: response.body.filter(e => new Date(e.date.slice(0, 10)) > start && new Date(e.date.slice(0, 10)) < end)
        }))
        .catch(error => console.error(error))
}
export const filterByTag = (tag) => (dispatch) => {
    request
        .get(`${baseUrl}/events?language=en`)
        .then(response => dispatch({
            type: FILTER_BY_TAG,
            payload: response.body.filter(e => e.title.includes(tag) )
        }))
        .catch(error => console.error(error))
}

