import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from './index';

const middleware = [thunk];
const mockstore = configureMockStore(middleware);

describe('actions/index.js should', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('fetch correct data after calling action getEvents()', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: {
                    events : [{
                        firstName: 'sony',
                        lastName: 'peung',
                        email: 'test@test.fr',
                        eventDate: '08/04/2020'
                    }],
                    error: '',
                    isLoaded: true
                }
            });
        });

        const store = mockstore({
            events : [{
                firstName: 'sony',
                lastName: 'peung',
                email: 'test@test.fr',
                eventDate: '08/04/2020'
            }],
            error: '',
            isLoaded: true
        })

        return store.dispatch(actions.getEvents()).then(() => {
            const event = store.getActions()[0].payload.events[0];
            expect(store.getActions()[0].type).toEqual('FETCH_EVENTS_SUCCESS');
            expect(store.getActions()[0].payload.events.length).toEqual(1);
            expect(event.firstName).toEqual('sony');
            expect(event.lastName).toEqual('peung');
            expect(event.email).toEqual('test@test.fr');
            expect(event.eventDate).toEqual('08/04/2020');
        })
    })
})