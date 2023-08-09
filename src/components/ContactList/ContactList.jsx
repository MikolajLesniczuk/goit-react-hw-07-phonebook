import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components/contact/contact';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filters);
  const localstorage = JSON.parse(localStorage.getItem('contacts'));
  // console.log(localstorage);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  const storageContact = contacts.filter(contact =>
    contact.name.toLowerCase().includes(String(localstorage).toLowerCase())
  );

  const whatToDisplay =
    storageContact.length > 0 ? storageContact : filteredContacts;

  return (
    <div>
      {whatToDisplay.length > 0 ? (
        whatToDisplay.map(contact => (
          <Contact key={contact.id} contact={contact} />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export { ContactList };
