import React from 'react';
import IconButton from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import './ContactListItem.scss';

const ContactListItem = ({ name, number, onDeleteContact }) => {

  return (
  <>
    <span className="contact-details">{name}: {number}</span>
      <IconButton
        type="button"
        color="secondary"
        onClick={onDeleteContact}
        aria-label="delete">
          <DeleteIcon />
      </IconButton>
  </>
);
}

export default ContactListItem;





/* <button
      type="button"
      className="contact-list__delete-btn"
      onClick={onDeleteContact}>Delete</button> */