import React from 'react';
import { useSelector } from 'react-redux';
import { Contact } from 'components/contact/contact';

const ContactList = () => {
  const contacts = useSelector(state => {
    return state.contacts.items;
  });
  const filter = useSelector(state => state.filters);

  // const filteredContacts = contacts.filter(contact =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );

  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map(contact => <Contact key={contact.id} contact={contact} />)
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
};

export { ContactList };
