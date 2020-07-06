import React, { useState } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import './Event.Form.Component.css';

export default function EventForm({getEvents}) {
    const [error, setError] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const handleClickAdd = () => {
        if (isDefined(firstName) && isDefined(lastName) && isDefined(email) && isDefined(date)) {
            axios.post('http://localhost:3000/event', {
                firstName: firstName,
                lastName: lastName,
                email: email,
                eventDate: date
            }).then(() => {
                getEvents();
                clear();
            }).catch((e) => {
                setError(e.message);
            }
            )
        } else {
            setError('All fields are required.')
        }
    }

    const isDefined = (text) => {
        return text !== "" && text?.length > 0;
    }

    const clear = () => {
        setError('');
        setFirstName('');
        setLastName('');
        setDate('');
        setEmail('');
    }

    return (
        <div className="event-form">
            <FormGroup>
                <Label for="firstName">First name</Label>
                <Input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="lastName">Last name</Label>
                <Input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required></Input>
            </FormGroup>
            <FormGroup>
                <Label for="date">Event date</Label>
                <Input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required></Input>
            </FormGroup>

            <Button color="success" onClick={handleClickAdd}>Add event</Button>
            <div className="event-form__error">{error}</div>
        </div>
    );
}