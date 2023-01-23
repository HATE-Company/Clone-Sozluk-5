import * as React from 'react';
import NavSearch from './Components/Navbar';
import Layout from './Components/Layout';
import './App.css';
import Loginbox from './Components/Loginbox';

function App() {
  return (
   <>
      <NavSearch />
      <Layout />
      <Loginbox />

      <div className="App"></div>
        
    </>
  );
}

export default App;