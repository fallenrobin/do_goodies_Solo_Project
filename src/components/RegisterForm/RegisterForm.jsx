import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';


function RegisterForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [aboutMe, setAboutMe] = useState('');

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
        aboutMe: aboutMe
      },
    });
  }; // end registerUser

  return (
    <form className="formPanel" onSubmit={registerUser}>
      <h2>Register User</h2>
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
        <input className="btn" type="submit" name="submit" value="Register" />
        <button onClick={()=>{history.push('/')}} className="btn">Cancel</button>
      </div>
    </form>
  );
}

export default RegisterForm;
