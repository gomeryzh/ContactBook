import React from 'react';

const Contact = ({ name, phone, email, onEdit, onDelete }) => (
  <div
    style={{
      minWidth: 320,
      boxShadow:
        '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
      marginBottom: 32,
      marginRight: 8,
      marginLeft: 8,
      padding: 8,
      flex: '0 0 calc(33.3333% - 16px)',
      backgroundColor: '#fff',
    }}
  >
    <h4>{name}</h4>
    <h5>{phone}</h5>
    <h6>{email}</h6>

    <hr />
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <button onClick={onEdit}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </footer>
  </div>
);

export default Contact;
