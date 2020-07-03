import React,{useEffect, useState } from 'react';
import { Table, Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import './app.css';

function App() {
  const [events, setEvents] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(undefined);

  useEffect(() => {
    if(!events.length) {
      axios.get('http://localhost:3000/event').then(response => {
        setEvents(response.data);
      })
    }
  })

  const handleClickAdd = () => {
    axios.post('http://localhost:3000/event', {
    firstName: firstName,
    lastName: lastName,
    email: email,
    eventDate: date
    }).then(response => {
      console.log(response);
    }).catch(()=>{
      console.log('error')
    })
  }

  const handleClickDelete = (id) => {
    const url = 'http://localhost:3000/event/' + id; 
    axios.delete(url).then(response => {
      console.log(response)
    }).catch(()=>{
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
        <td><Button color="danger" size="sm" onClick={()=>handleClickDelete(event._id)}>delete</Button></td>
      </tr>
    )
  })

  return (
    <div className="App container">

      <div className="event-form">
        <FormGroup>
          <Label for="firstName">First name</Label>
          <Input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Input>
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last name</Label>
          <Input type="text" id="lastName" value={lastName} onChange={(e)=>setLastName(e.target.value)}></Input>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)}></Input>
        </FormGroup>
        <FormGroup>
          <Label for="date">Event date</Label>
          <Input type="date" id="date" value={date} onChange={(e)=>setDate(e.target.value)}></Input>
        </FormGroup>

        <Button color="success" onClick={handleClickAdd}>Add event</Button>
      </div>

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
    </div>
  );
}

export default App;
