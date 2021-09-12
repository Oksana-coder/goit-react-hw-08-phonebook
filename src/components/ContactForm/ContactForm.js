import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operations } from 'redux/contacts';
import { getContacts } from 'redux/contacts';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Button from '@material-ui/core/Button';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import './ContactForm.scss';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  textField: {
    width: '250px',
  },
  button: {
    margin: theme.spacing(1),
    width: '250px',
  },
}));

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const existingContacts = useSelector(getContacts);
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      
      case 'number':
        setNumber(value);
        break;
      
      default:
        return;
    }
  };
  
  const handleSubmit = event => {
    event.preventDefault();

    const newContact = name.toLowerCase();
    const existingContactsNames = existingContacts.map(contact => contact.name.toLowerCase());
    if (existingContactsNames.includes(newContact)) {
      alert(`${newContact} is already in contacts.`);
      return;
    }

    dispatch(operations.addContact({name, number}));
    setName('');
    setNumber('');
  };
  
    return (
      <form className="contact-form" onSubmit={handleSubmit}>
      
        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-name">Name</InputLabel>
          <OutlinedInput
            id="outlined-name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            labelWidth={70}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="A name can consist only of letters, apostrophe, dashes, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc."
            required
          />
        </FormControl>

        <FormControl className={clsx(classes.margin, classes.textField)} variant="outlined">
          <InputLabel htmlFor="outlined-number">Number</InputLabel>
          <OutlinedInput
            id="outlined-number"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            labelWidth={70}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="A phone number can consist only of numbers, dashes, spaces, parentheses and can start with + ."
            required
          />
        </FormControl>
        
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className={classes.button}
          endIcon={<ContactPhoneIcon />}
        >
          Add contact
        </Button>
    </form>
    )
}




/* <label className="contact-form__label">
        Name
        <input
          type="text"
          className="contact-form__input"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label> */
/* <label className="contact-form__label">
        Number
        <input
          type="tel"
          className="contact-form__input"  
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label> */
/* <button
          type="submit"
          className="contact-form__btn"
        >
        Add contact
    </button>  */