import React, {useEffect} from 'react';
import { Button, Table } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {deleteEvent, getEvents} from '../../actions';

export default function EventList() {

    const eventsReducer = useSelector(state => state.eventsReducer)
    const dispatch = useDispatch();
    useEffect(() => {
        if (!eventsReducer.isLoaded) {
            dispatch(getEvents());
        }
    })

    const handleClickDelete = (id) => {
        dispatch(deleteEvent(id));
    }

    const tableRow = eventsReducer.events.map(event => {
        return (
            <tr key={event._id}>
                <td>{event._id}</td>
                <td>{event.firstName}</td>
                <td>{event.lastName}</td>
                <td>{event.email}</td>
                <td>{event.eventDate}</td>
                <td><Button color="danger" size="sm" onClick={() => handleClickDelete(event._id)}>delete</Button></td>
            </tr>
        )
    })

    return (
        <div className="event-list">
            <h2>My list of events</h2>
            <Table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>First name</th>
                        <th>Last name</th>
                        <th>Email</th>
                        <th>Event date</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRow}
                </tbody>
            </Table>
        </div>
    );
}