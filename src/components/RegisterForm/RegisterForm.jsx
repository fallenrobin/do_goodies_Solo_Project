import React, { useState } from 'react';
import { Button } from '@material-ui/core';

import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [aboutMe, setAboutMe] = useState('');
  const [profilePic, setProfilePic] = useState('');


  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  const history = useHistory();


  const registerUser = (event) => {
    event.preventDefault();

    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        aboutMe: aboutMe,
        profilePic: profilePic
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>New User Registration</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="aboutMe">
          About me:
          <input
            type="text"
            name="aboutMe"
            value={aboutMe}
            maxLength={255}
            placeholder="Introduce yourself!"
            onChange={(event) => setAboutMe(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="aboutMe">
          Profile pic:
          <input
            type="text"
            name="profilePic"
            value={profilePic}
            maxLength={255}
            placeholder="Add image URL (optional)"
            onChange={(event) => setProfilePic(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button
          variant="contained"
          style={{ backgroundColor: "#a8e8ed", color: 'black' }}
          type="submit">
          Create account
        </Button>

        <Button
          onClick={() => { history.push('/') }}
          variant="outlined"
          style={{ color: "#5c5c5c" }}
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
