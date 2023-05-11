import React from 'react';
import PropTypes from 'prop-types';
import { Card } from './ContactEl.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../Redux/query';
import { DeleteForever } from '@mui/icons-material';
import { Typography } from '@mui/material';
export default function ContactEl({ contact }) {
  const dispatch = useDispatch();

  const delFunc = () => dispatch(deleteContact(contact.id));

  return (
    <Card>
      {/* <Delete type="button" onClick={delFunc}> */}
      {/* </Delete> */}
      <Typography sx={{ fontSize: 15 }}>{contact.name}:</Typography>
      <Typography sx={{ fontSize: 15, marginLeft: 'auto' }}>
        {contact.number}
      </Typography>
      {/* <Name>{contact.name}:</Name> */}
      {/* <Tel> {contact.number}</Tel> */}
      <DeleteForever
        sx={{ fontSize: 20, marginLeft: '5px' }}
        onClick={delFunc}
      />
    </Card>
  );
}

ContactEl.propTypes = {
  contact: PropTypes.object.isRequired,
};
