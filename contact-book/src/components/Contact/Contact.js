import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import * as s from './Contact.module.css';

const Contact = SortableElement(({ name, phone, email, onEdit, onDelete }) => (
  <div className={s.container}>
    <h4>{name}</h4>
    <span className={s.text}>{phone}</span>
    <span className={s.text}>{email}</span>

    <hr />
    <footer className={s.footer}>
      <button className={s.button} onClick={onEdit}>
        Edit
      </button>
      <button className={s.button} onClick={onDelete}>
        Delete
      </button>
    </footer>
  </div>
));

export default Contact;
