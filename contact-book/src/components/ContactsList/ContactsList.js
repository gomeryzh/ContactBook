import React, { Component } from 'react';
import Contact from '../Contact/Contact';
import { arrayMove } from 'react-sortable-hoc';
import { SortableContainer } from 'react-sortable-hoc';

class ContactsList extends Component {
  onSortEnd({ oldIndex, newIndex }) {
    const newOrderedList = arrayMove(this.props.contacts, oldIndex, newIndex);
    this.props.setNewOrder(newOrderedList);
  }

  render() {
    const { contacts = [], editContactStart, deleteContact } = this.props;
    const SortableTableBody = SortableContainer(({ contacts = [] }) => {
      return (
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
          {contacts.map((contact, index) => {
            return (
              <Contact
                key={`contact-${index}`}
                index={index}
                contact={contact}
                {...contact}
                onDelete={() => deleteContact(contact.id)}
                onEdit={() => editContactStart(contact.id)}
              />
            );
          })}
        </div>
      );
    });

    return (
      <div>
        <SortableTableBody
          contacts={contacts}
          // useDragHandle={true}
          onSortEnd={this.onSortEnd.bind(this)}
        />
      </div>
    );
  }
}

// const ContactsList = SortableContainer(
//   ({ contacts = [], editContactStart, deleteContact }) => (
//     <div
//       style={{
//         display: 'flex',
//         flexWrap: 'wrap',
//         maxWidth: 1440,
//         marginRight: 'auto',
//         marginLeft: 'auto',
//         padding: '0 16px',
//         marginTop: 32,
//       }}
//     >
//       {contacts.map((contact, index) => (
//         <Contact
//           key={`contact-${index}`}
//           index={index}
//           {...contact}
//           onDelete={() => deleteContact(contact.id)}
//           onEdit={() => editContactStart(contact.id)}
//         />
//       ))}
//     </div>
//   ),
// );

export default ContactsList;
