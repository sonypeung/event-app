import React, { useState } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import {useSelector, useDispatch} from 'react-redux';
import {addEvent, addEventFailure} from '../../actions';
import {isDefined, isValidEmail} from './Event.Form.Validation'

import './Event.Form.Component.css';

export default function EventForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');

    const eventsReducer = useSelector(state => state.eventsReducer)
    const dispatchEvent = useDispatch();

    const handleClickAdd = () => {
        if (isDefined(firstName) && isDefined(lastName) && isDefined(email) && isDefined(date)) {
            if (isValidEmail(email)) {
                dispatchEvent(addEvent({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    eventDate: date
                }))
                clear();
            } else {
                dispatchEvent(addEventFailure('Please provide a correct email.'));
            }
        } else {
            dispatchEvent(addEventFailure('All fields are required.'));
        }
    }

    const clear = () => {
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
            <div className="event-form__error">{eventsReducer.error}</div>
        </div>
    );
}