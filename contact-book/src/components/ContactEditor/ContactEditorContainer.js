import { connect } from 'react-redux';
import ContactEditor from './ContactEditor';
import { addContact } from '../../redux/modules/contacts/contactsOperations';

const mapDispatch = {
  addContact: addContact,
};

export default connect(
  null,
  mapDispatch,
)(ContactEditor);
