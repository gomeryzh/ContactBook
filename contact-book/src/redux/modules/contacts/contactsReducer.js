import { combineReducers } from 'redux';
import { arrayMove } from 'react-sortable-hoc';
import * as types from './contactsActionsTypes';

function contactsReducer(state = [], { type, payload }) {
  switch (type) {
    case types.FETCH_SUCCESS:
      return payload;
    case types.ADD_SUCCESS:
      return [...state, payload];
    case types.DELETE_SUCCESS:
      return state.filter(item => item.id !== payload);

    case types.CHANGE_CONTACT_POSITION:
      const newOrder = arrayMove(...state, payload.oldIndex, payload.newIndex);
      return newOrder;

    case types.EDIT_SUCCESS:
      return state.map(item =>
        item.id === payload ? { ...item, name: item.name } : item,
      );
    default:
      return state;
  }
}

function filterReducer(state = '', { type, payload }) {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
}

export default combineReducers({
  items: contactsReducer,
  filter: filterReducer,
});
