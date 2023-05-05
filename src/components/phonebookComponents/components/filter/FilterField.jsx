import React from 'react';
import { Input, Name } from './FilterField.styled';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterContacts } from '../../../Redux/slice';

export const FilterField = () => {
  const searchValue = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();
  const searchFunc = e =>
    dispatch(filterContacts(e.target.value.toLowerCase()));

  return (
    <>
      <Name htmlFor="search">Find contacts by name</Name>
      <Input
        type="text"
        name="filter"
        onInput={searchFunc}
        value={searchValue}
      />
    </>
  );
};
