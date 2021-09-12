import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactListItem from '../ContactListItem';
import { operations } from 'redux/contacts';
import { getFilteredContacts } from 'redux/contacts';
import './ContactList.scss';


const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(operations.deleteContact(id));

  return(
  <ul className="contact-list">
    {contacts.map(({ id, name, number}) => (
      <li key={id} className="contact-list__item">
        <ContactListItem
          name={name}
          number={number}
          onDeleteContact={() => onDeleteContact(id)}
        />
      </li>
    ))}
  </ul>
);
};

export default ContactList;
