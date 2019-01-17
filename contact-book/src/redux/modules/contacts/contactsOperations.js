import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addContactSuccess,
  editContactSuccess,
} from './contactsActions';

export const fetchContacts = () => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.get('http://localhost:3006/contacts');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const addContact = text => async dispatch => {
  dispatch(fetchRequest());

  try {
    const response = await axios.post('http://localhost:3006/contacts', {
      text,
      completed: false,
    });
    dispatch(addContactSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error));
  }
};

export const editContact = id => async dispatch => {
  dispatch(fetchRequest());

  try {
    axios.patch(`http://localhost:3006/contacts/${id}`);
    dispatch(editContactSuccess(id));
  } catch (error) {
    dispatch(fetchError(error));
  }
};
