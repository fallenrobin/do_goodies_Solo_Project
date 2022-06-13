import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

import {
  makeStyles,
  Button,
  Grid,
  Typography,
  Fab
} from '@material-ui/core';


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
    margin: 'auto',
    display: 'flex'
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
    fontFamily: 'Crafty Girls, cursive',
    color: '#FEFFF6',
    textShadow: '2px 2px #444',
    backdropFilter: 'blur(2px)',
    borderRadius: '8px',
    padding: '1px'
  }
})


function LandingPage() {
  const history = useHistory();
  const classes = useStyles();


  const onLogin = (event) => {
    history.push('/login');
  };


  return (
    <Grid
      container
      style={{ justifyContent: 'center' }}
    >

      <div >
        <img className={classes.roundImg}
          style={{ marginTop: '1em' }}
          src="/images/logo.png" alt="Do Goodies logo" />
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
          variant='h2'
          className={classes.title}
          style={{
            marginTop: '20px',
            marginBottom: '20px'
          }}>
          Do Goodies
        </Typography>
        <Typography
          variant='h4'
          className={classes.title}
          style={{ marginBottom: '1.5em' }}>
          treat well, do good
        </Typography>
      </Grid>

      <div>
        <Button
          variant="contained"
          className={classes.btn}
          onClick={onLogin}>
          Login
        </Button >

        <p className={classes.register}
          onClick={() => { history.push('/registration') }}>
          New user? Register here
        </p>


      </div >
    </Grid>
  );
}

export default LandingPage;
