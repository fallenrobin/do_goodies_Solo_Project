import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './UserPage.css';

import { Fab, makeStyles } from '@material-ui/core';
import { IoLogOutOutline } from "react-icons/io5";
import classNames from 'classnames';


const useStyles = makeStyles({
  btn: {
    color: 'gray',
    // '&:hover': {
    //   backgroundColor: "#42929D"
    // },
    position: "fixed",
    bottom: "58px",
    right: "28px"
  },
  avatar: {
    webkitBoxShadow: "-9px -7px 25px 15px rgba(66,146,157,0.62), 12px 26px 25px 15px rgba(132,195,200,0.39), 3px 2px 9px 3px #F85FF8, 4px 10px 28px -5px #56F82E, -4px -4px 28px -2px #BA73F8, -4px -4px 28px -2px #BA73F8",
    boxShadow: "-9px -7px 25px 15px rgba(66,146,157,0.62), 12px 26px 25px 15px rgba(132,195,200,0.39), 3px 2px 9px 3px #F85FF8, 4px 10px 28px -5px #56F82E, -4px -4px 28px -2px #BA73F8, -4px -4px 28px -2px #BA73F8",
    // margin: '5px'
    position: 'absolute',
    left: '2em',
    top: '1.5em'
  },
  roundImg: {
    width: "6.5em",
    height: "6.5em",
    borderRadius: "400" / "2",
    border: "3px #D9D0F8"
  },
  roundImgSmall: {
    width: "75px",
    height: "75px",
    borderRadius: "400" / "2",
    backgroundColor: '#F4F4E1',
    objectFit: 'scale-down',
    objectPosition: 'bottom',
    webkitBoxShadow: "7px -7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26)",
    boxShadow: "7px -7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26), -6px 7px 6px -1px rgba(0,0,0,0.26)",
    margin: '30px'
  },
  textBubble: {
    height: '3em',
    borderRadius: '300' / '2',
    backgroundColor: '#F4F4E1',
    padding: '8px',
    '&:hover': {
      backgroundColor: "#42929D",
    },
    textAlign: 'center',
  },
  fundraising: {
    color: 'black',
    width: '6em',
    position: 'absolute',
    left: '8em',
    top: '2.5em',
    padding: '10px',
    textAlign: 'center',
    // fontWeight: 'bold',
    borderRadius: '12px',
    backgroundColor: '#BFEEB7'
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
    <>

      <div className='header'>

        <img className={classNames(classes.avatar, classes.roundImg)}
          src="images/cakeDecorating.jpeg" alt={"Baker cat"} />
        {
          user.id ?
            <h2 className='font-title'>
              Welcome, {user.username}!</h2>
            :
            <h2 className='font-title'>
              {user.username}</h2>
        }

        <h2 className={classes.fundraising}
          onClick={() => { history.push('/donations') }}
        >$232 raised!</h2>
      </div>

      <div className='infoFabs'>

        <div
          className='oval'
          onClick={() => { history.push('/treatList') }}
        // FIXME fix hover effect for 'buttons?'
        >
          <p className='userInfo'>
            7 treats
          </p>
        </div>

        < div
          className='oval'
          onClick={() => { history.push('/bakesale') }}
        >
          <p className='userInfo'>
            6 bakesales
          </p>
        </div >
      </div>

      {user.id ?

        <Fab
          variant="extended"
          className={classes.btn}
          onClick={() => dispatch({ type: 'LOGOUT' })}>
          Log out <IoLogOutOutline size={25} />
        </Fab>

        :
        null
      }

    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
