import React,{useEffect, useState } from 'react';
import { Table, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if(!events.length) {
      axios.get('http://localhost:3000/event').then(response => {
        setEvents(response.data);
      })
    }
  })

  const tableRow = events.map((event,index) => {
    return (
      <tr key={index}>
        <td>{event.id}</td>
        <td>{event.firstName}</td>
        <td>{event.lastName}</td>
        <td>{event.email}</td>
        <td>{event.eventDate}</td>
        <td><Button color="success" size="sm">delete</Button></td>
      </tr>
    )
  })

  return (
    <div className="App container">

      <div className="event-form">
        <FormGroup>
          <Label for="firstName">First name</Label>
          <Input type="text" id="firstName"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input type="text" id="lastName"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email"></Input>
        </FormGroup>
        <FormGroup>
          <Label for="date">Event date</Label>
          <Input type="date" id="date"></Input>
        </FormGroup>
      </div>

      <div className="event-list">
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
    </div>
  );
}

export default App;
