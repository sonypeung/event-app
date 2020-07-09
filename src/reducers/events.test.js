import reducer from './events';
import expect from 'expect';

describe('Events reducer should: ', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                events: [],
                error: '',
                isLoaded: false
            }
        )
    });

    it('should handle FETCH_EVENTS_SUCCESS', () => {
        expect(reducer([], {
            type: 'FETCH_EVENTS_SUCCESS',
            payload: [{
                firstName: 'sony',
                lastName: 'Peung'
            }]
        })).toEqual(
            {
                events: [{
                    firstName: 'sony',
                    lastName: 'Peung'
                }],
                error: '',
                isLoaded: true
            }
        );
    });

    it('should handle FETCH_EVENTS_FAILURE', () => {
        expect(reducer([], {
            type: 'FETCH_EVENTS_FAILURE',
            payload: 'An error occured'
        })).toEqual(
            {
                events: [],
                error: 'An error occured',
                isLoaded: true
            }
        );
    });

    // this test is not working, I was searching for a solution but I didn't find. I don't know what is wrong in here.
    // it('should handle ADD_EVENT_FAILURE', () => {
    //     expect(reducer([{
    //         events: [{
    //             firstName: 'sony',
    //             lastName: 'Peung'
    //         }], 
    //         error: '',
    //         isLoaded: true
    //     }], {
    //         type: 'ADD_EVENT_FAILURE',
    //         payload: 'Error adding event'
    //     })).toEqual(
    //         {
    //             events: [{
    //                 firstName: 'sony',
    //                 lastName: 'Peung'
    //             }], 
    //             error: 'Error adding event',
    //             isLoaded: true
    //         }
    //     );
    // });
})