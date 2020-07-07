const initialState = {
    events: [],
    error: '',
    isLoaded: false
}

const eventsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'FETCH_EVENTS_SUCCESS': 
            return {
                events : action.payload,
                error: '',
                isLoaded: true
            }
        case 'FETCH_EVENTS_FAILURE':
            return {
                events : [],
                error: action.payload,
                isLoaded: true
            };
        case 'ADD_EVENT_FAILURE':
            return {
                events: state.events,
                error: action.payload,
                isLoaded: true
            }
        default:
            return state;
    }
}

export default eventsReducer;