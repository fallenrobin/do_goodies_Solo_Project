import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import Paper from '@material-ui/core/Paper';


import { FaHouseUser } from 'react-icons/fa';
import { RiCake3Line } from "react-icons/ri";//cupcake
import { AiOutlineShop } from "react-icons/ai";//storefront
import { FaDonate } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaEdit } from 'react-icons/fa';
import { IoTrashOutline } from "react-icons/io5";
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';



const useStyles = makeStyles({
  root: {
    // width: 370,
    width: "100%",
    backgroundColor: "#E0E0E0",
    position: 'fixed',
    bottom: 0
    // marginTop: '100px' does nothing
    // height: '10vh'
  },
})


function Nav() {
  const user = useSelector((store) => store.user);

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  // TODO make navLocation reducer to replace useState
  const history = useHistory();

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  console.log('nav icon clicked:', value);

  /*
  const location = useSelector((store) => store.navReducer);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setReducer();
  }

  
  const setReducer = () => {
    dispatch({ type: 'SET_LOCATION', payload: value });
  }   TODO define dispatch
  */



  return (
    // <Paper sx={{ width:"100%", position: 'fixed', bottom: 0}} elevation={3}>

      <div>
        {/* <Link to="/home">
        <h2 className="nav-title">Prime Solo Project</h2>
      </Link> */}

        {/* If no user is logged in, show these links */}

        {!user.id && (
          // If there's no user, show login/registration links

          <BottomNavigation
            className={classes.root}
            value={location}
            onChange={(event, setValue) => handleChange(event, setValue)}
          >

            <BottomNavigationAction label="Bakesales" icon={<AiOutlineShop size={25} />}
              onClick={() => { history.push('/bakesale') }} />

            <BottomNavigationAction label="Sign Up" icon={<AiOutlineUserAdd size={25} />}
              onClick={() => { history.push('/registration') }} />

          </BottomNavigation>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <BottomNavigation
            className={classes.root}
            value={value}
            onChange={(event, setValue) => handleChange(event, setValue)}
          >

            <BottomNavigationAction
              label="Profile" icon={<FaHouseUser size={25}
                value="profile" />}
              onClick={() => { history.push('/user') }} />

            <BottomNavigationAction label="Treats"
              icon={<RiCake3Line size={25}
                value="treats"
              />}
              onClick={() => { history.push('/treatList') }} />

            <BottomNavigationAction label="Bakesales"
              icon={<AiOutlineShop size={25}
                value="bakesale"
              />}
              onClick={() => { history.push('/bakesale') }} />

            <BottomNavigationAction label="Donations"
              icon={<FaDonate size={25}
                value="donations"
              />}
              onClick={() => { history.push('/user') }} />

          </BottomNavigation>
        )}
        </div >
    // </Paper>
    
  );
}

export default Nav;
