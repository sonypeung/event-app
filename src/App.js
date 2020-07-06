import React,{useEffect, useState } from 'react';
import axios from 'axios';
import EventForm from './components/event-form/Event.Form.Component';
import EventList from './components/event-list/Event.List.Component';

function App() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    if(!events.length) {
      getEvents();
    }
  })

const getEvents = () => {
  axios.get('http://localhost:3000/event').then(response => {
    setEvents(response.data);
  });
}

  return (
    <div className="App container">
      <EventForm getEvents={getEvents} />
      <EventList events={events} getEvents={getEvents} />
    </div>
  );
}

export default App;
