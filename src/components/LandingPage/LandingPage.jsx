import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    backgroundColor: "#F8D9D6",
    backgroundSize: 'cover',
    height: '750px',
    width: '450px'
  },
  roundImg: {
    width: "300px",
    height: "300px",
    borderRadius: "400" / "2",
    border: "5px double #D9D0F8",
    backgroundColor: "#F4F4E1"
  },
  btn: {
    backgroundColor: "#a8e8ed",
    color: '#5c5c5c',
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
    <Grid container
      className={classes.page}
      style={{ justifyContent: 'center' }}
    >

      <div >
        <img className={classes.roundImg}
          style={{ marginTop: '50px' }}
          src="/images/logo.png" alt="Landing page screenshot" />
      </div>
      {/* <RegisterForm /> */}

      <div>
        <Button variant="contained" className={classes.btn} onClick={onLogin}>
          Login
        </Button >
        <Button variant="contained" className={classes.btn} onClick={viewBakeSales}>
          View bake sales
        </Button>
        <p style={{
          color: '#5c5c5c',
          border: '1px solid gray',
          borderRadius: '6px',
          padding: '7px',
          textAlign: 'center'
        }}
          onClick={() => { history.push('/registration') }}>New user? Click to register</p>


      </div >
    </Grid>
  );
}

export default LandingPage;
