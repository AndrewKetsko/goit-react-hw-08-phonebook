import React from 'react';
import { Input } from '../filter/FilterField.styled';
import { Button, PhoneBook } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../../Redux/query';

export const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);

  const submitForm = e => {
    e.preventDefault();
    if (contacts.find(contact => contact.name === e.target.name.value)) {
      alert('You have this contact already');
      return e.currentTarget.reset();
    }
    const contact = {
      name: e.target.name.value,
      phone: e.target.number.value,
    };
    dispatch(addContact(contact));
    e.currentTarget.reset();
  };

  return (
    <>
      <PhoneBook action="" onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="number">Number</label>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button type="submit">Add contact</Button>
      </PhoneBook>
    </>
  );
};
