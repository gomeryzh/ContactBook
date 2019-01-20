import React from 'react';
import Contact from '../Contact/Contact';
import { SortableContainer } from 'react-sortable-hoc';

const ContactsList = SortableContainer(
  ({ contacts = [], editContactStart, deleteContact }) => (
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
      {contacts.map((contact, index) => (
        <Contact
          key={`contact-${index}`}
          {...contact}
          onDelete={() => deleteContact(contact.id)}
          onEdit={() => editContactStart(contact.id)}
        />
      ))}
    </div>
  ),
);

export default ContactsList;
