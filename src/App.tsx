import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import EditContact from './components/EditContact';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Charts from './pages/Charts';
import Map from './pages/Map';

function App() {
  return (
    <Router>
      <div className="app flex">
        <Sidebar />
        <div className="content w-4/5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/add" element={<ContactForm />} />
            <Route path="/edit/:id" element={<EditContact />} />
            <Route path="/maps" element={<Map />} />
            {/* Add more routes as needed */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
