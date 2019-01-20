import React from 'react';
import Contact from '../Contact/Contact';

const ContactsList = ({ contacts = [], editContact, deleteContact }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: 1440,
      marginRight: 'auto',
      marginLeft: 'auto',
      padding: '0 16px',
      marginTop: 32,
    }}
  >
    {contacts.map(contact => (
      <Contact
        key={contact.id}
        {...contact}
        onDelete={() => deleteContact(contact.id)}
        onEdit={() => editContact(contact.id)}
      />
    ))}
  </div>
);

export default ContactsList;
