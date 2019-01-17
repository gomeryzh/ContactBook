import {
  ADD_SUCCESS,
  EDIT_SUCCESS,
  CHANGE_FILTER,
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

const editContactSuccess = id => ({
  type: EDIT_SUCCESS,
  payload: id,
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
  filterContact,
  fetchRequest,
  fetchSuccess,
  fetchError,
};
