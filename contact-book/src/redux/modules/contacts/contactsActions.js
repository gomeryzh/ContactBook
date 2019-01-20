import {
  ADD_SUCCESS,
  EDIT_SUCCESS,
  DELETE_SUCCESS,
  CHANGE_FILTER,
  CHANGE_CONTACT_POSITION,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
} from './contactsActionsTypes';

const filterContact = filter => ({
  type: CHANGE_FILTER,
  payload: filter,
});

const addContactSuccess = contact => ({
  type: ADD_SUCCESS,
  payload: contact,
});

const deleteContactSuccess = id => ({
  type: DELETE_SUCCESS,
  payload: id,
});

const editContactSuccess = id => ({
  type: EDIT_SUCCESS,
  payload: id,
});

const changeContactPosition = (contacts, oldIndex, newIndex) => ({
  type: CHANGE_CONTACT_POSITION,
  payload: contacts,
  oldIndex,
  newIndex,
});

const fetchRequest = () => ({
  type: FETCH_REQUEST,
});

const fetchSuccess = notes => ({
  type: FETCH_SUCCESS,
  payload: notes,
});

const fetchError = error => ({
  type: FETCH_ERROR,
  payload: error,
});

export {
  addContactSuccess,
  editContactSuccess,
  deleteContactSuccess,
  changeContactPosition,
  filterContact,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
