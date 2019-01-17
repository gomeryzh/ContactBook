import React, { lazy } from 'react';
import ContactsList from './components/ContactsList/ContactsListContainer';
import AppHeader from './components/AppHeader/AppHeader';
import ContactEditor from './components/ContactEditor/ContactEditor';

const App = () => (
  <>
    <AppHeader />
    <ContactEditor />
    <ContactsList />
  </>
);

export default App;
