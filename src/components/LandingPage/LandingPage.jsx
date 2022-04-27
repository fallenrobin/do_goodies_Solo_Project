import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  page: {
    backgroundColor: "#F8D9D6",
    backgroundSize: 'cover',
    height: '800px',
    width: '700px'
  },
  roundImg: {
    width: "300px",
    height: "300px",
    borderRadius: "400" / "2",
    border: "5px double #D9D0F8",
    backgroundColor:"#F4F4E1"
  },
  btn: {
    backgroundColor: "#84C3C8",
    color: 'black',
    margin: '3px',
    '&:hover': {
      backgroundColor: "#e75480"
    },
  },
  delete: {
    color: "#e75480"
  }
})


function LandingPage() {
  const history = useHistory();
  const classes = useStyles();


  const onLogin = (event) => {
    history.push('/login');
  };

  const viewBakeSales = (event) => {
    // history.push('/needs to go to bake sale list');
    console.log('clicked viewBakeSales');
  };

  return (
    <div className={classes.page}>

      <img className={classes.roundImg} src="/images/logo.png" alt="Landing page screenshot" />

      {/* <RegisterForm /> */}

      <Button variant="contained" className={classes.btn} onClick={onLogin}>
        Login
      </Button >
      <Button variant="contained" className={classes.btn} onClick={viewBakeSales}>
        View bake sales
      </Button>
      <p style={{ color: 'blue' }} onClick={() => { history.push('/registration') }}>New user? Click to register</p>


    </div>
  );
}

export default LandingPage;
