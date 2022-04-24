import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


function UserPage() {

  const user = useSelector((store) => store.user);
  const history = useHistory();

  return (
    <div className="container">

      <h2>Welcome, {user.username}!</h2>

      
      <img src={require("./cakeDecorating.jpeg")} alt={"Baker cat"}
      style={{ width: 200, height: 200, borderRadius: 400 / 2, zIndex: '7' }}/>


      <p>Your ID is: {user.id}</p>
      <LogOutButton className="btn" />
      <button onClick={() => { history.push('/treatList') }}>Treats List</button>
      {/* <button onClick={history.push('/bakesaleList')}>Bake Sale List</button> */}
      {/* <button>Donations</button> */}
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
