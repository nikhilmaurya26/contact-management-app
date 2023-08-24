import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
// import ContactDetails from './components/ContactDetails';

function App() {
  return (
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/add" element={<ContactForm />} />
        {/* <Route path="/contact/:id" element={<ContactDetails />} /> */}
        {/* Add more routes as needed */}
      </Routes>
  );
}

export default App;
