import React from "react";

import "./styles/reset.scss";
import "./styles/variables.scss";
import "./styles/global.scss";


import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './images/logo.svg';
import user from './images/user.svg';
import search from './icons/search.svg';

// import NavSearch from "/src/components/Navbar";
import Layout from "./components/Layout";
import Loginbox from "./components/Loginbox";

function App() {
  return (
    <>
      
      <div className="d-flex flex-row justify-content-between m-5 p-5 " >

            <div className=' ms-5 '>
                <img src={logo} alt="logo" className='' />
            </div>

            <div className="d-flex col-sm-6 w-25" >
              <div className="input-group border rounded-4" >

                <span className="input-group-text bg-transparent border-0 " id="search-addon">
                  <button type="button" className="btn">
                  <i className="fas fa-search"></i>
                    {<img src={ search } alt="search" /> } 
                  </button>
                </span>

                <input type="search" 
                className="form-control text-center text-white bg-transparent border-0 me-2 "
                placeholder="Search" 
                aria-label="Search" 
                aria-describedby="search-addon"
                />

              </div>
              
            </div>

                  <NavDropdown 
                      title={<img src={ user } alt="user" /> }
                      id="navbarScrollingDropdown"
                      className='text-white me-5 '
                      style={{fontSize: '1.5rem'}}
                    >
                      <NavDropdown.Item href="#action2" className='' >Yusuf</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action3">Dashboard</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Settings</NavDropdown.Item>
                      <NavDropdown.Item href="#action5">Profile</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action6">Sign Out</NavDropdown.Item>
                  </NavDropdown>

      </div>



      <Layout />
      <Loginbox />
    </>
  );
}

export default App;
