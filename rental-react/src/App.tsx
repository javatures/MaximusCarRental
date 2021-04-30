import React from 'react';
import './App.css';
import SigninForm from './components/SigninForm'
import NavBar from './components/NavBar'
import NewRenterContainer from './components/NewRenterContainer';

function App() {
  return (
    <>
    <NavBar />
    <SigninForm />
    <NewRenterContainer />
    </>
  );
}

export default App;
