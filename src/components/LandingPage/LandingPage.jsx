import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  // page: {
  //   backgroundColor: "#F8D9D6",
  //   backgroundSize: 'cover',
  //   height: '750px',
  //   width: '450px'
  // },
  roundImg: {
    width: "300px",
    height: "300px",
    borderRadius: "400" / "2",
    border: "5px double #D9D0F8",
    backgroundColor: "#F4F4E1",
    webkitBoxShadow: "7px -7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26)",
    boxShadow: "7px -7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26)"
  },
  btn: {
    backgroundColor: "#a8e8ed",
    color: '#5c5c5c',
    margin: '3px',
    '&:hover': {
      backgroundColor: "#e75480"
    },
  },
  register: {
    backgroundColor: '#FEFFF6',
    color: '#5c5c5c',
    border: '1px solid gray',
    borderRadius: '16px',
    padding: '7px',
    textAlign: 'center'
  },
  title: {
    // fontFamily: 'Kranky, cursive',
    fontFamily: 'Crafty Girls, cursive',
    color: '#FEFFF6',
    textShadow: '2px 2px #444',
    backdropFilter: 'blur(2px)',
    borderRadius: '8px',
    padding: '1px'
    // marginTop: '20px'
  }
})
// style={{backdropFilter: 'blur(3px)', borderRadius: '8px', padding:'5px'}}


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
    <Grid
      container
      style={{ justifyContent: 'center' }}
    >

      <div >
        <img className={classes.roundImg}
          style={{ marginTop: '50px' }}
          src="/images/logo.png" alt="Landing page screenshot" />
      </div>

      <Grid
        container
        style={{
          justifyContent: 'center',
          display: 'inline-grid',
          justifyItems: 'center'
        }}
      >
        <Typography
          variant='h3'
          className={classes.title} style={{ marginTop: '20px', marginBottom: '20px' }}>Do Goodies
        </Typography>
        <Typography
          variant='h5'
          className={classes.title} style={{ marginBottom: '20px' }}>treat well, do good.
        </Typography>
      </Grid>

      <div>
        <Button variant="contained" className={classes.btn} onClick={onLogin}>
          Login
        </Button >
        <Button variant="contained" className={classes.btn} onClick={viewBakeSales}>
          View bake sales
        </Button>

        <p className={classes.register}
          onClick={() => { history.push('/registration') }}>
          New user? Click to register
        </p>


      </div >
    </Grid>
  );
}

export default LandingPage;
