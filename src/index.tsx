import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';
import ContactIndex from './Components/ContactPages/ContactIndex';

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement!);
//const root = ReactDOM.createRoot(rootElement as HTMLElement);
//const root = ReactDOM.createRoot(document.getElementById("root")!);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Header />
    <ContactIndex />
    <Footer />
  </React.StrictMode>
);