import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'

import { FaHouseUser } from 'react-icons/fa';
import { RiCake3Line } from "react-icons/ri";
import { AiOutlineShop } from "react-icons/ai";
import { FaDonate } from 'react-icons/fa';
import { FaUserEdit } from 'react-icons/fa';
import { AiOutlineUserAdd } from "react-icons/ai";



function NavBarUser() {

    return (
        <>
            <h1><FaHouseUser /> <RiCake3Line /> <AiOutlineShop /><FaDonate/> <FaUserEdit/>
            
            <AiOutlineUserAdd/>
            </h1>
        </>
    )

}

export default NavBarUser