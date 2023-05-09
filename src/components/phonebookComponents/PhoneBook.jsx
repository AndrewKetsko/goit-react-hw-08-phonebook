import React from 'react';
import { Form } from './components/form/Form';
import { FilterField } from './components/filter/FilterField';
import ContactList from './components/contacts/ContactList';
import { Container, Header } from './PhoneBook.styled';

export const Phonebook = () => {
  return (
    <Container>
      {/* <Header>PhoneBook</Header> */}
      <Form />

      <Header>Contacts</Header>
      <FilterField />

      <ContactList />
    </Container>
  );
};
