import React from 'react';
import PropTypes from 'prop-types';
import { Delete, Card, Name, Tel } from './ContactEl.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../Redux/query';

export default function ContactEl({ contact }) {
  const dispatch = useDispatch();

  const delFunc = () => dispatch(deleteContact(contact.id));

  return (
    <Card>
      <Delete type="button" onClick={delFunc}>
        X
      </Delete>
      <Name>{contact.name}:</Name>
      <Tel> {contact.number}</Tel>
    </Card>
  );
}

ContactEl.propTypes = {
  contact: PropTypes.object.isRequired,
};
