import React, { useState } from 'react';
import style from './ContactForm.module.css';

function ContactForm ({onSubmit}) {
    const [name, setName] = useState('');
  const [number, setNumber] = useState('');
    
  const handleChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'number':
        setNumber(event.currentTarget.value);
        break;
      default:
        throw new Error('Error');
    };
  }

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({ name, number });
    setName('');
    setNumber('');
  };

    return (
      <form className={style.form} onSubmit={handleSubmit}>
        <label>
          Name
          <input
            className={style.inputName}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            className={style.inputNumber}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>

        <button type="submit" className={style.buttonEditor}>
          Add contact
        </button>
      </form>
    );
  } 

export default ContactForm;