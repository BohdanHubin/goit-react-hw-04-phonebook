import React, { useState, useEffect } from 'react';

import style from './App.module.css';
import { nanoid } from 'nanoid'

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

function App () {

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

const addContact = ({ name, number }) => {

  const isContactExist = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
    
  if (isContactExist) {
      return  alert(`${name} is already in contacts`);
    }
  
    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
   setContacts(prevContacts => [...prevContacts, contact]);
  }; 

  const changeFilter = e => {
    setFilter(e.currentTarget.value.trim());
  };

 const deleteContact = todoId => {
    setContacts(prevState =>
      prevState.filter(contact => contact.id !== todoId),
    );
  };

 const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
 
    const visibleContacts = getVisibleContacts();
    return (
      <div className={style.container}> 
       <h1>Phonebook</h1>  
        <ContactForm onSubmit={addContact} />
        <Filter value={filter} onChange={changeFilter} />
        <h2>Contacts</h2>
        <ContactList onDeleteContact={deleteContact} contacts={visibleContacts}/>
      </div>)

}

export default App
