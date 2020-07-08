import axios from 'axios';

const fetchEventsSuccess = events => {
    return {
        type: 'FETCH_EVENTS_SUCCESS',
        payload: events
    }
}

const fetchEventsFailure = error => {
    return {
        type: 'FETCH_EVENTS_FAILURE',
        payload: error
    }
}

export const addEventFailure = error => {
    return {
        type: 'ADD_EVENT_FAILURE',
        payload: error
    }
}

export const getEvents = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3000/event')
        .then((response) => {
            const events = response.data;
            dispatch(fetchEventsSuccess(events));
        })
        .catch(e => {
            const error = e.message
            dispatch(fetchEventsFailure(error));
        });
    }
}

export const deleteEvent = (id) => {
    return  (dispatch) => {
        return axios.delete('http://localhost:3000/event/' + id)
        .then(() => {
            dispatch(getEvents());
        })
        .catch(e => {
            const error = e.message
            dispatch(fetchEventsFailure(error));
        });
    }
}

export const addEvent = (event) => {
    return  (dispatch) => {
        return axios.post('http://localhost:3000/event', event)
        .then(() => {
            dispatch(getEvents());
        })
        .catch(e => {
            const error = e.message
            dispatch(addEventFailure(error));
        });
    }
}