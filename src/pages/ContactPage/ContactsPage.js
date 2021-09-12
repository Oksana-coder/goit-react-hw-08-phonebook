import { useEffect } from 'react';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList'
import { useDispatch, useSelector } from 'react-redux';
import { operations } from 'redux/contacts';
import { getLoading } from 'redux/contacts';
import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import './ContactPage.scss';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getLoading);

  useEffect(() => {
    dispatch(operations.fetchContacts());
  }, [dispatch]);

    return (
      <div className="contact-page-container">
        <ContactForm />
        <div className="contacts-display">
          <h2>Contacts</h2>
          <Filter />

          {isLoading &&
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
            />}
      
          <ContactList />
        </div>
      </div>
    )
  }