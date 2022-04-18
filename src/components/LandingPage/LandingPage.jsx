import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
// import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  const viewBakeSales = (event) => {
    // history.push('/needs to go to bake sale list');
    console.log('clicked viewBakeSales');
  };

  return (
    <div className="container">

      <div className="grid">
        <div className="grid-col grid-col_8">
          <img src="../public/images/landingScreenshot.png" alt="Landing page screenshot" />
        </div>

        {/* <RegisterForm /> */}

        <center>
          <button className="btn btn_sizeSm" onClick={onLogin}>
            Login
          </button>
          <button className="btn btn_sizeSm" onClick={viewBakeSales}>
            View bake sales
          </button>
          <p style={{color:'blue'}} onClick={() => { history.push('/registration') }}>New user? Click to register</p>

        </center>
      </div>
    </div>

  );
}

export default LandingPage;
