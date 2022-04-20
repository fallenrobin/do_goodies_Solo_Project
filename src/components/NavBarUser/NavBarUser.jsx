import React from 'react';
import { useHistory } from 'react-router-dom';


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
        bottom: 0,
    },
    // stickToBottom: {
        // width: '100%',
    //     position: 'fixed',
    //     bottom: 0,
    // }
})

// const styles = {
//     stickToBottom: {
//       width: '100%',
//       position: 'fixed',
//       bottom: 0,
//     },
//   };



function NavBarUser() {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }


    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                className={classes.root}
                value={value}
                onChange={(event, newValue) => handleChange(event, newValue)}
            >
                <BottomNavigationAction label="Profile" icon={<FaHouseUser size={25} />}
                    onClick={() => { history.push('/user') }} />

                <BottomNavigationAction label="Treats" icon={<RiCake3Line size={25} />}
                    onClick={() => { history.push('/treatList') }} />

                <BottomNavigationAction label="Bakesales" icon={<AiOutlineShop size={25} />}
                    onClick={() => { history.push('/bakesale') }} />

                <BottomNavigationAction label="Donations" icon={<FaDonate size={25} />}
                    onClick={() => { history.push('/user') }} />


                {/* <RiCake3Line /> <AiOutlineShop /><FaDonate/> <FaUserEdit/>
            
            <AiOutlineUserAdd/> */}

            </BottomNavigation>
        </Paper>
    )

}

export default NavBarUser;