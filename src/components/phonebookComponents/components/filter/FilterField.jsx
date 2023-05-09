import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { TextField } from '@mui/material';
import { filterContacts } from '../../../Redux/slice';

export const FilterField = () => {
  const searchValue = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const searchFunc = e =>
    dispatch(filterContacts(e.target.value.toLowerCase()));

  return (
      <TextField
        id="standard-basic-1"
        name="filter"
        label="Find contacts by name"
        variant="standard"
        onInput={searchFunc}
        value={searchValue}
      ></TextField>
  );
};
