import React from 'react';
import ContactsList from './components/ContactsList/ContactsListContainer';
import AppHeader from './components/AppHeader/AppHeader';
import ContactEditor from './components/ContactEditor/ContactEditorContainer';
import Modal from './components/Modal/ModalContainer';

const App = () => (
  <>
    <AppHeader />

    {/* <ContactEditor /> */}
    <ContactsList />
    <Modal />
  </>
);

export default App;
