import React from 'react';
import EventForm from './components/event-form/Event.Form.Component';
import EventList from './components/event-list/Event.List.Component';

function App() {
  return (
    <div className="App container">
      <EventForm />
      <EventList />
    </div>
  );
}

export default App;

