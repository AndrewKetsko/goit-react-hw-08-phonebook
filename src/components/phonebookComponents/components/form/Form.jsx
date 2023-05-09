import React from 'react';
import { PhoneBook } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, updateContact } from '../../../Redux/query';
import { Button, TextField } from '@mui/material';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const submitForm = e => {
    e.preventDefault();
    const newContact = {
      name: e.target.name.value,
      number: e.target.number.value,
    };
    if (
      contacts.find(
        contact =>
          contact.name === newContact.name &&
          contact.number === newContact.number
      )
    ) {
      alert('You have this contact already');
      return e.currentTarget.reset();
    }
    if (contacts.find(contact => contact.name === newContact.name)) {
      newContact.id = contacts.find(
        contact => contact.name === newContact.name
      ).id;
      dispatch(updateContact(newContact));
      alert('You just changed this contact');
      return e.currentTarget.reset();
    }
    dispatch(addContact(newContact));
    e.currentTarget.reset();
  };

  return (
    <>
      <PhoneBook action="" onSubmit={submitForm}>
        <TextField
          id="standard-basic-1"
          name="name"
          label="Name"
          variant="standard"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        ></TextField>{' '}
        <TextField
          id="standard-basic-2"
          name="number"
          label="Phone number"
          variant="standard"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        ></TextField>
        <Button type="submit">Add/update contact</Button>
      </PhoneBook>
    </>
  );
};
