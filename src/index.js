import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ContactIndex from './components/ContactPages/ContactIndex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <ContactIndex />
    <Footer />
  </React.StrictMode>
);