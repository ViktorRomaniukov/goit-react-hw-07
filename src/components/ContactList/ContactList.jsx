import React from 'react';
import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
// import { selectNameFilter } from '../../redux/filtersSlice';
import { selectFilteredContacts } from '../../redux/contactsSlice';

const ContactList = () => {

  // const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector(selectNameFilter).toLowerCase();

  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <li key={id}>
        <Contact
          id={id}
          name={name}
          number={number}
          />
          </li>
      ))}
    </ul>
  );
};

export default ContactList;
