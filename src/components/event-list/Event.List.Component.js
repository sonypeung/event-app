import React from 'react';
import { Button, Table } from 'reactstrap';
import axios from 'axios';

export default function EventList({events, getEvents}) {
    const handleClickDelete = (id) => {
        const url = 'http://localhost:3000/event/' + id;
        axios.delete(url).then(() => {
            getEvents();
        }).catch(() => {
            console.log('error');
        });
    }

    const tableRow = events.map(event => {
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