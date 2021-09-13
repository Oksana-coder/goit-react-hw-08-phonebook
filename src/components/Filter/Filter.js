import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from 'redux/contacts';
import { getFilter } from 'redux/contacts';
import TextField from '@material-ui/core/TextField';
import './Filter.scss';

const Filter = () => {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <TextField
      id="outlined-search"
      label="Find contacts by name"
      type="text"
      variant="outlined"
      value={value}
      onChange={event => dispatch(changeFilter(event.currentTarget.value))}
    />
  );
};

export default Filter;








    // <label className="contact-filter">
    //   Find contacts by name
    //   <input
    //     type="text"
    //     className="contact-filter__input"
    //     value={value}
    //     onChange={event => dispatch(changeFilter(event.currentTarget.value))} />
    // </label>