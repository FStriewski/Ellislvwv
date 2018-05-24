import * as request from 'superagent'

const baseUrl = 'https://voorhoede-colibri-api-zhmoaomjvy.now.sh/api/v1'


export const FETCH_ALL_EVENTS = "FETCH_ALL_EVENTS"


export const fetchAllEvents = () => (dispatch) => {
    request
        .get(`${baseUrl}/events?language=en`)
        .then(response => dispatch({
            type: FETCH_ALL_EVENTS,
            payload: response.body
        }))
        .catch(error => console.error(error))
}