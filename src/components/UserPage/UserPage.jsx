import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { IoLogOutOutline } from "react-icons/io5";

const useStyles = makeStyles({
  btn: {
    backgroundColor: "#84C3C8",
    color: 'black',
    '&:hover': {
      backgroundColor: "#42929D"
    },
    position: "fixed",
    bottom: "58px",
    right: "2px"
  },
})


function UserPage() {

  const user = useSelector((store) => store.user);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="container">
      {user.id ?
        <h2>Welcome, {user.username}!</h2>
        :
        null
      }
      <Grid container
        spacing={2} //spacing between grid items
      >
        <Grid item xs={2} />
        <Grid
          item xs={8}>
          <img src={require("./cakeDecorating.jpeg")} alt={"Baker cat"}
            style={{ width: 200, height: 200, borderRadius: 400 / 2, zIndex: '7' }} />
        </Grid>

        {/* <p>Your ID is: {user.id}</p> */}
        <Grid item xs={6}>

        </Grid>
        {/* <Button variant="contained" color="primary" onClick={() => { history.push('/treatList') }}>Treats List</Button> */}
        {/* <button onClick={history.push('/bakesaleList')}>Bake Sale List</button> */}
        {/* <button>Donations</button> */}
      </Grid>
      <Button className={classes.btn}
        variant="contained"
        color="primary"
        onClick={() => dispatch({ type: 'LOGOUT' })}>
        <IoLogOutOutline />
      </Button>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
