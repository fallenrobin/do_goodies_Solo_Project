import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid';
import { IoLogOutOutline } from "react-icons/io5";
import classNames from 'classnames';


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
  avatar: {
    webkitBoxShadow: "-9px -7px 25px 15px rgba(66,146,157,0.62), 12px 26px 25px 15px rgba(132,195,200,0.39), 3px 2px 9px 3px #F85FF8, 4px 10px 28px -5px #56F82E, -4px -4px 28px -2px #BA73F8, -4px -4px 28px -2px #BA73F8",
    boxShadow: "-9px -7px 25px 15px rgba(66,146,157,0.62), 12px 26px 25px 15px rgba(132,195,200,0.39), 3px 2px 9px 3px #F85FF8, 4px 10px 28px -5px #56F82E, -4px -4px 28px -2px #BA73F8, -4px -4px 28px -2px #BA73F8",
    margin: '5px'
  },
  roundImg: {
    width: "200px",
    height: "200px",
    borderRadius: "400" / "2",
  },
  roundImgSmall: {
    width: "70px",
    height: "70px",
    borderRadius: "400" / "2",
    backgroundColor: '#F4F4E1',
    objectFit: 'scale-down',
    objectPosition: 'bottom',
    webkitBoxShadow: "7px -7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26)",
    boxShadow: "7px -7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26)",
    margin: '30px'
  }
})

// rainbow box shadow: https://html-css-js.com/css/generator/box-shadow/

{/* <a title="pusheen cat heart" href="https://toppng.com/free-image/usheen-cutenessoverload-pusheen-the-cat-heart-PNG-free-PNG-Images_164455"</a> */ }

function UserPage() {

  const user = useSelector((store) => store.user);
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Grid>
      <div>


        <img className={classNames(classes.avatar, classes.roundImg)}
          src="images/cakeDecorating.jpeg" alt={"Baker cat"} />



        {
          user.id ?
            <h2 className='font-title'>Welcome, {user.username}!</h2>
            :
            <h2 className='font-title'>{user.username}</h2>
        }


        <img className={classes.roundImgSmall} src="images/pusheenCookie.png" alt={"Baker cat"} />


        <img className={classes.roundImgSmall} src="images/pusheenBakesale.png" alt={"Baker cat"} />
        {/* <img className={classes.roundImgSmall} src="images/pusheenTreat.png" alt={"Baker cat"} /> */}


        <Button variant="contained" className={classes.btn}
          color="primary"
          onClick={() => dispatch({ type: 'LOGOUT' })}>
          <IoLogOutOutline size={25} />
        </Button>

      </div >
    </Grid>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
